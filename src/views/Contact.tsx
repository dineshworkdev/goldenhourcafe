'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { fadeUp, scaleIn, stagger, viewportOnce } from '../lib/motion'
import { brand, contact, hours } from '../data/site'
import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import DiamondMark from '../components/ui/DiamondMark'

/* google maps "search" deep-link for the Directions CTA */
const DIRECTIONS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  contact.mapsQuery,
)}`

/* google maps turn-by-turn deep-link, used by the map card's direction icon */
const GET_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  contact.mapsQuery,
)}`

/* whatsapp link: strip the leading "+" off the dialling number */
const WHATSAPP_URL = `https://wa.me/${contact.whatsappHref.replace(/\D/g, '')}`

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* ------------------------------------------------------------------ */
/* LEFT COLUMN — a single info row (icon + label + content)            */
/* ------------------------------------------------------------------ */
interface InfoRowProps {
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  label: React.ReactNode
  children: React.ReactNode
}

function InfoRow({ icon: Icon, label, children }: InfoRowProps) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-teal-600/10 text-teal-700 ring-1 ring-teal-600/15">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="text-xs font-bold uppercase tracking-widest2 text-teal-600">{label}</p>
        <div className="mt-1 text-ink-soft">{children}</div>
      </div>
    </li>
  )
}

/* ------------------------------------------------------------------ */
/* FORM — accessible, controlled, validated, mailto-fallback submit    */
/* ------------------------------------------------------------------ */
const FIELD_BASE =
  'mt-2 w-full rounded-2xl border bg-cream-50 px-4 py-3 text-ink shadow-sm transition ' +
  'placeholder:text-ink-muted/70 focus:outline-none focus-visible:outline-none ' +
  'focus:border-teal-600 focus:ring-2 focus:ring-teal-600/30'

type FieldKey = 'name' | 'email' | 'phone' | 'message'
type FormValues = Record<FieldKey, string>
type FormErrors = Partial<Record<FieldKey, string | undefined>>

function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState<boolean>(false)

  function update(key: FieldKey) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const v = e.target.value
      setValues((prev) => ({ ...prev, [key]: v }))
      // clear a field's error as the user corrects it
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
    }
  }

  function validate(v: FormValues) {
    const next: FormErrors = {}
    if (!v.name.trim()) next.name = 'Please tell us your name.'
    if (!v.email.trim()) next.email = 'We need an email to reply to you.'
    else if (!EMAIL_RE.test(v.email.trim())) next.email = 'That email does not look quite right.'
    if (!v.message.trim()) next.message = 'Let us know what you would like to ask.'
    return next
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // -----------------------------------------------------------------
    // TODO: plug a real submission endpoint in here (Formspree / EmailJS
    // / your own API). Replace the mailto fallback below with e.g.
    //   await fetch('https://formspree.io/f/XXXX', { method:'POST', ... })
    // No network call is made in this build — we open the user's mail app.
    // -----------------------------------------------------------------
    const subject = `Website enquiry from ${values.name.trim()}`
    const bodyLines = [
      values.message.trim(),
      '',
      '—',
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
    ].filter(Boolean)
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Success callout */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          aria-live="polite"
          className="flex items-start gap-3 rounded-2xl border border-teal-600/30 bg-teal-600/10 p-4 text-teal-800"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
          <div>
            <p className="font-display text-base font-semibold text-teal-900">Thank you!</p>
            <p className="mt-0.5 text-sm leading-relaxed">
              Your message is ready in your mail app — just hit send and we will get back to you
              soon. In a hurry? Call us on{' '}
              <a
                href={`tel:${contact.phoneHref}`}
                className="font-semibold underline decoration-teal-600/40 underline-offset-2 hover:text-teal-700"
              >
                {contact.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </motion.div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="text-sm font-semibold text-teal-900">
          Name <span className="text-gold-600" aria-hidden="true">*</span>
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={update('name')}
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'cf-name-error' : undefined}
          placeholder="Your good name"
          className={`${FIELD_BASE} ${
            errors.name ? 'border-red-400 focus:ring-red-300/40' : 'border-cream-300'
          }`}
        />
        {errors.name && (
          <p id="cf-name-error" role="alert" className="mt-1.5 text-sm font-medium text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className="text-sm font-semibold text-teal-900">
            Email <span className="text-gold-600" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update('email')}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            placeholder="you@example.com"
            className={`${FIELD_BASE} ${
              errors.email ? 'border-red-400 focus:ring-red-300/40' : 'border-cream-300'
            }`}
          />
          {errors.email && (
            <p id="cf-email-error" role="alert" className="mt-1.5 text-sm font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-phone" className="text-sm font-semibold text-teal-900">
            Phone <span className="text-ink-muted">(optional)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            placeholder="So we can call you back"
            className={`${FIELD_BASE} border-cream-300`}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="text-sm font-semibold text-teal-900">
          Message <span className="text-gold-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={update('message')}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          placeholder="Big order, a booking, or just a craving for biryani — tell us everything."
          className={`${FIELD_BASE} resize-y ${
            errors.message ? 'border-red-400 focus:ring-red-300/40' : 'border-cream-300'
          }`}
        />
        {errors.message && (
          <p id="cf-message-error" role="alert" className="mt-1.5 text-sm font-medium text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Send message <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-xs text-ink-muted">
          We usually reply within a day. Prefer chat?{' '}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-700 underline decoration-teal-600/40 underline-offset-2 hover:text-teal-800"
          >
            WhatsApp us
          </a>
          .
        </p>
      </div>
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */
export default function Contact() {
  return (
    <Page
      title="Contact"
      description="Visit Golden Hour Café in Pollachi, Coimbatore. Call +91 8684338294, message us on WhatsApp, or drop by to slow down and stay awhile."
    >
      <PageHero
        eyebrow="Say Hello"
        title="Come sit with us"
        malayalam="தொடர்பு கொள்ள"
        intro="Questions, big orders or just a craving for good coffee? We would love to hear from you."
      />

      {/* ---- Info + form ---- */}
      <section className="section relative overflow-hidden">
        <span aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-px relative grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT — info */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="card-cream relative overflow-hidden p-7 sm:p-9">
              <DiamondMark className="absolute -right-6 -top-6 h-28 w-28 text-teal-600/[0.05]" />
              <span className="eyebrow">Find your way to us</span>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-teal-900 sm:text-3xl text-balance">
                Drop by, dial in, or message us.
              </h2>

              <ul className="mt-8 space-y-6">
                <InfoRow icon={MapPin} label="Address">
                  <p className="font-semibold text-ink">{contact.addressLine}</p>
                  <p className="text-sm text-ink-muted">{contact.country}</p>
                </InfoRow>

                <InfoRow icon={Phone} label="Phone">
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="font-semibold text-ink transition hover:text-teal-700"
                  >
                    {contact.phoneDisplay}
                  </a>
                </InfoRow>

                <InfoRow icon={MessageCircle} label="WhatsApp">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink transition hover:text-teal-700"
                  >
                    {contact.phoneDisplay}
                  </a>
                  <p className="text-sm text-ink-muted">Quickest way for orders &amp; bookings</p>
                </InfoRow>

                <InfoRow icon={Mail} label="Email">
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-semibold text-ink transition hover:text-teal-700"
                  >
                    {contact.email}
                  </a>
                </InfoRow>

                <InfoRow icon={Instagram} label="Instagram">
                  <a
                    href={contact.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink transition hover:text-teal-700"
                  >
                    {contact.instagram.handle}
                  </a>
                </InfoRow>

                <li className="flex gap-4">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-teal-600/10 text-teal-700 ring-1 ring-teal-600/15">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-bold uppercase tracking-widest2 text-teal-600">
                      Opening Hours
                    </p>
                    <table className="mt-2 w-full border-separate border-spacing-y-1 text-sm">
                      <caption className="sr-only">Golden Hour Café opening hours</caption>
                      <tbody>
                        {hours.map((h) => (
                          <tr key={h.days}>
                            <th
                              scope="row"
                              className="pr-4 text-left align-top font-semibold text-ink"
                            >
                              {h.days}
                            </th>
                            <td className="text-right align-top text-ink-soft">{h.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>

              <Divider tone="gold" className="mt-8" />

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="gold" href={DIRECTIONS}>
                  <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
                </Button>
                <Button variant="outline" href={`tel:${contact.phoneHref}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call Us
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="card-cream p-7 sm:p-9"
          >
            <span className="eyebrow">Send a message</span>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-teal-900 sm:text-3xl text-balance">
              Tell us what you are craving.
            </h2>
            <p className="mt-3 text-ink-soft text-pretty">
              Fill this in and we will get right back to you — or reach us straight away on the
              numbers to the left.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- Map ---- */}
      <section className="section pt-0">
        <div className="container-px">
          <SectionHeading
            eyebrow="Find us"
            title="In the heart of Pollachi, Coimbatore"
            malayalam="எங்களை கண்டறியவும்"
            intro="A short stroll through Pollachi and the smell of good coffee will lead the rest of the way."
            className="mb-12"
          />
          <Reveal className="relative overflow-hidden rounded-[2rem] shadow-deep ring-1 ring-teal-900/10">
            <iframe
              title={`Map to ${contact.mapsQuery}`}
              src={contact.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
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
                    href={DIRECTIONS}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open in Google Maps"
                    className="grid h-8 w-8 place-items-center rounded-full bg-teal-600/10 text-teal-700 transition hover:bg-teal-600/20"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={GET_DIRECTIONS_URL}
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
          </Reveal>

          <Reveal className="mt-8 flex justify-center">
            <Button variant="primary" href={DIRECTIONS}>
              Open in Google Maps <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
