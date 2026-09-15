import type { Metadata } from 'next'
import About from '../../views/About'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of Golden Hour Café — a warm space for good coffee, thoughtful food and unhurried moments in Pollachi, Coimbatore.',
}

export default function Page() {
  return <About />
}
