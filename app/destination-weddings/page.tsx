import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Destination Wedding Websites',
  description:
    'Custom websites for destination weddings and elopements. Beautiful, functional, and built to impress your guests.',
}

const features = [
  {
    title: 'Live countdown',
    description:
      'A real-time countdown to your wedding day so guests can feel the anticipation alongside you.',
    image: '/images/vows-in-verona-countdown.png',
  },
  {
    title: 'Our story',
    description:
      'A space to tell your story — how you met, how he proposed, and why this destination means something to you.',
    image: '/images/vows-in-verona-our-story.png',
  },
  {
    title: 'Itinerary & travel logistics',
    description:
      'Dedicated sections for flights, hotels, local tips, and everything guests need to show up ready.',
    image: '/images/vows-in-verona-itinerary.png',
    objectPosition: 'top center',
  },
  {
    title: 'Interactive lookbook',
    description:
      'A curated lookbook helps guests nail the vibe — whether that\'s black tie on the Amalfi Coast or linen on the beach.',
    image: '/images/vows-in-verona-lookbook.png',
  },
]

const steps = [
  {
    number: '01',
    title: 'Tell me about your wedding',
    description:
      "Fill out a short brief — your date, destination, vibe, and anything that matters to you. The more you share, the better.",
  },
  {
    number: '02',
    title: 'Review the design',
    description:
      "I'll design a site that feels like you — not a template. You'll see a full preview before anything goes live.",
  },
  {
    number: '03',
    title: 'Share it with your guests',
    description:
      "Your site launches on your own URL, ready to go. I handle the tech so you can focus on the wedding.",
  },
]

export default function WeddingsPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-14 pb-16 md:pt-20 md:pb-24">
        <p className="text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-4 md:mb-6">
          Websites for destination weddings &amp; elopements
        </p>
        <h1 className="font-display text-4xl md:text-[56px] leading-[1.05] tracking-[-0.03em] max-w-4xl mb-5 md:mb-8">
          A website as remarkable as your wedding.
        </h1>
        <p className="text-neutral-500 font-light text-base md:text-xl leading-relaxed max-w-2xl mb-10">
          Custom-built websites for destination weddings and elopements. Not a
          template — a site designed around your story, your aesthetic, and
          your guests.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-neutral-950 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors duration-300"
          >
            Start your project
          </Link>
          <a
            href="#how-it-works"
            className="inline-block px-6 py-3 border border-neutral-950 text-sm rounded-full hover:bg-neutral-950 hover:text-white transition-colors duration-300"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* ── Hero image ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-300">
          <Image
            src="/images/vows-in-verona-hero.png"
            alt="Vows in Verona — custom destination wedding website"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </section>

      {/* ── Intro statement ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:items-start">
          <div>
            <h2 className="font-display text-2xl md:text-4xl leading-[1.15] tracking-[-0.02em]">
              From the Great Salt Flats to the Amalfi Coast — every destination
              deserves a site that does it justice.
            </h2>
          </div>
          <div className="space-y-5 text-neutral-500 font-light leading-relaxed pt-1">
            <p>
              Your guests are flying across the world for you. They deserve
              more than a PDF itinerary or a Facebook group. A custom website
              gives them everything they need — and gives you a beautiful piece
              of your story to keep.
            </p>
            <p>
              I build bespoke sites for couples who want something that actually
              reflects who they are. The result is a site that feels personal,
              works perfectly, and makes the whole experience more memorable for
              everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* ── Two-up images ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-300">
            <Image
              src="/images/vows-in-verona-mobile.png"
              alt="Mobile view of Vows in Verona wedding website"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent z-10">
              <p className="text-xs tracking-widest uppercase text-white/80">Mobile view</p>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-300">
            <Image
              src="/images/vows-in-verona-rsvp.png"
              alt="RSVP form on Vows in Verona wedding website"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent z-10">
              <p className="text-xs tracking-widest uppercase text-white/80">RSVP section</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-4">
          What&apos;s included
        </p>
        <h2 className="font-display text-2xl md:text-4xl leading-[1.1] tracking-[-0.02em] mb-8 md:mb-14 max-w-xl">
          Everything your guests need, nothing they don&apos;t.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {features.map(({ title, description, image, objectPosition }) => (
            <div key={title}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-300 mb-5">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  style={objectPosition ? { objectPosition } : undefined}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-base font-medium mb-2">{title}</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full-width quote / pull ── */}
      <section className="bg-neutral-100 border-t border-b border-neutral-200 py-20 mb-28">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <blockquote className="font-display text-2xl md:text-4xl leading-[1.2] tracking-[-0.02em] text-neutral-700 max-w-[640px] mx-auto text-center">
            &ldquo;The website made it feel real. Our guests kept telling us
            how much they loved it before we even landed in Italy.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-neutral-400 text-center">
            — Julianna &amp; William, Verona 2026
          </p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        id="how-it-works"
        className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28"
      >
        <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-4">
          How it works
        </p>
        <h2 className="font-display text-2xl md:text-4xl leading-[1.1] tracking-[-0.02em] mb-8 md:mb-14">
          Simple process, extraordinary result.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="border-t border-neutral-200 pt-8">
              <span className="text-[13px] tracking-[0.12em] uppercase text-neutral-300 block mb-4">
                {number}
              </span>
              <h3 className="font-display text-xl leading-[1.2] tracking-[-0.02em] mb-3">
                {title}
              </h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Illustration ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-300">
          <Image
            src="/images/vows-in-verona-illustrations.png"
            alt="Custom illustrations from Vows in Verona wedding website"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/40 to-transparent z-10">
            <p className="text-xs tracking-widest uppercase text-white/80">
              Custom illustrations — Vows in Verona, 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[960px] mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <div className="rounded-2xl bg-neutral-800 text-white px-6 py-16 md:px-14 md:py-32 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-100 mb-2">
              Get started
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] max-w-xl">
              Let&apos;s build something<br/>worth sharing.
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-neutral-950 text-sm rounded-full text-center hover:bg-neutral-200 transition-colors duration-300"
            >
              Start your project
            </Link>
            <p className="text-xs text-neutral-100 text-center">
              Turnaround from 2&ndash;4 weeks
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
