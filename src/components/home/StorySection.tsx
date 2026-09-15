import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, scaleIn, stagger, viewportOnce } from '../../lib/motion'
import { stats } from '../../data/site'
import Button from '../ui/Button'
import ArchFrame from '../ui/ArchFrame'
import DiamondMark from '../ui/DiamondMark'

export default function StorySection() {
  return (
    <section className="section relative overflow-hidden">
      <span aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-px relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image cluster */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none"
        >
          <ArchFrame
            src="/media/food/breakfast-platter.webp"
            alt="A full South Indian breakfast platter on a banana leaf"
            w={675}
            h={450}
            className="aspect-[4/5] w-full"
            imgClassName="h-full"
          />
          <div className="absolute -bottom-6 -right-3 hidden w-40 rotate-3 rounded-2xl bg-teal-700 p-5 text-cream-50 shadow-deep sm:block">
            <DiamondMark className="h-6 w-6 text-gold-400" withDot />
            <p className="mt-2 font-display text-sm font-semibold leading-snug">
              Recipes carried from home
            </p>
          </div>
        </motion.div>

        {/* Copy + stats */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="order-1 lg:order-2"
        >
          <motion.span variants={fadeUp} className="eyebrow">Our Story</motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-fluid-section font-semibold leading-[1.05] text-teal-900 text-balance"
          >
            Built for good coffee, thoughtful food and unhurried moments.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Golden Hour Café began with a simple idea — that good coffee and thoughtful food
            deserve a little more time. We take care with every cup and plate, so every visit
            carries a little of that warm, golden feeling.
          </motion.p>

          <motion.dl variants={fadeUp} className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-teal-700">{s.value}</dt>
                <dd className="mt-1 text-xs font-semibold leading-snug text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={fadeUp} className="mt-9">
            <Button variant="outline" to="/about">
              Read our story <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
