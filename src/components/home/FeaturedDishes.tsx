import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { menuCategories } from '../../data/menu'
import type { MenuCategory, MenuItem } from '../../data/menu'
import SectionHeading from '../ui/SectionHeading'
import { DishCard } from '../ui/DishCard'
import Button from '../ui/Button'

// Pull the dishes flagged `featured` across every category.
const featured = menuCategories
  .flatMap((c: MenuCategory) => c.items)
  .filter((i: MenuItem) => i.featured)
  .slice(0, 6)

export default function FeaturedDishes() {
  return (
    <section className="section relative bg-cream-200/60">
      <span aria-hidden className="rule absolute inset-x-0 top-0" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Crowd favourites"
          title="The dishes people come back for"
          malayalam="எங்கள் ஸ்பெஷல்"
          intro="A handful of the plates our regulars order on repeat — the full menu has plenty more."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((item) => (
            <motion.div key={item.name} variants={fadeUp}>
              <DishCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button variant="primary" to="/menu" className="!px-8 !py-4 text-base">
            See the full menu <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
