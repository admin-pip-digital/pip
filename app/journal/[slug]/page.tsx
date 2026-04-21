import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  journal,
  getJournalEntryBySlug,
  type JournalEntry,
} from '@/data/journal'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return journal.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = getJournalEntryBySlug(slug)
  if (!entry) return {}
  return {
    title: `${entry.title} — Journal`,
    description:
      entry.excerpt ??
      (typeof entry.body === 'string' ? entry.body : entry.body[0]),
    robots: { index: false, follow: true },
  }
}

function paragraphsOf(body: JournalEntry['body']): string[] {
  if (Array.isArray(body)) return body
  return body.split('\n\n')
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default async function JournalEntryPage({ params }: Props) {
  const { slug } = await params
  const entry = getJournalEntryBySlug(slug)
  if (!entry) notFound()

  const paragraphs = paragraphsOf(entry.body)

  return (
    <article className="max-w-[720px] mx-auto px-4 md:px-8 pt-12 pb-24 md:pt-16 md:pb-32">
      <Link
        href="/journal"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-10"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 3L5 8l5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to journal
      </Link>

      <header className="mb-10 md:mb-14">
        <time
          dateTime={entry.date}
          className="text-[13px] tracking-[0.12em] uppercase text-neutral-400"
        >
          {formatDate(entry.date)}
        </time>
        <h1 className="mt-3 font-display text-2xl md:text-3xl leading-[1.2] tracking-[-0.02em]">
          {entry.title}
        </h1>
      </header>

      <div>
        {paragraphs.map((para, i) => {
          const isHeading = para.startsWith('## ')
          const isFirst = i === 0
          const prevIsHeading = paragraphs[i - 1]?.startsWith('## ')

          if (isHeading) {
            return (
              <h2
                key={i}
                className={`font-display text-xl md:text-2xl leading-[1.2] tracking-[-0.02em] ${
                  isFirst ? '' : 'mt-12 md:mt-16'
                }`}
              >
                {para.slice(3)}
              </h2>
            )
          }
          return (
            <p
              key={i}
              className={`text-neutral-800 font-light text-base md:text-lg leading-relaxed ${
                isFirst ? '' : prevIsHeading ? 'mt-4' : 'mt-5'
              }`}
            >
              {para}
            </p>
          )
        })}
      </div>

      <div className="mt-20 md:mt-28 flex justify-center">
        <Link
          href="/journal"
          className="inline-block px-5 py-2.5 rounded-full border border-neutral-950 text-sm hover:bg-neutral-950 hover:text-white transition-colors duration-300"
        >
          Back to journal
        </Link>
      </div>
    </article>
  )
}
