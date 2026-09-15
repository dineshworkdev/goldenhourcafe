/* ============================================================
   Golden Hour Café — site-wide content & configuration
   Business details:
     • Location:  Pollachi, Coimbatore, Tamil Nadu, India
     • Phone:     +91 8684338294
     • Instagram: @goldenhourcafe
     • Tagline:   "A place to slow down, eat well, and stay awhile."
   ============================================================ */

export interface NavItem {
  label: string
  to: string
}

export interface Social {
  label: string
  icon: string
  url: string
}

export interface Hour {
  days: string
  time: string
}

export interface ValueItem {
  title: string
  body: string
  icon: string
}

export interface Stat {
  value: string
  label: string
}

export const brand = {
  name: 'Golden Hour Café',
  shortName: 'Golden Hour',
  tagline: 'A place to slow down, eat well, and stay awhile.',
  blurb:
    'A warm, contemporary space for good coffee, thoughtful food and unhurried moments — golden hour, whenever you need it.',
  logo: '/media/brand/logo.jpg',
}

export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const contact = {
  area: 'Pollachi, Coimbatore',
  country: 'India',
  addressLine: '2/5A, Main Road, Pollachi, Coimbatore, Tamil Nadu, India',
  phoneDisplay: '+91 8684338294',
  phoneHref: '+918684338294',
  whatsappHref: '+918684338294',
  email: 'reserve@goldenhourcafe.in',
  instagram: { handle: '@goldenhourcafe', url: 'https://www.instagram.com/goldenhourcafe/' },
  mapsQuery: '2/5A, Main Road, Pollachi, Coimbatore, Tamil Nadu, India',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70413.69668062955!2d76.9725493142921!3d10.66112050692979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba839d117dea505%3A0xb3fd96d9c8642659!2sPollachi%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1789459288677!5m2!1sen!2sin',
}

export const socials: Social[] = [
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/goldenhourcafe/' },
  { label: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/918684338294' },
  { label: 'Call', icon: 'phone', url: 'tel:+918684338294' },
]

export const hours: Hour[] = [{ days: 'Monday – Sunday', time: '8:00 AM – 10:00 PM' }]

export const currency = '₹'

export const values: ValueItem[] = [
  {
    title: 'Thoughtful Coffee',
    body: 'Carefully prepared coffee and refreshing drinks — made the way they deserve to be.',
    icon: 'flame',
  },
  {
    title: 'Fresh Ingredients',
    body: 'Juices pressed to order, no added preservatives — just fruit, ice and a little sunshine.',
    icon: 'leaf',
  },
  {
    title: 'Comforting Recipes',
    body: 'Comforting plates and light bites, simmered and prepared the old, patient way.',
    icon: 'chefhat',
  },
  {
    title: 'Made With Love',
    body: 'Every plate leaves our kitchen the way we would serve it to our own family.',
    icon: 'heart',
  },
]

export const stats: Stat[] = [
  { value: '40+', label: 'Menu favourites' },
  { value: '8', label: 'Fresh juices, pressed to order' },
  { value: '100%', label: 'Fresh — no preservatives' },
  { value: 'Pollachi', label: 'In the heart of Coimbatore' },
]

export const seoDefaults = {
  siteName: 'Golden Hour Café',
  url: 'https://goldenhourcafe.in',
  ogImage: '/og-image.jpg',
}
