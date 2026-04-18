'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            onClick={handleLogoClick}
            aria-label="Pip — back to home"
            className="inline-flex shrink-0 text-neutral-500 hover:text-brand transition-colors"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 160 160"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M27 10C61.4537 10 82.3407 26.5336 82.9854 54.1758L83.001 55.501V58.6768C91.8892 45.4384 108.895 38.001 132.003 38.001V83.502C132.003 109.991 113.781 126.608 82.9961 128.761C82.997 128.842 83 128.923 83 129.004L82.9746 130.084C82.4119 141.179 73.2371 150.001 62.002 150.002L60.9209 149.977C50.1826 149.433 41.5729 140.822 41.0283 130.084L41 129.004C41 117.406 50.4037 108.002 62.002 108.002L63.082 108.03C68.0366 108.282 72.537 110.251 76.002 113.354V100.76C45.2198 98.6053 27.0001 81.9892 27 55.501V10ZM62.002 115.003C54.2698 115.003 48.001 121.272 48.001 129.004C48.0016 136.736 54.2702 143.004 62.002 143.004C69.7334 143.003 76.0016 136.734 76.002 129.003C76.0019 121.271 69.7335 115.004 62.002 115.003ZM125.002 45.2607C112.029 46.2419 102.113 49.9772 95.29 55.5205C87.4735 61.872 83.002 71.1594 83.002 83.502V121.743C95.9749 120.762 105.889 117.026 112.712 111.482C120.529 105.131 125.002 95.845 125.002 83.502V45.2607ZM34 55.501C34 67.8441 38.4729 77.1309 46.29 83.4824C53.1126 89.0258 63.0271 92.7609 76 93.7422V55.501C75.9999 43.1586 71.5292 33.8719 63.7129 27.5205C56.8902 21.977 46.9733 18.2409 34 17.2598V55.501Z" />
            </svg>
          </Link>
          <div className="text-sm font-medium text-neutral-950 leading-relaxed">
            <p>Eric Moore &middot; Product designer &amp; systems thinker</p>
            <p>South Jordan, Utah</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-neutral-500">
          <a
            href="https://linkedin.com/company/pip-digital"
            className="hover:text-neutral-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/pipdigital/"
            className="hover:text-neutral-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <Link href="/contact" className="hover:text-neutral-900 transition-colors">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  )
}
