import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  work,
  getWorkBySlug,
  type CaseStudyImage,
  type CaseStudyReview,
  type DiagramVariant,
  type ImageBlock,
  type Section,
  type SectionLayout,
} from '@/data/work'
import { isUnlocked } from '@/lib/work-auth'
import UnlockOverlay from './UnlockOverlay'

type Props = { params: Promise<{ slug: string }> }

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  return work
    .filter((w) => w.status === 'published' && !w.protected)
    .map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getWorkBySlug(slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.subtitle,
  }
}

function paragraphsOf(body: Section['body']): string[] {
  if (!body) return []
  if (Array.isArray(body)) return body
  return body.split('\n\n')
}

function resolveLayout(section: Section, index: number): SectionLayout {
  if (section.layout) return section.layout
  return index === 0 ? 'intro' : 'prose'
}

function SectionBody({ section }: { section: Section }) {
  const paragraphs = paragraphsOf(section.body)
  return (
    <>
      {paragraphs.length > 0 && (
        <div className="space-y-5">
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
      {section.list && section.list.length > 0 && (
        <ul
          className={`mt-6 ${
            section.listColumns === 2
              ? 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3'
              : 'space-y-3'
          }`}
        >
          {section.list.map((item, i) => (
            <li
              key={i}
              className="text-neutral-800 font-light text-base md:text-lg leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-3 before:h-px before:bg-neutral-300"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

function IntroSection({ section }: { section: Section }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:items-start">
        <div>
          <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 mb-4">
            {section.heading}
          </p>
          <h2 className="font-display text-2xl md:text-4xl leading-[1.15] tracking-[-0.02em]">
            {paragraphsOf(section.body)[0] ?? ''}
          </h2>
        </div>
        <div className="space-y-5 text-neutral-800 font-light text-base md:text-lg leading-relaxed pt-1">
          {paragraphsOf(section.body)
            .slice(1)
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          {section.list && section.list.length > 0 && (
            <ul className="space-y-3">
              {section.list.map((item, i) => (
                <li
                  key={i}
                  className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-3 before:h-px before:bg-neutral-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

function TwoColSection({ section }: { section: Section }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:items-start">
        <div>
          {section.eyebrow && (
            <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 mb-4">
              {section.eyebrow}
            </p>
          )}
          <h2 className="font-display text-2xl md:text-4xl leading-[1.1] tracking-[-0.02em]">
            {section.heading}
          </h2>
        </div>
        <div className="pt-1">
          <SectionBody section={section} />
        </div>
      </div>
    </section>
  )
}

function ProseSection({ section }: { section: Section }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
      <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 mb-4">
        {section.heading}
      </p>
      <div className="max-w-2xl">
        <SectionBody section={section} />
      </div>
    </section>
  )
}

function StatsSection({ section }: { section: Section }) {
  if (!section.stats || section.stats.length === 0) return null
  const count = section.stats.length
  const cols =
    count === 2
      ? 'grid-cols-2'
      : count === 3
        ? 'grid-cols-3'
        : 'grid-cols-2 md:grid-cols-4'
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
      {section.heading && (
        <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 mb-6 md:mb-10">
          {section.heading}
        </p>
      )}
      <div className={`grid ${cols} gap-8`}>
        {section.stats.map((stat) => (
          <div key={stat.label} className="border-t border-neutral-200 pt-6">
            <p className="font-display text-2xl md:text-4xl leading-[1.05] tracking-[-0.02em] mb-3">
              {stat.value}
            </p>
            <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function QuoteSection({ section }: { section: Section }) {
  const paragraphs = paragraphsOf(section.body)
  const quote = paragraphs[0] ?? ''
  return (
    <section className="bg-neutral-100 border-t border-b border-neutral-200 py-20 mb-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <blockquote className="font-display text-xl md:text-3xl leading-[1.2] tracking-[-0.02em] text-neutral-700 max-w-[640px] mx-auto text-center">
          {quote}
        </blockquote>
        {section.heading && (
          <p className="mt-6 text-sm text-neutral-500 text-center">
            — {section.heading}
          </p>
        )}
      </div>
    </section>
  )
}

function toParagraphs(value?: string | string[]): string[] {
  if (!value) return []
  if (Array.isArray(value)) return value
  return value.split('\n\n')
}

function ReviewSection({ review }: { review: CaseStudyReview }) {
  const blocks: { label: string; paragraphs: string[] }[] = [
    { label: 'Outcomes', paragraphs: toParagraphs(review.outcomes) },
    { label: 'Why it worked', paragraphs: toParagraphs(review.reflection) },
    ...(review.extra ?? []).map((e) => ({
      label: e.label,
      paragraphs: toParagraphs(e.body),
    })),
    { label: 'My role', paragraphs: toParagraphs(review.role) },
  ].filter((b) => b.paragraphs.length > 0)

  if (blocks.length === 0) return null

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:items-start">
        <div>
          <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 mb-4">
            In review
          </p>
          <h2 className="font-display text-2xl md:text-4xl leading-[1.1] tracking-[-0.02em]">
            Outcomes &amp; reflection
          </h2>
        </div>
        <div className="pt-1 space-y-10">
          {blocks.map((block) => (
            <div key={block.label}>
              <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 mb-4">
                {block.label}
              </p>
              <div className="space-y-5">
                {block.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-neutral-800 font-light text-base md:text-lg leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderSection(section: Section, index: number) {
  const layout = resolveLayout(section, index)
  switch (layout) {
    case 'intro':
      return <IntroSection section={section} />
    case 'two-col':
      return <TwoColSection section={section} />
    case 'quote':
      return <QuoteSection section={section} />
    case 'stats':
      return <StatsSection section={section} />
    case 'prose':
    default:
      return <ProseSection section={section} />
  }
}

function WorkflowDiagram() {
  const steps = [
    {
      label: 'UI-related task',
      body: 'A developer or AI agent begins work on a new screen, component, or visual change anywhere across the provider and patient apps.',
    },
    {
      label: 'Reference readme.md',
      body: 'Before writing code, they open the Script readme. It orients them to the system and points to the specific files that apply to the work at hand — global foundations plus the relevant brand layer.',
    },
    {
      label: 'Relevant context',
      body: 'They pull in atoms.md (tokens, type, spacing, motion), molecules.md (reusable patterns), and any app-specific overrides. Together these define the valid space of decisions before a single line is written.',
    },
    {
      label: 'Consistent, usable UI',
      body: 'The UI is built with Tailwind v4 utilities that map one-to-one to the tokens in the docs. No hardcoded values, no drift — the output looks and behaves like the rest of the product.',
    },
  ]
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
      <div className="rounded-2xl border border-neutral-300 bg-neutral-100 px-6 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.label} className="relative">
              <p className="text-[11px] tracking-[0.14em] uppercase text-neutral-500 mb-3">
                Step {i + 1}
              </p>
              <p className="font-display text-base md:text-xl leading-[1.2] tracking-[-0.01em] mb-3">
                {step.label}
              </p>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DiagramRender({ variant }: { variant: DiagramVariant }) {
  switch (variant) {
    case 'workflow':
      return <WorkflowDiagram />
    default:
      return null
  }
}

function ImageFrame({
  image,
  sizes,
  aspectClass,
}: {
  image: CaseStudyImage
  sizes: string
  aspectClass: string
}) {
  const effectiveAspect = image.aspect ?? aspectClass
  const framed = !image.shadow && !image.bare
  return (
    <figure>
      <div
        className={`relative w-full ${effectiveAspect} ${
          framed
            ? 'rounded-2xl overflow-hidden border border-neutral-300 bg-neutral-200'
            : ''
        }`}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={
              image.shadow
                ? 'object-contain drop-shadow-lg md:drop-shadow-2xl'
                : image.bare
                  ? 'object-contain'
                  : 'object-cover'
            }
            style={
              image.objectPosition
                ? { objectPosition: image.objectPosition }
                : undefined
            }
            sizes={sizes}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 px-6 text-center">
              {image.alt}
            </p>
          </div>
        )}
      </div>
      {image.caption && (
        <figcaption className="mt-4 text-sm text-neutral-500 font-light leading-relaxed max-w-xl">
          {image.caption}
        </figcaption>
      )}
    </figure>
  )
}

function ImageBlockRender({ block }: { block: ImageBlock }) {
  if (!block.images.length) return null
  const layout = block.layout ?? (block.images.length >= 2 ? 'pair' : 'full')

  if (layout === 'full') {
    return (
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <div className="space-y-8 md:space-y-12">
          {block.images.map((img) => (
            <ImageFrame
              key={img.src}
              image={img}
              aspectClass="aspect-[16/9]"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          ))}
        </div>
      </section>
    )
  }

  if (layout === 'pair') {
    const pairs: CaseStudyImage[][] = []
    for (let i = 0; i < block.images.length; i += 2) {
      pairs.push(block.images.slice(i, i + 2))
    }
    return (
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <div className="space-y-8 md:space-y-12">
          {pairs.map((pair, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pair.map((img) => (
                <ImageFrame
                  key={img.src}
                  image={img}
                  aspectClass="aspect-[3/4]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (layout === 'logos') {
    return (
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <div className="rounded-2xl border border-neutral-300 bg-neutral-100 px-8 md:px-12 py-10 md:py-14">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-10 items-center justify-items-center">

            {block.images.map((img, i) => (
              <div
                key={img.src ?? `logo-${i}`}
                className="flex flex-col items-center gap-1 w-full max-w-[120px]"
              >
                <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                  {img.src ? (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-4"
                      sizes="120px"
                    />
                  ) : (
                    <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-500 px-2 text-center">
                      {img.alt}
                    </p>
                  )}
                </div>
                <p className="text-base text-neutral-800 font-medium text-center">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // stack
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
        {block.images.map((img) => (
          <ImageFrame
            key={img.src}
            image={img}
            aspectClass="aspect-[4/3]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}
      </div>
    </section>
  )
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const item = getWorkBySlug(slug)

  if (!item || item.status === 'coming-soon' || !item.content) {
    notFound()
  }

  const locked = !!item.protected && !(await isUnlocked(slug))
  const { content } = item
  const cover = item.coverImage || content.images[0]?.src
  const trailingImages = content.images.filter(
    (img) => !cover || img.src !== cover,
  )

  return (
    <article>
      {/* ── Privacy banner ── */}
      {!locked && item.banner && (
        <div className="bg-brand text-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-3">
            <p className="text-xs md:text-sm font-semibold leading-[1.5] text-center text-white">
              {item.banner}
            </p>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-14 pb-16 md:pt-20">
        <p className="text-[11.5px] md:text-[13px] leading-[1.5] tracking-[0.12em] uppercase text-neutral-500 mb-4 md:mb-6">
          {locked ? (
            <>
              Confidential
              <span className="text-neutral-300 mx-2">·</span>
              {item.year}
            </>
          ) : (
            <>
              {item.client}
              <span className="text-neutral-300 mx-2">·</span>
              {item.year}
              {item.tags.length > 0 && (
                <>
                  <span className="text-neutral-300 mx-2">·</span>
                  {item.tags.join(' · ')}
                </>
              )}
            </>
          )}
        </p>
        <h1 className="font-display text-4xl md:text-[56px] leading-[1.05] tracking-[-0.03em] max-w-4xl mb-5 md:mb-8">
          {item.title}
        </h1>
        {!locked && item.subtitle && (
          <p className="text-neutral-800 font-light text-base md:text-xl leading-relaxed max-w-2xl">
            {item.subtitle}
          </p>
        )}
      </section>

      {/* ── Cover image ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-300 bg-neutral-200">
          {cover ? (
            <Image
              src={cover}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 px-6 text-center">
                Cover image
              </p>
            </div>
          )}
        </div>
      </section>

      {!locked && (
        <>
      {/* ── Stats ── */}
      {content.stats && content.stats.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
          <div
            className={`grid ${
              content.stats.length === 3
                ? 'grid-cols-3'
                : 'grid-cols-2 md:grid-cols-4'
            } gap-8`}
          >
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-neutral-200 pt-6"
              >
                <p className="font-display text-2xl md:text-4xl leading-[1.05] tracking-[-0.02em] mb-3">
                  {stat.value}
                </p>
                <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Sections (with interleaved images via section.after) ── */}
      {content.sections.map((section, i) => (
        <div key={i}>
          {renderSection(section, i)}
          {section.diagram && <DiagramRender variant={section.diagram} />}
          {section.after && <ImageBlockRender block={section.after} />}
        </div>
      ))}

      {/* ── Pull quote ── */}
      {content.pullQuote && (
        <section className="bg-neutral-100 border-t border-b border-neutral-200 py-20 mb-28">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <blockquote className="font-display text-xl md:text-3xl leading-[1.2] tracking-[-0.02em] text-neutral-700 max-w-[640px] mx-auto text-center">
              &ldquo;{content.pullQuote.text}&rdquo;
            </blockquote>
            {content.pullQuote.attribution && (
              <p className="mt-6 text-sm text-neutral-500 text-center">
                — {content.pullQuote.attribution}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── Trailing gallery ── */}
      {trailingImages.length > 0 && (
        <ImageBlockRender
          block={{
            images: trailingImages,
            layout: trailingImages.length >= 2 ? 'pair' : 'full',
          }}
        />
      )}

      {/* ── Outcomes & reflection ── */}
      {content.review && <ReviewSection review={content.review} />}

      {/* ── Next project reveal ── */}
      {(() => {
        const next = content.nextSlug ? getWorkBySlug(content.nextSlug) : undefined
        const hasNext = next && next.status === 'published'
        if (!hasNext) {
          return (
            <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
              <div className="border-t border-neutral-200 pt-10 md:pt-16 flex flex-col items-center text-center">
                <h2 className="font-display text-xl md:text-2xl leading-[1.1] tracking-[-0.02em] mb-3">
                  You&rsquo;ve reached the end 💔
                </h2>
                <p className="text-neutral-600 font-light leading-relaxed max-w-md mb-8">
                  If anything here sparked an idea, feel free to reach out. Thanks for reviewing my work!
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/"
                    className="inline-block px-5 py-2.5 rounded-full bg-neutral-950 text-white text-sm hover:bg-neutral-700 transition-colors duration-300"
                  >
                    Return home
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block px-5 py-2.5 rounded-full border border-neutral-950 text-sm hover:bg-neutral-950 hover:text-white transition-colors duration-300"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </section>
          )
        }
        const nextCover = next.coverImage || next.content?.images[0]?.src
        return (
          <>
            <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-8">
              <div className="border-t border-neutral-200 pt-10 md:pt-16">
                <h2 className="font-display text-xl md:text-2xl leading-[1.1] tracking-[-0.02em] text-center">
                  &hellip;but wait, there&rsquo;s more 👇
                </h2>
              </div>
            </section>
            <div className="relative w-full h-[260px] md:h-[330px]">
            <Link
              href={`/work/${next.slug}`}
              className="group absolute bottom-0 left-1/2 -translate-x-1/2 block w-full max-w-[1200px] overflow-hidden rounded-t-2xl border-t border-l border-r border-neutral-300"
            >
              <div className="relative w-full h-[260px] md:h-[300px] md:group-hover:h-[330px] transition-[height] duration-500 ease-out">
              {nextCover ? (
                <Image
                  src={nextCover}
                  alt={next.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              ) : (
                <div className="absolute inset-0 bg-neutral-200" />
              )}
              <div className="absolute inset-0 bg-black/75 md:bg-black/15 md:group-hover:bg-black/75 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col justify-center items-end text-right px-6 md:px-12 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs tracking-widest uppercase text-white mb-3">
                  Next project
                </span>
                <h2 className="font-display text-2xl leading-[1.2] tracking-[-0.02em] text-white max-w-3xl">
                  {content.nextLabel ?? next.title}
                </h2>
                <span className="mt-5 inline-block text-sm text-white transition-colors">
                  View project &rarr;
                </span>
              </div>
              </div>
            </Link>
          </div>
          </>
        )
      })()}
        </>
      )}

      {locked && <UnlockOverlay slug={slug} title={item.title} />}
    </article>
  )
}
