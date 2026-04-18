import type { MetadataRoute } from 'next'
import { work } from '@/data/work'

const BASE_URL = 'https://pip.digital'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages = [
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
    { path: '/brand', priority: 0.7 },
    { path: '/ux', priority: 0.7 },
    { path: '/web', priority: 0.7 },
    { path: '/destination-weddings', priority: 0.8 },
  ]

  const workEntries = work
    .filter((item) => item.status === 'published')
    .map((item) => ({
      url: `${BASE_URL}/work/${item.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))

  return [
    ...pages.map(({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...workEntries,
  ]
}
