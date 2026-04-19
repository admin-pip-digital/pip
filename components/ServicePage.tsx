import Link from 'next/link'
import type { Service } from '@/data/services'

export default function ServicePage({ service }: { service: Service }) {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-20 pb-24">
        <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-6">
          {service.eyebrow}
        </p>
        <h1 className="font-display text-5xl md:text-[56px] leading-[1.05] tracking-[-0.03em] max-w-4xl mb-8">
          {service.title}
        </h1>
        <p className="text-neutral-500 font-light text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
          {service.intro}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-neutral-950 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors duration-300"
          >
            {service.primaryCta}
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
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-24">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-300 bg-neutral-200" />
      </section>

      {/* ── Intro statement ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.15] tracking-[-0.02em]">
              {service.statementHeading}
            </h2>
          </div>
          <div className="space-y-5 text-neutral-500 font-light leading-relaxed pt-1">
            {service.statementBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statement quote ── */}
      {service.statementQuote && (
        <section className="border-t border-b border-neutral-200 py-20 mb-28">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <blockquote className="font-display text-xl md:text-3xl leading-[1.2] tracking-[-0.02em] max-w-3xl text-neutral-700">
              {service.statementQuote.text}
            </blockquote>
            <p className="mt-6 text-sm text-neutral-400">{service.statementQuote.attribution}</p>
          </div>
        </section>
      )}

      {/* ── Features ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-28">
        <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-4">
          {service.featuresEyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] mb-14 max-w-xl">
          {service.featuresHeading}
        </h2>
        <div
          className={`grid grid-cols-1 ${
            service.features.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
          } gap-x-10 gap-y-8`}
        >
          {service.features.map(({ title, description }) => (
            <div key={title}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-300 bg-neutral-200 mb-5" />
              <h3 className="text-base font-medium mb-2">{title}</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="border-t border-b border-neutral-200 py-20 mb-28">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <blockquote className="font-display text-xl md:text-3xl leading-[1.2] tracking-[-0.02em] max-w-3xl text-neutral-700">
            {service.quote.text}
          </blockquote>
          <p className="mt-6 text-sm text-neutral-400">{service.quote.attribution}</p>
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        id="how-it-works"
        className="max-w-[1200px] mx-auto px-4 md:px-8 pb-28"
      >
        <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-400 mb-4">
          How it works
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] ${
            service.processIntro ? 'mb-6' : 'mb-14'
          }`}
        >
          {service.processHeading}
        </h2>
        {service.processIntro && (
          <p className="text-neutral-500 font-light text-lg leading-relaxed max-w-2xl mb-14">
            {service.processIntro}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {service.steps.map(({ number, title, description }) => (
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

      {/* ── Secondary quote ── */}
      {service.secondaryQuote && (
        <section className="border-t border-b border-neutral-200 py-20 mb-28">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <blockquote className="font-display text-xl md:text-3xl leading-[1.2] tracking-[-0.02em] max-w-3xl text-neutral-700">
              {service.secondaryQuote.text}
            </blockquote>
            <p className="mt-6 text-sm text-neutral-400">{service.secondaryQuote.attribution}</p>
          </div>
        </section>
      )}

      {/* ── Two-up images ── */}
      {service.twoUp && (
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.twoUp.map(({ src, caption }) => (
              <div key={src} className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-300 bg-neutral-200">
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="text-xs tracking-widest uppercase text-neutral-500">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="max-w-[960px] mx-auto px-4 md:px-8 pb-28">
        <div className="rounded-2xl bg-neutral-800 text-white px-6 py-16 md:px-14 md:py-32 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <p className="text-[13px] tracking-[0.12em] uppercase text-neutral-100 mb-2">
              Get started
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] max-w-md">
              {service.ctaTitle}
            </h2>
            {service.ctaIntro && (
              <p className="mt-6 text-neutral-300 font-light leading-relaxed max-w-md">
                {service.ctaIntro}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-neutral-950 text-sm rounded-full text-center hover:bg-neutral-200 transition-colors duration-300"
            >
              {service.ctaButton}
            </Link>
            <p className="text-xs text-neutral-100 text-center">
              {service.ctaFooter}
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
