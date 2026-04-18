'use client'

import { useRef, useEffect, useState } from 'react'

export default function ScrollStrip({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [paddingLeft, setPaddingLeft] = useState('1rem')

  useEffect(() => {
    function sync() {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const pl = parseFloat(getComputedStyle(el).paddingLeft)
      setPaddingLeft(`${rect.left + pl}px`)
    }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  return (
    <>
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-4 h-0 pointer-events-none" aria-hidden />
      <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none" style={{ paddingLeft }}>
        {children}
      </div>
    </>
  )
}
