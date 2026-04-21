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
    timeZone: 'UTC',
  })
}

export default function JournalPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-8 pt-12 pb-24 md:pt-16 md:pb-32">
      {journalSorted.length === 0 ? (
        <p className="text-neutral-500 font-light">Nothing here yet.</p>
      ) : (
        <ul className="space-y-4">
          {journalSorted.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/journal/${entry.slug}`}
                className="block rounded-2xl border border-neutral-200 bg-white px-6 py-6 md:px-8 md:py-8 transition-colors duration-200 hover:bg-neutral-100"
              >
                <h2 className="font-display text-xl md:text-2xl leading-[1.2] tracking-[-0.02em]">
                  {entry.title}
                </h2>
                <p className="mt-2 text-[13px] tracking-[0.12em] uppercase text-neutral-400">
                  <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                  <span aria-hidden="true" className="mx-2">·</span>
                  Posted by Eric Moore
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
