export type JournalEntry = {
  slug: string
  title: string
  date: string
  excerpt?: string
  body: string | string[]
}

export const journal: JournalEntry[] = []

export const journalSorted = [...journal].sort((a, b) =>
  b.date.localeCompare(a.date)
)

export function getJournalEntryBySlug(slug: string): JournalEntry | undefined {
  return journal.find((entry) => entry.slug === slug)
}
