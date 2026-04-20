import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  sketchbook,
  getSketchbookBySlug,
  sketchbookTagLabel,
  type SketchbookItem,
} from '@/data/sketchbook'

type Props = { params: Promise<{ slug: string }> }

// Hidden for now — remove this flag to re-enable the sketchbook.
const SKETCHBOOK_HIDDEN = true

export async function generateStaticParams() {
  if (SKETCHBOOK_HIDDEN) return []
  return sketchbook.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getSketchbookBySlug(slug)
  if (!item) return {}
  return {
    title: `${item.title} — Sketchbook`,
    description: typeof item.body === 'string' ? item.body : item.body?.[0],
  }
}

function paragraphsOf(body: SketchbookItem['body']): string[] {
  if (!body) return []
  if (Array.isArray(body)) return body
  return body.split('\n\n')
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function SketchbookEntryPage({ params }: Props) {
  if (SKETCHBOOK_HIDDEN) notFound()
  const { slug } = await params
  const item = getSketchbookBySlug(slug)
  if (!item) notFound()

  const images = item.gallery && item.gallery.length > 0 ? item.gallery : [item.cover]
  const paragraphs = paragraphsOf(item.body)
  const { details } = item

  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-8 pt-12 pb-24 md:pt-16 md:pb-32">
      <Link
        href="/sketchbook"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to sketchbook
      </Link>

      <header className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400">
            {formatDate(item.date)}
          </p>
          {item.tag && (
            <span className="inline-flex px-2 py-0.5 rounded-full bg-neutral-100 text-[11px] tracking-[0.1em] uppercase text-neutral-600">
              {sketchbookTagLabel[item.tag]}
            </span>
          )}
        </div>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] mb-8">
          {item.title}
        </h1>

        {details && (details.medium || details.client || details.collaborators?.length) && (
          <dl className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {details.medium && (
              <div>
                <dt className="text-[12px] tracking-[0.12em] uppercase text-neutral-400 mb-1">Medium</dt>
                <dd className="text-neutral-900">{details.medium}</dd>
              </div>
            )}
            {details.client && (
              <div>
                <dt className="text-[12px] tracking-[0.12em] uppercase text-neutral-400 mb-1">Client</dt>
                <dd className="text-neutral-900">{details.client}</dd>
              </div>
            )}
            {details.collaborators && details.collaborators.length > 0 && (
              <div>
                <dt className="text-[12px] tracking-[0.12em] uppercase text-neutral-400 mb-1">Collaborators</dt>
                <dd className="text-neutral-900">{details.collaborators.join(', ')}</dd>
              </div>
            )}
          </dl>
        )}
      </header>

      <div className="space-y-6 md:space-y-10 mb-16 md:mb-20">
        {images.map((img, i) => (
          <figure key={i}>
            <div
              className="relative rounded-2xl overflow-hidden bg-neutral-100"
              style={{ aspectRatio: img.aspectRatio ?? item.cover.aspectRatio ?? '3/2' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            {img.caption && (
              <figcaption className="mt-3 text-sm text-neutral-500">{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {paragraphs.length > 0 && (
        <div className="max-w-2xl space-y-5">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-neutral-800 font-light text-base md:text-lg leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      )}

      <div className="mt-20 md:mt-28 flex justify-center">
        <Link
          href="/sketchbook"
          className="inline-block px-5 py-2.5 rounded-full border border-neutral-950 text-sm hover:bg-neutral-950 hover:text-white transition-colors duration-300"
        >
          Back to sketchbook
        </Link>
      </div>
    </div>
  )
}
