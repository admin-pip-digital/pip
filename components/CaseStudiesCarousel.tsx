'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, Clock } from 'lucide-react'

type WorkItem = {
  slug: string
  title: string
  coverImage: string
  coverObjectPosition?: string
  protected?: true
}

const GAP = 32 // gap-8

export default function CaseStudiesCarousel({ items }: { items: WorkItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    function update() {
      setAtStart(el!.scrollLeft <= 0)
      setAtEnd(el!.scrollLeft + el!.clientWidth >= el!.scrollWidth - 1)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    return () => el.removeEventListener('scroll', update)
  }, [])

  function scroll(dir: 'prev' | 'next') {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = (el.firstElementChild as HTMLElement)?.offsetWidth ?? 368
    el.scrollBy({ left: (cardWidth + GAP) * (dir === 'next' ? 1 : -1), behavior: 'smooth' })
  }

  return (
    <>
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
      >
        {items.map((item, i) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className={`group relative rounded-2xl overflow-hidden snap-start shrink-0 first:ml-4 md:first:ml-0 w-[80%] sm:w-[calc((100%-32px)/2)] md:w-[calc((100%-64px)/3)] aspect-[3/4] border border-neutral-300 shadow-lg hover:shadow-none transition-shadow duration-300 bg-neutral-200 ${i % 2 === 0 ? 'mt-4 mb-6 animate-float' : 'mt-10 animate-float-delayed'}`}
          >
            {item.coverImage && (
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                className="object-cover"
                style={item.coverObjectPosition ? { objectPosition: item.coverObjectPosition } : undefined}
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/75 transition-colors duration-300 flex flex-col items-center justify-center px-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-display text-xl leading-[1.2] tracking-[-0.02em] text-white">{item.title}</p>
              {item.protected && (
                <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase text-neutral-300">
                  <Lock className="w-3 h-3" strokeWidth={2} />
                  Password protected
                </span>
              )}
            </div>
          </Link>
        ))}
        <div
          className={`relative rounded-2xl snap-start shrink-0 w-[80%] sm:w-[calc((100%-32px)/2)] md:w-[calc((100%-64px)/3)] aspect-[3/4] border border-dashed border-neutral-300 flex items-center justify-center px-8 text-center ${items.length % 2 === 0 ? 'mt-4 mb-6 animate-float' : 'mt-10 animate-float-delayed'}`}
        >
          <span className="inline-flex items-start gap-1.5 text-[11px] tracking-[0.12em] uppercase text-neutral-400">
            <Clock className="w-3 h-3 mt-0.5 shrink-0" strokeWidth={2} />
            <span>Additional projects<br className="sm:hidden" /> coming soon</span>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => scroll('prev')}
          disabled={atStart}
          aria-label="Previous"
          className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer border-neutral-300 hover:enabled:border-neutral-950"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => scroll('next')}
          disabled={atEnd}
          aria-label="Next"
          className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer border-neutral-300 hover:enabled:border-neutral-950"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </>
  )
}
