import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

interface SectionHeadingProps {
  eyebrow?: ReactNode
  title?: ReactNode
  malayalam?: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  titleClassName?: string
}

/* Reusable section header: eyebrow → title → optional intro.
   tone="light" flips colours for use on dark (teal) backgrounds. */
export default function SectionHeading({
  eyebrow,
  title,
  malayalam,
  intro,
  align = 'center',
  tone = 'dark',
  className = '',
  titleClassName = '',
}: SectionHeadingProps) {
  const isLight = tone === 'light'
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'

  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col ${alignment} ${className}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={`eyebrow ${isLight ? '!text-gold-400' : ''}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`mt-4 font-display text-fluid-section font-semibold leading-[1.05] text-balance ${
          isLight ? 'text-cream-50' : 'text-teal-900'
        } ${titleClassName}`}
      >
        {title}
        {malayalam && (
          <span
            className={`mt-1 block font-sans text-base font-semibold tracking-wide ${
              isLight ? 'text-cream-200/80' : 'text-teal-600/80'
            }`}
          >
            {malayalam}
          </span>
        )}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg text-pretty ${
            isLight ? 'text-cream-100/80' : 'text-ink-soft'
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
