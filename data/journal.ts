export type JournalEntry = {
  slug: string
  title: string
  date: string
  excerpt?: string
  body: string | string[]
}

export const journal: JournalEntry[] = [
  {
    slug: 'coaching-a-recent-college-graduate',
    title:
      "What I've learned coaching a college graduate looking for entry-level work",
    date: '2026-04-21',
    excerpt:
      "Earlier this year I told someone I care about I'd meet with her every week until she found a job she loved. A few months in, here's what that's taught me.",
    body: [
      "My sister-in-law, Lydia Macdonald, graduated recently with her BFA in graphic design. Earlier this year, I asked her if she would like to meet every week until she found a job she loved, knowing first-hand how hard that transition can be. No timeline, no strings attached. She accepted, and we've been meeting every Wednesday morning since.",
      '## Why? The jump from graduation to full-time work is harder than it looks',
      'When I graduated college in 2017, I had been through the hoops and checked the degree box and met with the career counselors and somehow still had no clue what would happen next. I couch-surfed for 3 months, applying for jobs with my fingers crossed that something would come through.',
      'I get how painful and stressful that search is, and I want to make that easier for others if I can so they can go through their own experience feeling supported in ways that might have helped me.',
      '## What our meetings actually look like',
      'Lydia and I get on Google Meet once a week for 30 minutes to touch base, review the past week, set specific goals for the next week, and hold each other accountable to our previous commitments.',
      "## What I've learned",
      "It's always a little awkward at first. I've come to think that's a good sign — it means something real is happening. We spend so much energy performing confidence that we forget how good it feels to just say I don't know what I'm doing out loud to someone who isn't going to judge you for it.",
      "Lydia already had what she needed. Talent, work ethic, genuine warmth were all there. What the weekly calls gave her wasn't anything I invented; it was just a mirror and a little momentum. Showing up week after week, even when it's hard, is its own kind of skill. I've watched us both build that muscle in real time.",
      "Sometimes the answer is simpler than you can see on your own. That's not a knock on anyone… it's just hard to read the label from inside the jar.",
      "We're still meeting. Interviews are happening. I'm hoping alongside her.",
      '## An open invitation',
      "If you've recently graduated and the path forward feels unclear — you're not alone, and that uncertainty doesn't say anything about your worth or your future.",
      "And if you're a professional reading this with a little time to spare: there's probably someone in your orbit who could use thirty minutes of you. It costs almost nothing and it might mean everything to them.",
      "If you're a designer, creative director, or recruiter who works with entry-level talent — I'd love to introduce you to Lydia. She's a designer with a BFA looking for her first full-time role in UX or graphic design, and she's the real deal.",
    ],
  },
]

export const journalSorted = [...journal].sort((a, b) =>
  b.date.localeCompare(a.date)
)

export function getJournalEntryBySlug(slug: string): JournalEntry | undefined {
  return journal.find((entry) => entry.slug === slug)
}
