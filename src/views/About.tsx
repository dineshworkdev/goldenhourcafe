'use client'

import { motion } from 'framer-motion'
import { Flame, Leaf, ChefHat, Heart, ArrowRight, Quote } from 'lucide-react'
import { fadeUp, scaleIn, stagger, viewportOnce } from '../lib/motion'
import { brand, values, stats } from '../data/site'
import type { ValueItem } from '../data/site'
import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ArchFrame from '../components/ui/ArchFrame'
import DiamondMark from '../components/ui/DiamondMark'
import Divider from '../components/ui/Divider'

/* Maps the value.icon strings from site.js to lucide components. */
const VALUE_ICONS: Record<string, typeof Flame> = {
  flame: Flame,
  leaf: Leaf,
  chefhat: ChefHat,
  heart: Heart,
}

interface ValueCardProps {
  value: ValueItem
  index: number
}

/* A single value tile — icon chip + title + body. */
function ValueCard({ value, index }: ValueCardProps) {
  const Icon = VALUE_ICONS[value.icon] || Flame
  return (
    <Reveal
      as="article"
      delay={index * 0.08}
      className="card-cream group relative flex flex-col gap-4 overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-500/10 transition-transform duration-500 group-hover:scale-150"
      />
      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-teal-600/10 text-teal-600 ring-1 ring-teal-600/15 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-cream-50">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="relative font-display text-xl font-semibold leading-tight text-teal-900">
        {value.title}
      </h3>
      <p className="relative text-sm leading-relaxed text-ink-soft sm:text-base">{value.body}</p>
      <DiamondMark className="relative mt-auto h-4 w-4 text-teal-600/25 transition-colors duration-300 group-hover:text-gold-500" />
    </Reveal>
  )
}

export default function About() {
  return (
    <Page
      title="About"
      description="The story of Golden Hour Café — a warm space for good coffee, thoughtful food and unhurried moments in Pollachi, Coimbatore."
    >
      <PageHero
        eyebrow="Our Story"
        title="A place to slow down, eat well, and stay awhile"
        malayalam="எங்களைப் பற்றி"
        intro="Good coffee. Thoughtful food. Unhurried moments."
      />

      {/* ---- Story: image + copy ---- */}
      <section className="section relative overflow-hidden">
        <span aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-px relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none"
          >
            <ArchFrame
              src="/media/brand/logo.jpg"
              alt="images"
              w={640}
              h={651}
              className="aspect-[4/5] w-full"
              imgClassName="h-full"
            />
            <div className="absolute -bottom-6 -right-3 hidden w-44 rotate-3 rounded-2xl bg-teal-700 p-5 text-cream-50 shadow-deep sm:block">
              <DiamondMark className="h-6 w-6 text-gold-400" withDot />
              <p className="mt-2 font-display text-sm font-semibold leading-snug">
                Slow mornings, done right
              </p>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              eyebrow="How it began"
              title="Named for the best part of the day"
              align="left"
              className="max-w-none"
            />
            <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg text-pretty">
              Golden Hour Café is a warm, contemporary space created for good coffee, thoughtful
              food, and unhurried moments.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg text-pretty">
              From carefully prepared coffee and refreshing drinks to comforting plates, light
              bites, and something sweet to finish, the menu is made for every kind of visit — a
              slow morning, a quick catch-up, a relaxed lunch, or an evening that turns into a
              little longer than planned.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg text-pretty">
              The café takes its name from that brief, beautiful part of the day when everything
              feels warmer, softer, and a little more inviting. Golden Hour Café is built around
              that feeling — a place to come in, settle down, eat well, and stay awhile.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Button variant="primary" to="/menu">
                See the menu <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" to="/contact">
                Find us in Pollachi, Coimbatore
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---- Values grid ---- */}
      <section className="section relative bg-cream-glow">
        <div className="container-px">
          <SectionHeading
            eyebrow="What we stand for"
            title="Made with care"
            intro="Four things we never cut corners on — the quiet promises behind every plate that leaves our kitchen."
          />
          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:gap-8">
            {values.map((value, i) => (
              <ValueCard key={value.title} value={value} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Philosophy / pull-quote band + stats ---- */}
      <section className="grain relative overflow-hidden bg-teal-radial text-cream-50">
        {/* concentric arch line-work backdrop */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[140%] w-[120%] -translate-x-1/2 opacity-[0.1]"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
        >
          {[150, 120, 90, 60].map((r) => (
            <path
              key={r}
              d={`M${200 - r} 400 L${200 - r} 200 A${r} ${r} 0 0 1 ${200 + r} 200 L${200 + r} 400`}
              strokeWidth="1"
            />
          ))}
        </svg>
        <span className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <span className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="container-px relative z-10 section">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-cream-50/10 ring-1 ring-cream-50/15">
              <Quote className="h-6 w-6 text-gold-400" strokeWidth={1.75} />
            </span>
            <blockquote className="mt-8">
              <p className="font-display text-3xl font-medium italic leading-[1.18] text-balance sm:text-4xl lg:text-[2.75rem]">
                &ldquo;Golden hour is that brief, beautiful stretch when everything feels warmer
                and a little more inviting. We built this café around that feeling.&rdquo;
              </p>
            </blockquote>
            <div className="mt-8 flex flex-col items-center gap-3">
              <DiamondMark className="h-6 w-6 text-gold-400" withDot />
              <cite className="not-italic text-sm font-bold uppercase tracking-widest2 text-cream-200/70">
                The Golden Hour Team
              </cite>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-16 max-w-4xl">
            <Divider tone="gold" className="mb-12" />
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl font-semibold text-gold-400 sm:text-5xl">{s.value}</dt>
                  <dd className="mx-auto mt-2 max-w-[12rem] text-xs font-semibold leading-snug text-cream-100/70">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---- Brand mark + closing CTA ---- */}
      <section className="section relative overflow-hidden">
        <span aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="container-px relative">
          <Reveal className="card-cream mx-auto flex max-w-3xl flex-col items-center gap-8 p-8 text-center sm:p-12">
            <div className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 arch-top border border-teal-600/25"
              />
              <div className="relative h-28 w-28 overflow-hidden arch-top bg-teal-900/5 shadow-lift ring-1 ring-teal-900/10 sm:h-32 sm:w-32">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={256}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="eyebrow">{brand.tagline}</span>
              <h2 className="mt-4 font-display text-fluid-section font-semibold leading-[1.05] text-teal-900 text-balance">
                Come stay awhile with us
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg text-pretty">
                {brand.blurb}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" to="/menu">
                Explore the menu <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" to="/gallery">
                See the gallery
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
