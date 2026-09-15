import { motion } from 'framer-motion'
import { ArrowRight, Volume2 } from 'lucide-react'
import { fadeUp, scaleIn, stagger, viewportOnce } from '../../lib/motion'
import Button from '../ui/Button'
import Divider from '../ui/Divider'

export default function VideoFeature() {
  return (
    <section className="grain relative overflow-hidden bg-teal-radial py-20 text-cream-50 sm:py-28">
      <span className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="container-px relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.span variants={fadeUp} className="eyebrow !text-gold-400">
            Pull up a chair
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-fluid-section font-semibold leading-[1.05] text-cream-50 text-balance"
          >
            The coffee&rsquo;s always warm, and the welcome always is too.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-base leading-relaxed text-cream-100/80 sm:text-lg">
            There&rsquo;s a rhythm to Golden Hour Café — cups clinking, chairs pulled close on wooden
            tables, the quiet hum of conversation. Come for the food, stay for the feeling of home.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Divider tone="light" className="my-8 !justify-start" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button variant="gold" to="/gallery">
              Watch more moments <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Reel */}
        <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex justify-center">
          <div className="relative w-full max-w-[300px]">
            <span aria-hidden className="absolute -inset-3 rounded-[2.5rem] border border-cream-50/20" />
            <div className="relative overflow-hidden rounded-[2rem] bg-teal-950 shadow-deep ring-1 ring-cream-50/10">
              <video
                src="/media/videos/fresh-juice-reel.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Fresh juice being served at Golden Hour Café"
                className="aspect-[9/16] h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-teal-950/70 px-3 py-1 text-[0.65rem] font-bold text-cream-100/80 backdrop-blur-sm">
                <Volume2 className="h-3 w-3" /> Muted · tap gallery for sound
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
