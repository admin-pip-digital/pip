'use client'

import { useState } from 'react'
import CustomSelect from './CustomSelect'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const PERSONA_OPTIONS = [
  'Hiring for a role',
  'Small business owner',
  'Fellow designer',
  'Just curious',
  'Other',
]

const ENDPOINT = 'https://formspree.io/f/xaqapbjz'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [persona, setPersona] = useState('')
  const [message, setMessage] = useState('')

  const canSubmit =
    name.trim() !== '' &&
    email.trim() !== '' &&
    persona !== '' &&
    message.trim() !== '' &&
    status !== 'submitting'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setName('')
        setEmail('')
        setPersona('')
        setMessage('')
      } else {
        const json = await res.json().catch(() => ({}))
        setErrorMessage(
          json?.errors?.[0]?.message ??
            'Something went wrong. Please try again or email eric@pip.digital directly.',
        )
        setStatus('error')
      }
    } catch {
      setErrorMessage(
        'Network error. Please try again or email eric@pip.digital directly.',
      )
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-neutral-300 p-10 text-center"
      >
        <p className="font-display text-xl md:text-2xl tracking-[-0.02em] mb-2">
          Thanks for reaching out.
        </p>
        <p className="text-sm text-neutral-500 font-light">
          I&apos;ll be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form
      action={ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="hidden"
        name="_subject"
        value="New contact form submission — pip.digital"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-neutral-600 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:border-neutral-700 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-neutral-600 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:border-neutral-700 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="persona"
          className="block text-sm text-neutral-600 mb-2"
        >
          Which best describes you?
        </label>
        <CustomSelect
          id="persona"
          name="persona"
          required
          options={PERSONA_OPTIONS}
          onValueChange={setPersona}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm text-neutral-600 mb-2"
        >
          What brings you here?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:border-neutral-700 transition-colors resize-y"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {status === 'error' && (
          <p role="alert" className="text-sm text-red-600">
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={!canSubmit}
          className="ml-auto min-w-[160px] px-6 py-3 rounded-full bg-neutral-950 text-white text-sm hover:bg-neutral-700 transition-colors duration-300 disabled:bg-neutral-300 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:hover:bg-neutral-300"
        >
          {status === 'submitting' ? 'Sending…' : 'Send'}
        </button>
      </div>
    </form>
  )
}
