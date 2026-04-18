'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY.current || y < 60)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isWork =
    pathname === '/' ||
    pathname.startsWith('/work')

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-neutral-50 transition-transform duration-300 animate-fade-in-delayed ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="max-w-[1440px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between animate-nav-contract">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-lockup.svg"
            alt="Pip"
            width={80}
            height={40}
            priority
          />
        </Link>
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active =
              label === 'Work' ? isWork : pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[16px] tracking-wide transition-opacity hover:opacity-60 ${
                    active
                      ? 'underline underline-offset-4'
                      : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
