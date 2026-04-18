import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Eric Moore is a product & systems designer with 8+ years of experience in health & wellness, mortgage, and marketing technology.',
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 md:items-center">
        <div>

          <p className="text-xs tracking-[0.12em] uppercase text-neutral-400 mb-4">A little about me</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.2] tracking-[-0.02em] mb-8">
            Hey, I&apos;m Eric — product designer &amp; systems thinker.
          </h1>
          <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
            <p>
              I have 8+ years of experience working with mid-to-large companies
              in mortgage, health &amp; wellness, and marketing tech —
              and I&apos;m currently contracting at Refill, building an
              agent-centric design system from scratch for AI-first product
              experiences.
            </p>
            <p>
              Prior to starting Pip, I helped my team at Optavia to reduce quarterly development cycles
              from 4 months to 2–3 weeks using systems thinking, map complex
              user experiences that became foundational product documentation, and
              design the strategic pivot from coach-dependent to client-led
              acquisition serving 800K+ users.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-700 transition-colors rounded-full"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-2xl">
          <Image
            src="/images/profile-eric-desktop.png"
            alt="Eric Moore"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-none"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-neutral-300 pt-16 mb-16">
        <h2 className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-10">
          My Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-base font-medium mb-3">
              Sustainable growth, technology for humans
            </h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Growth that doesn&apos;t burn people out or compromise quality.
              Technology should reduce friction and expand capability — not
              replace the human judgment at the center of good work.
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium mb-3">
              Building partnerships, not just projects
            </h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              The best outcomes come from relationships built on trust,
              transparency, and shared goals. A finished deliverable is
              a byproduct of that — not the point.
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium mb-3">
              Responsible business practices for good
            </h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              How you do the work matters as much as the work itself. That means
              being honest about tradeoffs, fair in how people are treated, and
              thoughtful about the impact left behind.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-neutral-300 pt-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="text-neutral-500 font-light">
          Open to freelance, contract, and full-time opportunities.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
