/* ============================================================
   Golden Hour Café — gallery media
   Every supplied photo & video, captioned and tagged so the
   Gallery can filter and the Lightbox can caption them.
   Dimensions are real (used to reserve space → no layout shift).
   ============================================================ */

export interface GalleryFilter {
  id: string
  label: string
}

export interface GalleryItem {
  id: string
  type: 'image' | 'video'
  category: string
  src: string
  w: number
  h: number
  alt: string
  caption?: string
  poster?: string
  featured?: boolean
}

export const galleryFilters: GalleryFilter[] = [
  { id: 'all', label: 'Everything' },
  { id: 'food', label: 'Food' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'moments', label: 'Moments' },
  { id: 'menu', label: 'Menu' },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'biryani',
    type: 'image',
    category: 'food',
    src: '/media/food/biryani.jpg',
    w: 2062,
    h: 1372,
    alt: 'A bowl of Seeraga Samba biryani topped with egg and slow-cooked meat',
    caption: 'Seeraga Samba biryani — layered, fragrant, ready.',
    featured: true,
  },
  {
    id: 'beef-palli',
    type: 'image',
    category: 'food',
    src: '/media/posters/beef-palli-ghee-rice.jpg',
    w: 640,
    h: 651,
    alt: 'Chicken Pallipalayam served with ghee rice',
    caption: 'Chicken Pallipalayam with ghee rice — the signature.',
    featured: true,
  },
  {
    id: 'breakfast-platter',
    type: 'image',
    category: 'food',
    src: '/media/food/breakfast-platter.webp',
    w: 675,
    h: 450,
    alt: 'A full South Indian breakfast platter on a banana leaf',
    caption: 'The full Kongu breakfast spread.',
  },
  {
    id: 'egg-porotta',
    type: 'image',
    category: 'food',
    src: '/media/food/egg-porotta.webp',
    w: 675,
    h: 450,
    alt: 'Egg-stuffed parotta hot off the griddle',
    caption: 'Egg parotta, straight off the griddle.',
  },
  {
    id: 'muttakkari',
    type: 'image',
    category: 'food',
    src: '/media/posters/muttakkari-idiyappam.webp',
    w: 640,
    h: 640,
    alt: 'Idiyappam string hoppers served with egg curry',
    caption: 'Idiyappam & muttai kuzhambu — the breakfast classic.',
  },
  {
    id: 'fresh-juice',
    type: 'image',
    category: 'drinks',
    src: '/media/posters/fresh-juice.jpg',
    w: 640,
    h: 853,
    alt: 'A line-up of freshly pressed fruit juices',
    caption: 'Fresh juices, pressed to order.',
  },
  {
    id: 'fresh-juice-reel',
    type: 'video',
    category: 'drinks',
    src: '/media/videos/fresh-juice-reel.mp4',
    poster: '/media/videos/fresh-juice-reel-poster.jpg',
    w: 720,
    h: 1280,
    alt: 'Video of a fresh juice on the café table',
    caption: 'A fresh juice moment at the café.',
  },
  {
    id: 'sulaimani-reel',
    type: 'video',
    category: 'drinks',
    src: '/media/videos/sulaimani-reel.mp4',
    poster: '/media/videos/sulaimani-reel-poster.jpg',
    w: 720,
    h: 1280,
    alt: 'Video of sukku kaapi being poured',
    caption: 'Sukku Kaapi, poured warm.',
  },
  {
    id: 'karak-chai',
    type: 'video',
    category: 'moments',
    src: '/media/videos/karak-chai.mp4',
    poster: '/media/videos/karak-chai-poster.jpg',
    w: 720,
    h: 900,
    alt: 'Masala chai with a plate of evening snacks',
    caption: 'Masala chai & evening snacks.',
    featured: true,
  },
  {
    id: 'opening-soon',
    type: 'video',
    category: 'moments',
    src: '/media/videos/opening-soon.mp4',
    poster: '/media/videos/opening-soon-poster.jpg',
    w: 720,
    h: 1280,
    alt: 'Opening soon teaser video',
    caption: 'Opening soon — where the story began.',
  },
  {
    id: 'menu-breakfast',
    type: 'image',
    category: 'menu',
    src: '/media/menu/menu-breakfast.avif',
    w: 506,
    h: 700,
    alt: 'Golden Hour Café menu board — breakfast and curries',
    caption: 'Breakfast & curries — the board.',
  },
  {
    id: 'menu-biriyani',
    type: 'image',
    category: 'menu',
    src: '/media/menu/menu-biriyani.avif',
    w: 508,
    h: 700,
    alt: 'Golden Hour Café menu board — biryani and specials',
    caption: 'Biryani & specials — the board.',
  },
]
