import { cookies } from 'next/headers'
import crypto from 'node:crypto'

const UNLOCK_MAX_AGE_SECONDS = 60 * 60 * 24

function requireSecret(): string {
  const secret = process.env.WORK_UNLOCK_SECRET
  if (!secret) {
    throw new Error(
      'WORK_UNLOCK_SECRET is not set. Add it to .env.local to enable password-protected work.',
    )
  }
  return secret
}

function cookieNameForSlug(slug: string): string {
  return `work-unlock-${slug}`
}

function signSlug(slug: string): string {
  return crypto.createHmac('sha256', requireSecret()).update(slug).digest('hex')
}

function timingSafeStringEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

export async function isUnlocked(slug: string): Promise<boolean> {
  const store = await cookies()
  const token = store.get(cookieNameForSlug(slug))?.value
  if (!token) return false
  return timingSafeStringEqual(token, signSlug(slug))
}

export async function unlockSlug(
  slug: string,
  password: string,
): Promise<boolean> {
  const expected = process.env.WORK_PASSWORD
  if (!expected) return false
  if (!timingSafeStringEqual(password, expected)) return false

  const store = await cookies()
  store.set(cookieNameForSlug(slug), signSlug(slug), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: `/work/${slug}`,
    maxAge: UNLOCK_MAX_AGE_SECONDS,
  })
  return true
}
