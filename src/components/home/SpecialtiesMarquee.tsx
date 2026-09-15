import Marquee from '../ui/Marquee'

const SPECIALTIES = [
  'Seeraga Samba Biryani',
  'Masala Tea',
  'Fresh Juices',
  'Idiyappam & Muttai Kuzhambu',
  'Banana Leaf Sappadu',
  'Chicken Pallipalayam',
  'Vazhaipazham Bajji',
  'Sukku Kaapi',
  'Ghee Rice',
  'Kongu Chatti Sadam',
]

export default function SpecialtiesMarquee() {
  return (
    <section className="border-y border-cream-300/70 bg-cream-50 py-6" aria-label="Our specialties">
      <Marquee items={SPECIALTIES} tone="dark" />
    </section>
  )
}
