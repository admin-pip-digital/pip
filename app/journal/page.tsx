import type { Metadata } from 'next'
import Link from 'next/link'
import { journalSorted } from '@/data/journal'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Notes and posts by Eric Moore.',
  robots: { index: false, follow: true },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function JournalPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-8 pt-12 pb-24 md:pt-16 md:pb-32">
      <header className="mb-12 md:mb-16">
        <h1 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em]">
          Journal
        </h1>
      </header>

      {journalSorted.length === 0 ? (
        <p className="text-neutral-500 font-light">Nothing here yet.</p>
      ) : (
        <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
          {journalSorted.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/journal/${entry.slug}`}
                className="group block py-6 md:py-8"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                  <time
                    dateTime={entry.date}
                    className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 md:w-32 shrink-0 mb-2 md:mb-0"
                  >
                    {formatDate(entry.date)}
                  </time>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl md:text-3xl leading-[1.2] tracking-[-0.02em] group-hover:underline underline-offset-4">
                      {entry.title}
                    </h2>
                    {entry.excerpt && (
                      <p className="mt-2 text-neutral-600 font-light leading-relaxed">
                        {entry.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
