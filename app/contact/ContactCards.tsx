'use client'

import { useState } from 'react'
import { Phone, Mail, Copy, Check } from 'lucide-react'

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy(e: React.MouseEvent) {
    e.preventDefault()
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="opacity-0 group-hover:opacity-100 flex items-center gap-1.5 p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all cursor-pointer"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span className="text-xs text-neutral-600">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span className="text-xs text-neutral-600">Copy</span>
        </>
      )}
    </button>
  )
}

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <a
        href="tel:+13038450746"
        className="group flex items-center justify-between border border-neutral-300 p-6 rounded-2xl hover:border-neutral-700 transition-colors"
      >
        <div>
          <p className="font-display text-[20px] font-medium tracking-[-0.02em] leading-[1.2] text-neutral-800 mb-2">
            Phone
          </p>
          <p className="flex items-center gap-2 text-base font-medium group-hover:underline underline-offset-4">
            303-845-0746
            <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
          </p>
        </div>
        <CopyButton value="3038450746" />
      </a>
      <a
        href="mailto:eric@pip.digital"
        className="group flex items-center justify-between border border-neutral-300 p-6 rounded-2xl hover:border-neutral-700 transition-colors"
      >
        <div>
          <p className="font-display text-[20px] font-medium tracking-[-0.02em] leading-[1.2] text-neutral-800 mb-2">
            Email
          </p>
          <p className="flex items-center gap-2 text-base font-medium group-hover:underline underline-offset-4">
            eric@pip.digital
            <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
          </p>
        </div>
        <CopyButton value="eric@pip.digital" />
      </a>
    </div>
  )
}
