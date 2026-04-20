import type { Metadata } from 'next'
import ContactCards from './ContactCards'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Eric Moore for product design, UX, and consulting work.',
}

export default function ContactPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16">
      <h1 className="font-display text-4xl md:text-5xl leading-[1.2] tracking-[-0.02em] mb-4">
        Get in touch
      </h1>
      <p className="text-neutral-500 font-light mb-16">
        I&apos;m happy to meet in person if you&apos;re Utah-based, and take
        remote work everywhere else.
      </p>

      <ContactCards />

      {/* Map */}
      <div className="w-full aspect-video overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?ll=40.66,-111.93&z=10&t=m&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
