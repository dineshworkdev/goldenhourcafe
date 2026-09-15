import { MapPin, Phone, Navigation, Clock, ExternalLink } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import DiamondMark from '../ui/DiamondMark'
import { brand, contact, hours } from '../../data/site'

export default function VisitSection() {
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`
  const viewOnMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`
  const getDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapsQuery)}`

  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="overflow-hidden rounded-[2rem] shadow-deep ring-1 ring-teal-900/10">
          <div className="grid lg:grid-cols-2">
            {/* Info */}
            <div className="grain relative overflow-hidden bg-teal-radial p-8 text-cream-50 sm:p-12">
              <DiamondMark className="absolute -right-8 -top-8 h-40 w-40 text-cream-50/[0.05]" />
              <span className="eyebrow !text-gold-400">Come say hello</span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                Find us in the heart of Pollachi, Coimbatore
              </h2>

              <ul className="mt-8 space-y-5">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-gold-400" />
                  <div>
                    <p className="font-semibold text-cream-50">{contact.addressLine}</p>
                    <p className="text-sm text-cream-100/70">{contact.country}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 h-6 w-6 shrink-0 text-gold-400" />
                  <div className="space-y-0.5 text-sm">
                    {hours.map((h) => (
                      <p key={h.days} className="text-cream-100/80">
                        <span className="font-semibold text-cream-50">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-6 w-6 shrink-0 text-gold-400" />
                  <a href={`tel:${contact.phoneHref}`} className="font-semibold text-cream-50 hover:text-gold-300">
                    {contact.phoneDisplay}
                  </a>
                </li>
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button variant="gold" href={directions}>
                  <Navigation className="h-4 w-4" /> Get Directions
                </Button>
                <Button variant="ghostLight" href={`tel:${contact.phoneHref}`}>
                  <Phone className="h-4 w-4" /> Call Us
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="relative min-h-[340px] bg-cream-200">
              <iframe
                title={`Map to ${contact.mapsQuery}`}
                src={contact.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[340px] w-full"
                style={{ border: 0 }}
              />

              {/* Google-style place card overlay */}
              <div className="absolute left-4 top-4 max-w-[260px] rounded-2xl bg-cream-50/95 p-4 shadow-deep ring-1 ring-teal-900/10 backdrop-blur-sm sm:left-6 sm:top-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-display text-sm font-semibold text-teal-900">
                      {brand.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                      {contact.addressLine}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1.5">
                    <a
                      href={viewOnMaps}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open in Google Maps"
                      className="grid h-8 w-8 place-items-center rounded-full bg-teal-600/10 text-teal-700 transition hover:bg-teal-600/20"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href={getDirections}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Get directions"
                      className="grid h-8 w-8 place-items-center rounded-full bg-gold-500 text-cream-50 transition hover:bg-gold-600"
                    >
                      <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
