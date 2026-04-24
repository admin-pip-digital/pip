export type JournalEntry = {
  slug: string
  title: string
  date: string
  excerpt?: string
  body: string | string[]
}

export const journal: JournalEntry[] = [
  {
    slug: 'utilities-that-want-to-exist',
    title: 'The utilities that want to exist',
    date: '2026-04-23',
    excerpt:
      'It started with a Postgres database and a conversation about Utah voter privacy law. It ended with something that felt like a credo.',
    body: [
      'Something shifted today that I want to remember.',
      "I've been building Plainview — a civic transparency tool that takes public voting records and translates them into plain language so regular people can understand what their representatives are actually doing. We got a database live, tables seeded with real Utah data, real bills including one that's about to make 1.3 million Utahns' addresses public on May 25. Most of them have no idea.",
      'But somewhere in the middle of building it I stopped and asked the question I always forget to ask first: what is this actually for?',
      'The answer that came back surprised me.',
      "Not accountability. Not activism. Not even transparency exactly. A utility. The kind of thing that doesn't tell you what to think — it just makes sure you can see. A clear mirror, not a lens with someone else's tint on it. That reframe changed everything about what Plainview is. And then it revealed something bigger.",
      "I've been circling a personal mission for years without naming it.",
      "I build utilities that want to exist but don't yet. Things that level the playing field without taking sides. Things that trust people to think for themselves once they can actually see clearly. The telehealth platform I worked on recently was trying to level the playing field between patients and providers. Plainview is trying to do the same thing between citizens and their legislators. Pip the agency was about giving small teams access to design they couldn't otherwise afford. Luminous Estate and Wingmarks are about giving writers a home that takes them seriously. The children's book I wrote — about a seedling navigating seasons and trying to belong — was about a kid who needed to know there was a place for them even before they could prove it.",
      "The family cookbook. Hosting people around a table. Learning how things are actually made — the why behind everything. Somewhere in me there has always been this drive to understand what's under the hood, to pull back the curtain, to make the hidden thing visible. For most of my life I was too afraid to try. Or I was told, in small ways and large ones, that what I had to offer wasn't quite enough to be valuable to anyone.",
      'I spent a long time wondering if anyone wanted to hear my voice at all.',
      "What I've learned this past year is that ownership rarely gets handed to you. You take it, quietly, by doing the work anyway. By planting seeds in soil you're not sure will hold. By learning how servers work and how databases are structured and how civic data flows from a statehouse to a screen — not because someone asked you to, but because the thing needed to exist and you were the one standing there.",
      "There's a visual I keep coming back to: the last inch of pushing through dirt before you break into sunlight. Carrying the weight of the shell that kept you alive, that you've depended on your whole life, up through the resistance — and then finally spreading open, exhaling, transitioning from seed to sprout. Knowing that this season you will be stronger. That the hardest part was always going to be the last part.",
      "I didn't plan for today to be the day any of this became clear. It started with a Postgres database and a conversation about Utah voter privacy law. It ended with something that felt like a credo.",
      'The restraint is the point. Anyone can build a tool with a point of view. The harder thing — the rarer thing — is building the neutral infrastructure underneath. The clear mirror. The thing that shows everyone the same true reflection regardless of where they stand.',
      "I don't know yet who needs to read this or where it leads. But I know the seeds are in the ground. And I'm done being afraid of the sunlight.",
    ],
  },
  {
    slug: 'coaching-college-graduate',
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
