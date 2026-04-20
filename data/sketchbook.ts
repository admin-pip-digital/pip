export type SketchbookImage = {
  src: string
  alt: string
  caption?: string
  aspectRatio?: string
}

export type SketchbookTag = 'concept' | 'client' | 'journal' | 'experiment'

export const sketchbookTagLabel: Record<SketchbookTag, string> = {
  concept: 'Concept / Spec',
  client: 'Client work',
  journal: 'Journal',
  experiment: 'Experiment',
}

export type SketchbookItem = {
  slug: string
  title: string
  date: string
  tag?: SketchbookTag
  cover: SketchbookImage
  details?: {
    medium?: string
    client?: string
    collaborators?: string[]
  }
  gallery?: SketchbookImage[]
  body?: string | string[]
}

export const sketchbook: SketchbookItem[] = [
  {
    slug: 'placeholder-one',
    title: 'Quiet morning sketch',
    date: '2026-04-18',
    tag: 'journal',
    cover: { src: '/images/ecommerce-hero.png', alt: 'Placeholder', aspectRatio: '4/5' },
    details: { medium: 'Figma' },
    body: 'Replace this with a real sketchbook entry. The body can be a single string or an array of paragraphs.',
  },
  {
    slug: 'placeholder-two',
    title: 'Brand explorations',
    date: '2026-04-10',
    tag: 'concept',
    cover: { src: '/images/brand-identity.png', alt: 'Placeholder', aspectRatio: '1' },
    details: { medium: 'Procreate', client: 'Personal', collaborators: ['Someone'] },
    gallery: [
      { src: '/images/brand-identity.png', alt: 'First image' },
      { src: '/images/ascend.png', alt: 'Second image' },
    ],
    body: [
      'First paragraph of a longer writeup. Write as much or as little as the entry needs.',
      'Second paragraph. The sketchbook is for process — finished pieces, half-finished pieces, notes, experiments.',
    ],
  },
  {
    slug: 'placeholder-three',
    title: 'Interface studies',
    date: '2026-04-02',
    tag: 'experiment',
    cover: { src: '/images/coach-app-hero.png', alt: 'Placeholder', aspectRatio: '3/4' },
    details: { medium: 'Figma' },
  },
  {
    slug: 'placeholder-four',
    title: 'Type specimen',
    date: '2026-03-24',
    tag: 'experiment',
    cover: { src: '/images/blog.png', alt: 'Placeholder', aspectRatio: '16/9' },
    details: { medium: 'Affinity' },
  },
  {
    slug: 'placeholder-five',
    title: 'Weekend logo study',
    date: '2026-03-15',
    tag: 'concept',
    cover: { src: '/images/epic-brand-1.png', alt: 'Placeholder', aspectRatio: '1' },
    details: { medium: 'Illustrator' },
  },
  {
    slug: 'placeholder-six',
    title: 'Color experiments and a longer title to test wrapping',
    date: '2026-03-03',
    tag: 'experiment',
    cover: { src: '/images/ascend.png', alt: 'Placeholder', aspectRatio: '4/3' },
    details: { medium: 'Procreate' },
  },
  {
    slug: 'placeholder-seven',
    title: 'Workflow diagram',
    date: '2026-02-22',
    tag: 'client',
    cover: { src: '/images/client-app-hero.png', alt: 'Placeholder', aspectRatio: '3/4' },
    details: { medium: 'Figma', client: 'Internal' },
  },
  {
    slug: 'placeholder-eight',
    title: 'Dogs',
    date: '2026-02-11',
    tag: 'journal',
    cover: { src: '/images/dogs.png', alt: 'Placeholder', aspectRatio: '4/5' },
    details: { medium: 'iPhone' },
    gallery: [{ src: '/images/dogs.png', alt: 'Dogs' }],
    body: 'Sometimes a sketchbook entry is just a photo.',
  },
  {
    slug: 'placeholder-nine',
    title: 'Grid study',
    date: '2026-01-30',
    tag: 'concept',
    cover: { src: '/images/optavia-agency-1.png', alt: 'Placeholder', aspectRatio: '2/3' },
    details: { medium: 'Figma' },
  },
  {
    slug: 'placeholder-ten',
    title: 'Mobile patterns',
    date: '2026-01-14',
    tag: 'client',
    cover: { src: '/images/epic-mobile-1.png', alt: 'Placeholder', aspectRatio: '9/16' },
    details: { medium: 'Figma' },
  },
]

export const sketchbookSorted = [...sketchbook].sort((a, b) =>
  b.date.localeCompare(a.date)
)

export function getSketchbookBySlug(slug: string): SketchbookItem | undefined {
  return sketchbook.find((s) => s.slug === slug)
}
