'use client'

import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { Lock } from 'lucide-react'
import { unlockAction, type UnlockState } from './actions'

type Props = { slug: string; title: string }

export default function UnlockOverlay({ slug, title }: Props) {
  const router = useRouter()
  const action = unlockAction.bind(null, slug)
  const [state, formAction, pending] = useActionState<UnlockState, FormData>(
    action,
    undefined,
  )

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="unlock-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 md:p-10">
        <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-5">
          <Lock className="w-3 h-3" strokeWidth={2} />
          Password protected
        </span>
        <h2
          id="unlock-heading"
          className="font-display text-2xl md:text-3xl leading-[1.1] tracking-[-0.02em] mb-3"
        >
          Enter the password to view this case study
        </h2>
        <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4">
          <span className="font-medium text-neutral-950">
            &ldquo;{title}&rdquo;
          </span>{' '}
          is a project I completed for a client under an NDA agreement.
        </p>
        <p className="text-sm text-neutral-600 font-light leading-relaxed mb-8">
          By entering the password and clicking &ldquo;Unlock,&rdquo; you agree
          to treat its contents as confidential — not to reproduce, share,
          screenshot, or distribute any part of this case study, and to use it
          solely for the purpose of evaluating my work.
        </p>

        <form action={formAction} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-[13px] tracking-[0.12em] uppercase text-neutral-500 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              autoComplete="current-password"
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-base bg-white focus:outline-none focus:border-neutral-950 transition-colors"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-600" role="alert">
              {state.error}
            </p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 text-center px-6 py-3 rounded-full border border-neutral-950 text-sm hover:bg-neutral-950 hover:text-white transition-colors duration-300"
            >
              Go back
            </button>

            <button
              type="submit"
              disabled={pending}
              className="flex-1 px-6 py-3 rounded-full bg-neutral-950 text-white text-sm hover:bg-neutral-700 disabled:opacity-60 transition-colors duration-300"
            >
              {pending ? 'Checking…' : 'Unlock'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
