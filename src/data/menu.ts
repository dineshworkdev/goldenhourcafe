/* ============================================================
   Golden Hour Café — menu
   Dishes & prices transcribed from the café's own in-store menu
   board (see the two photos in menuCards below, shown zoomable
   on the Menu page so guests can always check the source).

   ▸ All prices are in ₹.
   ▸ Headline biryani & breakfast prices are read straight from
     the board. Beverage / snack prices are indicative — confirm
     the latest in-store. Edit freely; this is the single source.
   ============================================================ */

export interface MenuItem {
  name: string
  desc?: string
  price: number
  featured?: boolean
  tags?: string[]
}

export interface MenuCategory {
  id: string
  name: string
  malayalam: string
  icon: string
  blurb: string
  items: MenuItem[]
}

export interface MenuCard {
  src: string
  w: number
  h: number
  alt: string
  label: string
}

export const menuNote =
  'All prices in ₹, transcribed from our in-store menu. Beverage & snack prices are indicative — please confirm the latest in the café.'

export const menuCategories: MenuCategory[] = [
  {
    id: 'biryani',
    name: 'Biryani & Rice',
    malayalam: 'பிரியாணி',
    icon: 'CookingPot',
    blurb: 'The reason people cross town. Long-grain rice, whole spices, slow heat.',
    items: [
      { name: 'Chicken Biryani', desc: 'Layered with spiced chicken, fried onions & ghee.', price: 12, featured: true },
      { name: 'Seeraga Samba Biryani', desc: 'Fragrant short-grain rice folded through whole spices — the Tamil Nadu classic.', price: 15, featured: true },
      { name: 'Mutton Biryani', desc: 'Tender mutton with whole spices — the weekend favourite.', price: 16, featured: true },
      { name: 'Chettinad Fish Biryani', desc: 'Bright, tangy Chettinad-style fish biryani.', price: 15 },
      { name: 'Egg Biryani', desc: 'Fragrant rice with soft-boiled eggs.', price: 10 },
      { name: 'Kaadai Biryani', desc: 'Rich quail biryani for the true connoisseur.', price: 18 },
      { name: 'Muttai Curry Set', desc: 'Ghee rice with egg curry — a quick, hearty plate.', price: 10 },
      { name: 'Ghee Rice Combo', desc: 'Aromatic ghee rice with a curry of your choice.', price: 13 },
      { name: 'Banana Leaf Sappadu', desc: 'A classic Tamil Nadu parcel meal, wrapped in banana leaf.', price: 12, featured: true },
      { name: 'Biryani Rice', desc: 'A plate of our seasoned biryani rice.', price: 7 },
    ],
  },
  {
    id: 'specials',
    name: 'Kongu Specials',
    malayalam: 'நாட்டு ஸ்பெஷல்',
    icon: 'Sparkles',
    blurb: 'Heritage plates and feast bundles you only find back home.',
    items: [
      { name: 'Chicken Pallipalayam', desc: 'Our signature — fiery, pan-roasted Kongu-style chicken with ghee rice.', price: 16, featured: true, tags: ['Signature'] },
      { name: 'Kongu Chatti Kozhi Sadam', desc: 'Clay-pot rice meal with spicy Kongu-style chicken, sealed and served bubbling.', price: 17 },
      { name: 'Kongu Chatti Mutton Sadam', desc: 'Clay-pot rice meal with melt-tender Kongu-style mutton.', price: 19 },
      { name: 'Elai Parcel Chicken Biryani', desc: 'Banana-leaf parcel biryani, steamed to lock in the aroma.', price: 17, tags: ['Wrapped'] },
      { name: 'Elai Parcel Mutton Biryani', desc: 'A mutton parcel biryani — a whole feast in a leaf.', price: 19 },
      { name: 'Kongu Virundhu Kettu', desc: 'Traditional Kongunadu feast bundle — a little of everything.', price: 19, tags: ['Feast'] },
      { name: 'Kalyana Sappadu Platter', desc: 'Heritage wedding-style platter, made for sharing.', price: 19 },
    ],
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    malayalam: 'காலை உணவு',
    icon: 'Sunrise',
    blurb: 'The most important meal of the day — full of Tamil Nadu comfort.',
    items: [
      { name: 'Set Dosa', desc: 'A soft stack of spongy dosa.', price: 5 },
      { name: 'Masala Dosa', desc: 'Crisp dosa filled with spiced potato.', price: 6 },
      { name: 'Ghee Roast', desc: 'Lacy, golden, ghee-roasted dosa.', price: 5 },
      { name: 'Poori Masala', desc: 'Puffed pooris with potato masala.', price: 6 },
      { name: 'Plain Dosa', desc: 'Simple, crisp and golden.', price: 1 },
      { name: 'Idiyappam', desc: 'Steamed string hoppers — soft and delicate.', price: 1 },
      { name: 'Idli Set', desc: 'Steamed rice cakes, light as air.', price: 5 },
      { name: 'Puttu Set', desc: 'Steamed rice-and-coconut puttu.', price: 5 },
      { name: 'Medhu Vadai Set', desc: 'Crisp, fluffy lentil vadais.', price: 5 },
      { name: 'Kambu Dosai', desc: 'Soft pearl-millet dosa.', price: 1 },
      { name: 'Onion Uthappam', desc: 'Thick dosa griddled with onions & chilli.', price: 6 },
      { name: 'Kuzhi Paniyaram', desc: 'Spiced rice-and-lentil griddle balls.', price: 4 },
      { name: 'Wheat Parotta', desc: 'Flaky wheat parotta.', price: 1 },
      { name: 'Kara Paniyaram', desc: 'Lacy, spiced rice-batter paniyaram.', price: 1 },
    ],
  },
  {
    id: 'curries',
    name: 'Breakfast Curries',
    malayalam: 'கறிகள்',
    icon: 'Soup',
    blurb: 'The gravies that turn breakfast into a memory.',
    items: [
      { name: 'Kadalai Curry', desc: 'Black chickpeas in roasted-coconut gravy — born for puttu.', price: 4, featured: true },
      { name: 'Egg Curry (Muttai Kuzhambu)', desc: 'The breakfast classic — eggs in coconut-tomato gravy.', price: 5, featured: true },
      { name: 'Dal Curry', desc: 'Comforting, lightly spiced lentils.', price: 4 },
      { name: 'Mixed Vegetable Curry', desc: 'Seasonal vegetables in mild coconut masala.', price: 4 },
      { name: 'Pasi Paruppu Curry', desc: 'Green-gram curry, simple and wholesome.', price: 4 },
      { name: 'Green Peas Curry', desc: 'Green peas in a fragrant masala.', price: 4 },
      { name: 'Egg Roast', desc: 'Eggs in a thick, caramelised onion masala.', price: 6 },
      { name: 'Egg Burji', desc: 'Spiced scrambled eggs.', price: 5 },
      { name: 'Beef Curry', desc: 'Slow-cooked Kongu-style beef.', price: 6 },
      { name: 'Chicken Curry', desc: 'Home-style chicken curry.', price: 6 },
      { name: 'Fish Curry', desc: 'Tamarind-soured Tamil Nadu-style fish curry.', price: 6 },
      { name: 'Keema', desc: 'Spiced minced meat.', price: 6 },
    ],
  },
  {
    id: 'beverages',
    name: 'Fresh Juices & Coffee',
    malayalam: 'ஜூஸ் & தேநீர்',
    icon: 'CupSoda',
    blurb: 'Pressed to order. No added preservatives — just fruit, ice and sunshine.',
    items: [
      { name: 'Fresh Orange Juice', price: 7 },
      { name: 'Watermelon Juice', price: 7 },
      { name: 'Pineapple Juice', price: 8 },
      { name: 'Mango Juice', price: 8 },
      { name: 'Green Apple Juice', price: 8 },
      { name: 'Strawberry Juice', price: 9 },
      { name: 'Mixed Fruit Juice', price: 9 },
      { name: 'Fresh Lime / Lemon-Mint', price: 5 },
      { name: 'Masala Tea', desc: 'Strong, sweet, milky spiced tea.', price: 2, featured: true },
      { name: 'Sukku Kaapi', desc: 'Spiced dry-ginger black coffee, warm and earthy.', price: 2 },
      { name: 'Milk Tea', price: 2 },
    ],
  },
  {
    id: 'snacks',
    name: 'Tea-time Snacks',
    malayalam: 'சிற்றுண்டிகள்',
    icon: 'Cookie',
    blurb: 'What the masala Tea has been waiting for.',
    items: [
      { name: 'Samosa', price: 1 },
      { name: 'Vazhaipazham Bajji', desc: 'Ripe-banana fritters in a crisp batter.', price: 1 },
      { name: 'Paruppu Vadai', desc: 'Crunchy split-lentil fritters.', price: 1 },
      { name: 'Sukhiyan', desc: 'Sweet green-gram dumplings, fried golden.', price: 1 },
      { name: 'Vazhaipoo Vadai', desc: 'Crispy banana-flower fritters.', price: 3 },
      { name: 'Chicken Roll', desc: 'Spiced chicken wrapped and fried crisp.', price: 3 },
    ],
  },
]

// The café's real menu board — shown zoomable on the Menu page.
export const menuCards: MenuCard[] = [
  {
    src: '/media/menu/menu-breakfast.avif',
    w: 506,
    h: 700,
    alt: 'Golden Hour Café menu board — Breakfast and Breakfast Curry sections',
    label: 'Breakfast & Curries',
  },
  {
    src: '/media/menu/menu-biriyani.avif',
    w: 508,
    h: 700,
    alt: 'Golden Hour Café menu board — Biryani and Kongu specials',
    label: 'Biryani & Specials',
  },
]
