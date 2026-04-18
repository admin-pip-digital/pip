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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.774542446426!2d-112.00118562348236!3d40.54656994772587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86117377f9920f7b%3A0xeddfba607b621928!2sPip!5e0!3m2!1sen!2sus!4v1758050203329!5m2!1sen!2sus"
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
