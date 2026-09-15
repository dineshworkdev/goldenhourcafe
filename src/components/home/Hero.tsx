import { motion } from 'framer-motion'
import { MapPin, Star, ArrowRight } from 'lucide-react'
import { fadeUp, scaleIn, stagger } from '../../lib/motion'
import { contact } from '../../data/site'
import Button from '../ui/Button'
import ArchFrame from '../ui/ArchFrame'
import DiamondMark from '../ui/DiamondMark'

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-teal-radial text-cream-50">
      {/* faint arch line-work backdrop */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[150%] w-[160%] max-w-none -translate-x-1/2 text-cream-50/[0.07]"
        viewBox="0 0 800 800"
        fill="none"
        stroke="currentColor"
      >
        {[360, 300, 240, 180, 120].map((r) => (
          <path key={r} d={`M${400 - r} 800 L${400 - r} 400 A${r} ${r} 0 0 1 ${400 + r} 400 L${400 + r} 800`} strokeWidth="1.5" />
        ))}
      </svg>
      <span className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="container-px relative z-10 grid items-center gap-12 pb-20 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-44">
        {/* Copy */}
        <motion.div variants={stagger(0.12, 0.05)} initial="hidden" animate="show" className="max-w-xl">
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="eyebrow !text-gold-400">Golden Hour Café</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/10 px-3 py-1 text-xs font-bold text-cream-100/90 ring-1 ring-cream-50/15">
              <MapPin className="h-3.5 w-3.5 text-gold-400" /> {contact.area}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-fluid-hero font-semibold leading-[0.95] text-balance"
          >
            A place to slow down, eat well,
            <br className="hidden sm:block" /> and stay <span className="gradient-text italic">awhile</span>.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-cream-100/80 text-pretty">
            Carefully prepared coffee, comforting plates and something sweet to finish —
            a warm corner of Pollachi, Coimbatore, built for staying awhile.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="gold" to="/menu" className="!px-8 !py-4 text-base">
              Explore the Menu <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghostLight" to="/contact" className="!px-8 !py-4 text-base">
              Visit Us
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
              <span className="ml-2 text-sm font-semibold text-cream-100/80">Loved by our regulars</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div variants={scaleIn} initial="hidden" animate="show" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <ArchFrame
            src="/media/food/biryani.jpg"
            alt="A bowl of Seeraga Samba biryani topped with egg and slow-cooked meat"
            w={2062}
            h={1372}
            eager
            className="aspect-[4/5] w-full"
            imgClassName="h-full"
          />

          {/* floating chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-cream-50 px-4 py-3 shadow-deep sm:-left-8"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-600/10">
              <DiamondMark className="h-5 w-5 text-teal-600" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-semibold text-teal-900">Seeraga Samba Biryani</p>
              <p className="text-xs font-bold text-gold-600">₹15 · Signature</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-5 right-0 animate-float rounded-2xl bg-gold-500 px-5 py-3 text-teal-900 shadow-deep sm:right-2"
          >
            <p className="font-display text-base font-bold leading-none">100% Fresh</p>
            <p className="mt-1 text-xs font-bold">Juices pressed to order</p>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="relative z-10 flex justify-center pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col items-center gap-2 text-cream-100/50"
        >
          <span className="text-[0.65rem] font-bold uppercase tracking-widest2">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
