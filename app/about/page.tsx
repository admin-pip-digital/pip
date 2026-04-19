import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Eric Moore is a product designer who thinks in systems — based in South Jordan, Utah.',
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 md:items-center">
        <div>
          <p className="text-xs tracking-[0.12em] uppercase text-neutral-400 mb-4">A little about me</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.2] tracking-[-0.02em] mb-8">
            Hey, I&apos;m Eric.
          </h1>
          <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
            <p>
              I&apos;m a product designer who thinks in systems. I care about
              work that brings people together, experiences that feel
              inevitable, brands that earn trust, and products that actually
              serve their users.
            </p>
            <p>
              I work best when the problems are real, the people are honest,
              and we&apos;re all allowed to be good at what we do together.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border border-neutral-950 text-sm rounded-full hover:bg-neutral-950 hover:text-white transition-colors duration-300"
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
            className="object-cover"
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
              I&apos;ve seen what happens when speed becomes the only metric —
              burned out teams and products that quietly stop working for the
              people using them. Growth that lasts is growth that&apos;s built
              right.
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium mb-3">
              Building partnerships, not just projects
            </h3>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              The best work I&apos;ve ever done came out of relationships where
              both sides were honest about what they needed. A finished
              deliverable is a byproduct of that trust — not the point.
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

      {/* Outside the work */}
      <div className="border-t border-neutral-300 pt-16 mb-16">
        <h2 className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-10">
          Outside of work
        </h2>
        <div className="space-y-4 text-neutral-600 font-light leading-relaxed max-w-3xl">
          <p>
            I live in South Jordan, Utah with my husband Ben and our dogs. I
            play piano, volunteer with Great Salt Lake conservation efforts,
            and run a small publishing community with some friends from
            previous jobs. I&apos;m not always loud or outspoken... but
            working on it. I aim to stay deeply rooted in something bigger
            than myself.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-300 bg-neutral-200">
            <Image
              src="/images/eric-osaka.png"
              alt="Eric in Osaka"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-300 bg-neutral-200">
            <Image
              src="/images/eric-dogs.png"
              alt="Eric with his dogs"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-300 bg-neutral-200">
            <Image
              src="/images/eric-kyoto.png"
              alt="Eric in Kyoto"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-t border-neutral-300 pt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <blockquote className="font-display text-lg md:text-2xl leading-[1.3] tracking-[-0.02em] text-neutral-700">
              &ldquo;Eric is an exceptional mentor, collaborator, and just a
              genuinely awesome person. What really stands out is his empathy
              — he truly cares about the people using a product, listens
              closely, and works to understand what they actually need. That
              genuine care is rare and makes a huge difference.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-neutral-400">
              – Product Designer, Health &amp; Wellness Platform
            </p>
          </div>
          <div>
            <blockquote className="font-display text-lg md:text-2xl leading-[1.3] tracking-[-0.02em] text-neutral-700">
              &ldquo;Eric has a great way of bringing everyone together and
              making everyone feel included. He cares about those he works with
              and strives to create an atmosphere of openness and acceptance.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-neutral-400">– Colleague, Vivint</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-neutral-300 pt-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="text-neutral-500 font-light">
          Currently available for full-time and contract product design roles.
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
