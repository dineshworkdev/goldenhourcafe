import NotFound from '../views/NotFound'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'This page slipped off the menu.',
}

export default function NotFoundPage() {
  return <NotFound />
}
