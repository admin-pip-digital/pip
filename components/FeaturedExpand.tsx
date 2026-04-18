'use client'

import { useEffect, useRef } from 'react'

export default function FeaturedExpand({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const START_PX = 96 // padding at top of section
    const END_PX = 16   // padding at bottom (matches the section's pb-4 / px-4 baseline)

    function update() {
      const rect = el!.getBoundingClientRect()
      const windowH = window.innerHeight
      // progress: 0 when section top is at viewport bottom, 1 when section top reaches viewport top
      const progress = Math.min(1, Math.max(0, 1 - rect.top / windowH))
      const px = START_PX + (END_PX - START_PX) * progress
      el!.style.paddingLeft = `${px}px`
      el!.style.paddingRight = `${px}px`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div ref={wrapperRef} className="pb-4 max-w-[1440px] mx-auto">
      {children}
    </div>
  )
}
