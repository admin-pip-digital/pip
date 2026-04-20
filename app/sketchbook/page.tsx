import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  sketchbookSorted,
  sketchbookTagLabel,
  type SketchbookTag,
} from '@/data/sketchbook'

// Hidden for now — remove this notFound() call to re-enable the sketchbook.
const SKETCHBOOK_HIDDEN = true

export const metadata: Metadata = {
  title: 'Sketchbook',
  description:
    'A drawer of in-progress work, experiments, and miscellaneous things by Eric Moore.',
}

const tagOrder: SketchbookTag[] = ['concept', 'client', 'journal', 'experiment']

function isTag(value: string | undefined): value is SketchbookTag {
  return !!value && (tagOrder as string[]).includes(value)
}

type Props = {
  searchParams: Promise<{ tag?: string }>
}

export default async function SketchbookPage({ searchParams }: Props) {
  if (SKETCHBOOK_HIDDEN) notFound()
  const { tag } = await searchParams
  const activeTag = isTag(tag) ? tag : undefined
  const items = activeTag
    ? sketchbookSorted.filter((s) => s.tag === activeTag)
    : sketchbookSorted

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-8 pb-24 md:pt-12 md:pb-32">
      <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
        <FilterPill href="/sketchbook" active={!activeTag} label="All" />
        {tagOrder.map((t) => (
          <FilterPill
            key={t}
            href={`/sketchbook?tag=${t}`}
            active={activeTag === t}
            label={sketchbookTagLabel[t]}
          />
        ))}
      </div>

      {items.length === 0 ? (
        <p className="text-neutral-500 font-light py-12">Nothing here yet.</p>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/sketchbook/${item.slug}`}
              className="group relative block rounded-2xl overflow-hidden mb-4 break-inside-avoid bg-neutral-100"
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: item.cover.aspectRatio ?? '1' }}
              >
                <Image
                  src={item.cover.src}
                  alt={item.cover.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/75 transition-colors duration-300 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-display text-xl leading-[1.2] tracking-[-0.02em] text-white">
                    {item.title}
                  </p>
                  {item.tag && (
                    <span className="mt-3 inline-flex px-2 py-1 rounded-full border border-white/40 text-[10px] tracking-[0.1em] uppercase text-white">
                      {sketchbookTagLabel[item.tag]}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function FilterPill({
  href,
  active,
  label,
}: {
  href: string
  active: boolean
  label: string
}) {
  const base =
    'inline-flex items-center px-4 py-1.5 rounded-full text-sm transition-colors duration-300 border'
  const styles = active
    ? 'bg-neutral-950 text-white border-neutral-950'
    : 'border-neutral-300 text-neutral-600 hover:border-neutral-950 hover:text-neutral-950'
  return (
    <Link href={href} className={`${base} ${styles}`} scroll={false}>
      {label}
    </Link>
  )
}
