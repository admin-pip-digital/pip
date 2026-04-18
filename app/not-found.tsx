import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'The page you were looking for doesn’t exist or has moved.',
}

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem-9rem)] px-6 py-24 text-center">
      <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-6">
        Error 404
      </p>
      <h1 className="font-display text-[56px] leading-[1.02] tracking-[-0.03em] max-w-[16ch]">
        Page not found.
      </h1>
      <p className="mt-6 max-w-md text-neutral-600 font-light leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist at this URL.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-block px-5 py-2.5 rounded-full bg-neutral-950 text-white text-sm hover:bg-neutral-700 transition-colors duration-300"
        >
          Back home
        </Link>
        <Link
          href="/contact"
          className="inline-block px-5 py-2.5 rounded-full border border-neutral-950 text-sm hover:bg-neutral-950 hover:text-white transition-colors duration-300"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
