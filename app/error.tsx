'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem-9rem)] px-6 py-24 text-center">
      <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-6">
        Error
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-[56px] leading-[1.02] tracking-[-0.03em] max-w-[16ch]">
        Something went wrong.
      </h1>
      <p className="mt-6 max-w-md text-neutral-600 font-light leading-relaxed">
        An unexpected error occurred while loading this page.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => unstable_retry()}
          className="inline-block px-5 py-2.5 rounded-full bg-neutral-950 text-white text-sm hover:bg-neutral-700 transition-colors duration-300"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-block px-5 py-2.5 rounded-full border border-neutral-950 text-sm hover:bg-neutral-950 hover:text-white transition-colors duration-300"
        >
          Back home
        </Link>
      </div>
    </section>
  )
}
