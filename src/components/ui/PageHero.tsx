import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../../lib/motion'
import DiamondMark from './DiamondMark'

interface PageHeroProps {
  eyebrow?: React.ReactNode
  title?: React.ReactNode
  malayalam?: React.ReactNode
  intro?: React.ReactNode
  children?: React.ReactNode
}

/* Shared hero band for the inner pages (Gallery / Menu / About / Contact).
   Deep-teal, grainy, with the recurring arch + diamond motifs. */
export default function PageHero({ eyebrow, title, malayalam, intro, children }: PageHeroProps) {
  return (
    <header className="grain relative overflow-hidden bg-teal-radial text-cream-50">
      {/* concentric arch line-work */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[140%] w-[120%] -translate-x-1/2 opacity-[0.12]"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
      >
        {[150, 120, 90, 60].map((r) => (
          <path
            key={r}
            d={`M${200 - r} 400 L${200 - r} ${200} A${r} ${r} 0 0 1 ${200 + r} 200 L${200 + r} 400`}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* floating diamonds */}
      <DiamondMark className="absolute left-[8%] top-[28%] hidden h-6 w-6 animate-float text-gold-400/40 md:block" />
      <DiamondMark className="absolute right-[10%] top-[58%] hidden h-5 w-5 animate-float text-cream-100/30 md:block [animation-delay:1.5s]" />

      <div className="container-px relative z-10 flex flex-col items-center pb-20 pt-32 text-center sm:pb-24 sm:pt-40">
        <motion.div variants={stagger(0.12)} initial="hidden" animate="show" className="flex flex-col items-center">
          {eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow !text-gold-400">
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-4xl font-display text-fluid-title font-semibold leading-[1.02] text-balance"
          >
            {title}
          </motion.h1>
          {malayalam && (
            <motion.span
              variants={fadeUp}
              className="mt-3 text-lg font-semibold tracking-wide text-cream-200/70"
            >
              {malayalam}
            </motion.span>
          )}
          {intro && (
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/80 sm:text-lg text-pretty"
            >
              {intro}
            </motion.p>
          )}
          {children && (
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* soft transition into the cream page below */}
      <div className="relative z-10 h-10 bg-gradient-to-b from-transparent to-cream-100/0" />
    </header>
  )
}
