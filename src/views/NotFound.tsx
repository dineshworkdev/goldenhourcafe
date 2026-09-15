'use client'

import { motion } from 'framer-motion'
import { Home as HomeIcon, UtensilsCrossed } from 'lucide-react'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
import Page from '../components/layout/Page'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import DiamondMark from '../components/ui/DiamondMark'

/* Decorative concentric arch line-work, echoing the brand motif used
   across the site's hero bands. Sits softly behind the 404 numerals. */
function ArchMotif() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[110%] max-w-3xl -translate-x-1/2 -translate-y-1/2 text-teal-600/[0.10]"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
    >
      {[160, 128, 96, 64].map((r) => (
        <path
          key={r}
          d={`M${200 - r} 400 L${200 - r} 200 A${r} ${r} 0 0 1 ${200 + r} 200 L${200 + r} 400`}
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

export default function NotFound() {
  return (
    <Page title="Page not found" description="This page slipped off the menu.">
      <section className="grain relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-cream-100 text-center">
        {/* layered texture: dotted grid + concentric arches */}
        <span aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <ArchMotif />

        {/* floating diamonds, faint, for warmth */}
        <DiamondMark
          aria-hidden="true"
          className="absolute left-[12%] top-[24%] hidden h-6 w-6 animate-float text-gold-500/35 md:block"
        />
        <DiamondMark
          aria-hidden="true"
          className="absolute right-[14%] bottom-[26%] hidden h-5 w-5 animate-float text-teal-600/25 md:block [animation-delay:1.5s]"
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="container-px relative z-10 flex flex-col items-center py-24"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Error 404
          </motion.span>

          <motion.p
            variants={scaleIn}
            className="mt-4 font-display text-fluid-hero font-semibold leading-none gradient-text"
          >
            404
          </motion.p>

          <motion.div variants={fadeUp}>
            <Divider className="mt-7" tone="gold" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 max-w-xl font-display text-fluid-section font-semibold leading-[1.05] text-teal-900 text-balance"
          >
            This page slipped off the menu.
            <span className="mt-1 block font-sans text-base font-semibold tracking-wide text-teal-600/80">
              இந்தப் பக்கம் கிடைக்கவில்லை
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg text-pretty"
          >
            We could not find what you were looking for — it may have moved, or
            perhaps it was never on the menu. Let us guide you back to something warm.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="primary" to="/">
              <HomeIcon className="h-4 w-4" /> Back home
            </Button>
            <Button variant="outline" to="/menu">
              <UtensilsCrossed className="h-4 w-4" /> See the menu
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </Page>
  )
}
