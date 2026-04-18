import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { getService } from '@/data/services'

const service = getService('web')

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function WebPage() {
  return <ServicePage service={service} />
}
