import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { galleryItems } from '../../data/gallery'
import type { GalleryItem } from '../../data/gallery'
import SectionHeading from '../ui/SectionHeading'
import MediaCard from '../ui/MediaCard'
import Lightbox from '../ui/Lightbox'
import Button from '../ui/Button'

const PICK = ['biryani', 'beef-palli', 'karak-chai', 'fresh-juice', 'muttakkari', 'sulaimani-reel']
const items = PICK.map((id) => galleryItems.find((g) => g.id === id)).filter(Boolean) as GalleryItem[]

export default function GalleryTeaser() {
  const [index, setIndex] = useState<number | null>(null)

  return (
    <section className="section">
      <div className="container-px">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="A look inside"
            title="Colour, steam & a little chaos"
            intro="Snapshots from the pass — biryani in the making, juices on ice and the everyday buzz of the kitchen."
            className="md:mx-0"
          />
          <Button variant="outline" to="/gallery" className="shrink-0">
            Open the gallery <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4"
        >
          {items.map((item, i) => (
            <motion.div key={item.id} variants={fadeUp} className="break-inside-avoid">
              <MediaCard item={item} onOpen={() => setIndex(i)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox items={items} index={index} onClose={() => setIndex(null)} setIndex={setIndex} />
    </section>
  )
}
