import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Lock } from 'lucide-react'
import { work } from '@/data/work'
import { getService } from '@/data/services'
import FeaturedExpand from '@/components/FeaturedExpand'
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel'

export const metadata: Metadata = {
  title: 'Pip — Eric Moore, Product & Systems Designer',
  description:
    'Product & systems designer with 8+ years building digital products for health, mortgage, and marketing technology.',
}

export default function HomePage() {
  const published = work.filter((w) => w.status === 'published')
  const featured = published[0]
  const carouselItems = published.map((w) => ({
    slug: w.slug,
    title: w.title,
    coverImage: w.coverImage,
    coverObjectPosition: w.coverObjectPosition,
    protected: w.protected,
  }))

  return (
    <div>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-[calc(100dvh-3.5rem-10rem)] md:h-[calc(100vh-3.5rem-9rem)] px-6 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-[56px] leading-[1.05] tracking-[-0.03em] animate-hero-scale-in">
          Design your life.
        </h1>
      </section>

      {/* Featured project — expands as you scroll */}
      <section className="animate-fade-in-delayed">
        <p className="text-sm text-neutral-600 text-center mb-6 px-6">Hey, I&apos;m <Link href="/about" className="text-neutral-950 underline underline-offset-4 hover:opacity-60 transition-opacity">Eric Moore</Link> 🙋‍♂️ Digital Product Design &amp; Founder of Pip.</p>
        <FeaturedExpand>
          <Link href={`/work/${featured.slug}`} className="group block relative rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-[4/5] md:aspect-[16/9]">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-black/50 md:bg-black/0 md:group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end items-end text-right p-5 md:p-14">
                <div className="max-w-[320px]">
                <span className="text-xs tracking-widest uppercase text-white md:text-neutral-400 mb-3">
                  Featured Project
                </span>
                <h2 className="font-display text-xl md:text-2xl leading-[1.2] tracking-[-0.02em] text-white">
                  {featured.title.includes('telehealth ') ? (
                    <>
                      {featured.title.split('telehealth ')[0]}telehealth<br />
                      {featured.title.split('telehealth ')[1]}
                    </>
                  ) : (
                    featured.title
                  )}
                </h2>
                {featured.outcome && (
                  <p className="text-sm text-white md:text-neutral-300 mt-2">{featured.outcome}</p>
                )}
                {featured.protected && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase text-white md:text-neutral-300">
                    <Lock className="w-3 h-3" strokeWidth={2} />
                    Password protected
                  </span>
                )}
                  <span className="mt-5 block text-sm text-white md:text-neutral-400 md:group-hover:text-white transition-colors">
                    View project &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </FeaturedExpand>
      </section>

      {/* Services */}
      <section className="px-4 pt-24 pb-12 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-4">Services</p>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] mb-4">Ready to level up?<br/>Do something great.</h2>
          <p className="text-neutral-500 font-light max-w-lg mb-6">I help teams and businesses turn great ideas into reality. Let&apos;s build something people will remember.</p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/contact" className="inline-block px-5 py-2.5 rounded-full bg-neutral-950 text-white text-sm hover:bg-neutral-700 transition-colors duration-300">
              Get in touch
            </Link>
            <Link href="/about" className="inline-block px-5 py-2.5 rounded-full border border-neutral-950 text-sm hover:bg-neutral-950 hover:text-white transition-colors duration-300">
              About Pip
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { label: 'Improve your user experience', subtitle: 'UX, product & systems', href: '/ux', service: getService('ux') },
              { label: 'Elevate your brand image', subtitle: 'Identity & visual design', href: '/brand', service: getService('brand') },
              { label: 'Build a custom website and grow online', subtitle: 'Web, ads & strategy', href: '/web', service: getService('web') },
            ].map(({ label, subtitle, href, service }) => (
              <Link
                key={label}
                href={href}
                className="group relative flex flex-col justify-between aspect-[5/2] md:aspect-[3/4] rounded-2xl border border-neutral-300 p-6 md:p-8 overflow-hidden hover:bg-neutral-800 transition-colors duration-300"
              >
                {/* Slide-in preview */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[95%] aspect-[4/3] translate-x-full group-hover:translate-x-[15%] transition-transform duration-500 ease-out rounded-2xl overflow-hidden bg-neutral-200">
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 0px, 40vw"
                  />
                </div>

                <span className="relative z-10 font-display text-xl md:text-2xl leading-[1.2] tracking-[-0.02em] group-hover:text-white transition-colors duration-300">
                  {label}
                </span>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[13px] tracking-[0.12em] uppercase text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">{subtitle}</span>
                  <span className="w-10 h-10 rounded-full border border-neutral-950 group-hover:border-white flex items-center justify-center transition-colors duration-300">
                    <svg className="group-hover:text-white transition-colors duration-300" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="pt-12 pb-12 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="px-4">
            <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-4">Case studies</p>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] mb-4">See what's possible.</h2>
            <p className="text-neutral-500 font-light max-w-lg mb-10">Real projects, real outcomes. Browse the work and see if anything looks familiar — then let's talk about what we can do for yours.</p>
          </div>
          <CaseStudiesCarousel items={carouselItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[960px] mx-auto px-4 md:px-8 pt-12 pb-24 md:py-24">
        <div className="rounded-2xl bg-neutral-800 text-white px-6 py-16 md:px-14 md:py-32 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-100 mb-2">Get started</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] max-w-md">
              Let&apos;s make something together.
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-neutral-950 text-sm rounded-full text-center hover:bg-neutral-200 transition-colors duration-300"
            >
              Get in touch
            </Link>
            <p className="text-xs text-neutral-100 text-center">
              Based in Utah, available for remote work
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
