import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react'
import { brand, nav, contact, hours } from '../../data/site'
import DiamondMark from '../ui/DiamondMark'

export default function Footer() {
  const year = 2026

  return (
    <footer className="grain relative overflow-hidden bg-teal-radial text-cream-100">
      {/* big watermark glyph */}
      <DiamondMark className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-cream-50/[0.04]" />

      <div className="container-px relative z-10 grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        {/* Brand */}
        <div className="max-w-sm">
          <div className="flex items-center gap-4">
            <div className="overflow-hidden rounded-2xl bg-cream-50 p-1.5 shadow-deep">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                width="56"
                height="56"
                className="h-14 w-14 rounded-xl object-cover"
              />
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-cream-50">{brand.name}</p>
              <p className="text-xs font-bold uppercase tracking-widest2 text-gold-400">
                {brand.tagline}
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-cream-100/75">{brand.blurb}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={contact.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-gold-500 hover:text-teal-900"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${contact.whatsappHref.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-gold-500 hover:text-teal-900"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={`tel:${contact.phoneHref}`}
              aria-label="Call"
              className="grid h-11 w-11 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-gold-500 hover:text-teal-900"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h3 className="text-xs font-bold uppercase tracking-widest2 text-gold-400">Explore</h3>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className="text-sm font-semibold text-cream-100/80 transition-colors hover:text-gold-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest2 text-gold-400">Visit Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-cream-100/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400/80" />
              <span>{contact.addressLine}</span>
            </li>
            <li>
              <a href={`tel:${contact.phoneHref}`} className="flex gap-3 transition-colors hover:text-gold-300">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400/80" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex gap-3 transition-colors hover:text-gold-300">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400/80" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest2 text-gold-400">
            <Clock className="h-4 w-4" /> Hours
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-cream-100/80">
            {hours.map((h) => (
              <li key={h.days}>
                <span className="block font-semibold text-cream-50">{h.days}</span>
                <span className="text-cream-100/70">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-cream-50/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream-100/60">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-cream-100/60">
            Made with <span className="text-gold-400">♥</span> for slow mornings and good coffee
            <DiamondMark className="h-3.5 w-3.5 text-gold-400/70" />
          </p>
        </div>
      </div>
    </footer>
  )
}
