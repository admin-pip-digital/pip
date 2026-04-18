'use server'

import { redirect } from 'next/navigation'
import { getWorkBySlug } from '@/data/work'
import { unlockSlug } from '@/lib/work-auth'

export type UnlockState = { error?: string } | undefined

export async function unlockAction(
  slug: string,
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const item = getWorkBySlug(slug)
  if (!item?.protected) {
    redirect(`/work/${slug}`)
  }

  const password = formData.get('password')
  if (typeof password !== 'string' || password.length === 0) {
    return { error: 'Enter the password.' }
  }

  const ok = await unlockSlug(slug, password)
  if (!ok) {
    return { error: 'Incorrect password.' }
  }

  redirect(`/work/${slug}`)
}
