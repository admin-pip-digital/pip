import type { Metadata } from 'next'
import ContactCards from './ContactCards'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Eric Moore for product design, UX, and consulting work.',
}

export default function ContactPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-16">
      <h1 className="font-display text-4xl md:text-5xl leading-[1.2] tracking-[-0.02em] mb-4">
        Get in touch
      </h1>
      <p className="text-neutral-500 font-light mb-16">
        I&apos;m happy to meet in person if you&apos;re Utah-based, and take
        remote work everywhere else.
      </p>

      <div className="mb-16">
        <ContactForm />
      </div>

      <ContactCards />
    </div>
  )
}
