'use client'

import { motion } from 'framer-motion'
import {
  CookingPot,
  Sparkles,
  Sunrise,
  Soup,
  CupSoda,
  Cookie,
  UtensilsCrossed,
  Phone,
  MapPin,
  Info,
  ArrowRight,
} from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { menuCategories, menuNote, menuCards } from '../data/menu'
import type { MenuCategory as MenuCategoryType } from '../data/menu'
import { contact } from '../data/site'
import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ZoomableImage from '../components/ui/ZoomableImage'
import DiamondMark from '../components/ui/DiamondMark'
import { DishRow } from '../components/ui/DishCard'

/* Maps the lucide icon NAME string stored on each category to the real
   component, so the data file can stay framework-agnostic. */
const CATEGORY_ICONS = {
  CookingPot,
  Sparkles,
  Sunrise,
  Soup,
  CupSoda,
  Cookie,
}

/* Sticky pill that jumps to a category. Uses a hash anchor so it works
   with the browser's native smooth-scroll (scroll-behavior set globally). */
interface CategoryPillProps {
  cat: MenuCategoryType
}

function CategoryPill({ cat }: CategoryPillProps) {
  const Icon = CATEGORY_ICONS[cat.icon as keyof typeof CATEGORY_ICONS] || UtensilsCrossed
  return (
    <a
      href={`#${cat.id}`}
      className="group flex shrink-0 items-center gap-2 rounded-full border border-teal-900/10 bg-cream-50/70 px-4 py-2 text-sm font-bold text-teal-800 transition-colors hover:border-teal-600 hover:bg-teal-700 hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
    >
      <Icon className="h-4 w-4 text-teal-600 transition-colors group-hover:text-gold-400" />
      {cat.name}
    </a>
  )
}

/* One full menu category: heading + iconic chip + the dish list. */
interface MenuCategoryProps {
  cat: MenuCategoryType
  index: number
}

function MenuCategory({ cat, index }: MenuCategoryProps) {
  const Icon = CATEGORY_ICONS[cat.icon as keyof typeof CATEGORY_ICONS] || UtensilsCrossed
  const tinted = index % 2 === 1

  return (
    <section
      id={cat.id}
      className={`section scroll-mt-32 relative ${tinted ? 'bg-cream-200/50' : ''}`}
    >
      <div className="container-px relative">
        <div className="flex items-start gap-5">
          <Reveal
            variants={fadeUp}
            className="mt-1 hidden shrink-0 grid-cols-1 place-items-center rounded-2xl bg-teal-700 p-4 text-cream-50 shadow-soft sm:grid"
          >
            <Icon className="h-7 w-7 text-gold-400" />
          </Reveal>
          <SectionHeading
            align="left"
            eyebrow={`0${index + 1}`}
            title={cat.name}
            malayalam={cat.malayalam}
            intro={cat.blurb}
            className="!max-w-2xl"
          />
        </div>

        <Reveal
          as="ul"
          variants={stagger(0.06)}
          className="mt-10 grid gap-x-12 sm:grid-cols-2"
        >
          {cat.items.map((it) => (
            <motion.div key={it.name} variants={fadeUp} className="border-b border-teal-900/5">
              <DishRow item={it} />
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default function Menu() {
  return (
    <Page
      title="Menu"
      description="Authentic Tamil Nadu menu at Golden Hour Café, Pollachi, Coimbatore — biryani, breakfast, curries, fresh juices and snacks. Prices in ₹."
    >
      <PageHero
        eyebrow="Our Menu"
        title="Straight from the Kongu kitchen"
        malayalam="சுவைப்பட்டியல்"
        intro="Slow-cooked biryani, traditional breakfast and juices pressed to order — all priced in ₹."
      >
        <Button variant="gold" to="/contact">
          Visit Us <MapPin className="h-4 w-4" />
        </Button>
        <Button variant="outline" href={`tel:${contact.phoneHref}`}>
          <Phone className="h-4 w-4" /> Call to order
        </Button>
      </PageHero>

      {/* Sticky category quick-nav */}
      <nav
        aria-label="Menu categories"
        className="sticky top-[5.5rem] z-30 border-b border-teal-900/10 bg-cream-100/85 backdrop-blur-md"
      >
        <div className="container-px">
          <ul className="hide-scrollbar -mx-1 flex items-center gap-2 overflow-x-auto py-3">
            {menuCategories.map((cat) => (
              <li key={cat.id} className="px-1">
                <CategoryPill cat={cat} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Category sections, separated by a hairline rule */}
      <div>
        {menuCategories.map((cat, index) => (
          <div key={cat.id}>
            <MenuCategory cat={cat} index={index} />
            <span aria-hidden="true" className="rule block" />
          </div>
        ))}
      </div>

      {/* The real menu board */}
      <section className="section relative overflow-hidden">
        <span aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-px relative">
          <SectionHeading
            eyebrow="Straight off the wall"
            title="See the original menu board"
            intro="Every dish above is transcribed from our in-store board. Tap any photo to zoom right in and read it for yourself."
          />

          <Reveal variants={fadeUp} className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-gold-500/30 bg-gold-500/10 px-5 py-4 text-left">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
            <p className="text-sm leading-relaxed text-ink-soft text-pretty">{menuNote}</p>
          </Reveal>

          <Reveal
            as="div"
            variants={stagger(0.12)}
            className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2"
          >
            {menuCards.map((card) => (
              <motion.div key={card.src} variants={fadeUp}>
                <ZoomableImage
                  src={card.src}
                  alt={card.alt}
                  w={card.w}
                  h={card.h}
                  label={card.label}
                />
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="section pt-0">
        <div className="container-px">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grain relative overflow-hidden rounded-[2rem] bg-teal-radial px-6 py-16 text-center text-cream-50 shadow-deep sm:px-12 sm:py-20"
          >
            <span className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
            <span className="pointer-events-none absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <DiamondMark className="h-7 w-7 text-gold-400" withDot />
              <SectionHeading
                tone="light"
                eyebrow="Hungry yet?"
                title="The smell alone is worth the trip."
                intro="Drop by in Pollachi, Coimbatore or call ahead and we'll have your biryani boxed and ready."
                className="mt-4"
              />
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button variant="gold" to="/contact">
                  Visit Us <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghostLight" href={`tel:${contact.phoneHref}`}>
                  <Phone className="h-4 w-4" /> {contact.phoneDisplay}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Page>
  )
}
