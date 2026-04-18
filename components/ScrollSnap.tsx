'use client'

import { useEffect } from 'react'

export default function ScrollSnap() {
  useEffect(() => {
    const el = document.documentElement
    el.style.scrollSnapType = 'y mandatory'
    el.style.scrollPaddingTop = '3.5rem'
    return () => {
      el.style.scrollSnapType = ''
      el.style.scrollPaddingTop = ''
    }
  }, [])

  return null
}
