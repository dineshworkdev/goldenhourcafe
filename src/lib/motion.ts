/* Shared Framer Motion variants — one warm, unhurried motion language. */

import type { Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
}

// Parent that staggers its children's `show` state
export const stagger = (gap = 0.1, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
})

// Page-level enter / exit used with AnimatePresence (mode="wait")
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: 'easeIn' } },
}

export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' } as const
