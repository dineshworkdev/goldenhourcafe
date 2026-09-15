// Self-hosted variable fonts (no external requests)
import '@fontsource-variable/fraunces'
import '@fontsource-variable/nunito'
import './globals.css'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Grain from '../components/ui/Grain'

export const metadata: Metadata = {
  metadataBase: new URL('https://goldenhourcafe.in'),
  title: {
    default: 'Golden Hour Café — A place to slow down, eat well, and stay awhile',
    template: '%s · Golden Hour Café',
  },
  description:
    'Golden Hour Café in Pollachi, Coimbatore — a place to slow down, eat well, and stay awhile. Good coffee, thoughtful food and unhurried moments.',
  applicationName: 'Golden Hour Café',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Golden Hour Café',
    title: 'Golden Hour Café — A place to slow down, eat well, and stay awhile',
    description: 'Good coffee, thoughtful food and unhurried moments in Pollachi, Coimbatore.',
    url: '/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Golden Hour Café — Seeraga Samba biryani' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Hour Café — A place to slow down, eat well, and stay awhile',
    description: 'Good coffee, thoughtful food and unhurried moments in Pollachi, Coimbatore.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#33200E',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col bg-cream-100">
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <Grain />
        </div>
      </body>
    </html>
  )
}
