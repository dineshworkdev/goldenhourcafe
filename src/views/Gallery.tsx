'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ImageOff } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import { galleryItems, galleryFilters } from '../data/gallery'
import type { GalleryFilter } from '../data/gallery'
import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import MediaCard from '../components/ui/MediaCard'
import Lightbox from '../components/ui/Lightbox'

interface FilterBarProps {
  filters: GalleryFilter[]
  active: string
  onChange: (id: string) => void
  count: number
}

/* ---- Filter tab bar -------------------------------------------------- */
function FilterBar({ filters, active, onChange, count }: FilterBarProps) {
  return (
    <motion.div
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex flex-col items-center gap-5"
    >
      <motion.div
        variants={fadeUp}
        role="group"
        aria-label="Filter gallery"
        className="hide-scrollbar flex max-w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto px-1 sm:flex-wrap sm:justify-center"
      >
        {filters.map((f) => {
          const isActive = f.id === active
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(f.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 ${
                isActive
                  ? 'bg-teal-700 text-cream-50 shadow-soft'
                  : 'bg-cream-50 text-teal-800 ring-1 ring-teal-900/15 hover:bg-cream-200/70 hover:ring-teal-900/25'
              }`}
            >
              {f.label}
            </button>
          )
        })}
      </motion.div>

      <motion.p
        variants={fadeUp}
        aria-live="polite"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
      >
        {count} {count === 1 ? 'piece' : 'pieces'}
      </motion.p>
    </motion.div>
  )
}

/* ---- Empty state (safety only) --------------------------------------- */
function EmptyState() {
  return (
    <div className="mx-auto mt-16 flex max-w-md flex-col items-center rounded-3xl border border-dashed border-teal-900/15 bg-cream-50 px-8 py-14 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-teal-700/10 text-teal-700">
        <ImageOff className="h-7 w-7" />
      </span>
      <p className="mt-5 font-display text-xl font-semibold text-teal-900">
        Nothing here just yet
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Try a different filter — there is plenty more from the café to see.
      </p>
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState<string>('all')
  const [index, setIndex] = useState<number | null>(null)

  const visible = useMemo(
    () =>
      active === 'all'
        ? galleryItems
        : galleryItems.filter((g) => g.category === active),
    [active],
  )

  // Keep filter switches from leaving a stale lightbox index open.
  const handleFilter = (id: string) => {
    setIndex(null)
    setActive(id)
  }

  return (
    <Page
      title="Gallery"
      description="A look inside Golden Hour Café — food, fresh juices and moments from our Pollachi, Coimbatore kitchen."
    >
      <PageHero
        eyebrow="Gallery"
        title="Inside Golden Hour Café"
        malayalam="படத்தொகுப்பு"
        intro="Biryani in the making, juices on ice and the everyday buzz of the café."
      />

      <section className="section relative overflow-hidden">
        <span
          aria-hidden="true"
          className="dot-grid pointer-events-none absolute inset-0 opacity-30"
        />
        <div className="container-px relative">
          <FilterBar
            filters={galleryFilters}
            active={active}
            onChange={handleFilter}
            count={visible.length}
          />

          {visible.length === 0 ? (
            <EmptyState />
          ) : (
            <motion.div
              key={active}
              variants={stagger(0.07)}
              initial="hidden"
              animate="show"
              className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4"
            >
              {visible.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="break-inside-avoid"
                >
                  <MediaCard item={item} onOpen={() => setIndex(i)} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Lightbox
        items={visible}
        index={index}
        onClose={() => setIndex(null)}
        setIndex={setIndex}
      />
    </Page>
  )
}
