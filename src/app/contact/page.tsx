import type { Metadata } from 'next'
import Contact from '../../views/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Visit Golden Hour Café in Pollachi, Coimbatore. Call +91 8684338294, message us on WhatsApp, or drop by to slow down and stay awhile.',
}

export default function Page() {
  return <Contact />
}
