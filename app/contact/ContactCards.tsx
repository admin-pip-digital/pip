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
      className="opacity-100 md:opacity-0 md:group-hover:opacity-100 flex items-center gap-1.5 p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-all cursor-pointer"
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
        className="group flex items-center justify-between border border-neutral-300 bg-white p-5 rounded-2xl hover:bg-neutral-100 hover:border-neutral-700 transition-colors"
      >
        <div>
          <p className="text-sm text-neutral-500 mb-1">
            Phone
          </p>
          <p className="flex items-center gap-2 text-base font-medium">
            303-845-0746
            <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
          </p>
        </div>
        <CopyButton value="3038450746" />
      </a>
      <a
        href="mailto:eric@pip.digital"
        className="group flex items-center justify-between border border-neutral-300 bg-white p-5 rounded-2xl hover:bg-neutral-100 hover:border-neutral-700 transition-colors"
      >
        <div>
          <p className="text-sm text-neutral-500 mb-1">
            Email
          </p>
          <p className="flex items-center gap-2 text-base font-medium">
            eric@pip.digital
            <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
          </p>
        </div>
        <CopyButton value="eric@pip.digital" />
      </a>
    </div>
  )
}
