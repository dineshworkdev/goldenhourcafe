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
      { name: 'Chicken Biryani', desc: 'Layered with spiced chicken, fried onions & ghee.', price: 200, featured: true },
      { name: 'Seeraga Samba Biryani', desc: 'Fragrant short-grain rice folded through whole spices — the Tamil Nadu classic.', price: 220, featured: true },
      { name: 'Mutton Biryani', desc: 'Tender mutton with whole spices — the weekend favourite.', price: 250, featured: true },
      { name: 'Chettinad Fish Biryani', desc: 'Bright, tangy Chettinad-style fish biryani.', price: 230 },
      { name: 'Egg Biryani', desc: 'Fragrant rice with soft-boiled eggs.', price: 160 },
      { name: 'Kaadai Biryani', desc: 'Rich quail biryani for the true connoisseur.', price: 240 },
      { name: 'Muttai Curry Set', desc: 'Ghee rice with egg curry — a quick, hearty plate.', price: 150 },
      { name: 'Ghee Rice Combo', desc: 'Aromatic ghee rice with a curry of your choice.', price: 180 },
      { name: 'Banana Leaf Sappadu', desc: 'A classic Tamil Nadu parcel meal, wrapped in banana leaf.', price: 160, featured: true },
      { name: 'Biryani Rice', desc: 'A plate of our seasoned biryani rice.', price: 110 },
    ],
  },
  {
    id: 'specials',
    name: 'Kongu Specials',
    malayalam: 'நாட்டு ஸ்பெஷல்',
    icon: 'Sparkles',
    blurb: 'Heritage plates and feast bundles you only find back home.',
    items: [
      { name: 'Chicken Pallipalayam', desc: 'Our signature — fiery, pan-roasted Kongu-style chicken with ghee rice.', price: 220, featured: true, tags: ['Signature'] },
      { name: 'Kongu Chatti Kozhi Sadam', desc: 'Clay-pot rice meal with spicy Kongu-style chicken, sealed and served bubbling.', price: 230 },
      { name: 'Kongu Chatti Mutton Sadam', desc: 'Clay-pot rice meal with melt-tender Kongu-style mutton.', price: 260 },
      { name: 'Elai Parcel Chicken Biryani', desc: 'Banana-leaf parcel biryani, steamed to lock in the aroma.', price: 230, tags: ['Wrapped'] },
      { name: 'Elai Parcel Mutton Biryani', desc: 'A mutton parcel biryani — a whole feast in a leaf.', price: 260 },
      { name: 'Kongu Virundhu Kettu', desc: 'Traditional Kongunadu feast bundle — a little of everything.', price: 250, tags: ['Feast'] },
      { name: 'Kalyana Sappadu Platter', desc: 'Heritage wedding-style platter, made for sharing.', price: 260 },
    ],
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    malayalam: 'காலை உணவு',
    icon: 'Sunrise',
    blurb: 'The most important meal of the day — full of Tamil Nadu comfort.',
    items: [
      { name: 'Set Dosa', desc: 'A soft stack of spongy dosa.', price: 80 },
      { name: 'Masala Dosa', desc: 'Crisp dosa filled with spiced potato.', price: 100 },
      { name: 'Ghee Roast', desc: 'Lacy, golden, ghee-roasted dosa.', price: 110 },
      { name: 'Poori Masala', desc: 'Puffed pooris with potato masala.', price: 80 },
      { name: 'Plain Dosa', desc: 'Simple, crisp and golden.', price: 70 },
      { name: 'Idiyappam', desc: 'Steamed string hoppers — soft and delicate.', price: 60 },
      { name: 'Idli Set', desc: 'Steamed rice cakes, light as air.', price: 50 },
      { name: 'Puttu Set', desc: 'Steamed rice-and-coconut puttu.', price: 70 },
      { name: 'Medhu Vadai Set', desc: 'Crisp, fluffy lentil vadais.', price: 50 },
      { name: 'Kambu Dosai', desc: 'Soft pearl-millet dosa.', price: 80 },
      { name: 'Onion Uthappam', desc: 'Thick dosa griddled with onions & chilli.', price: 95 },
      { name: 'Kuzhi Paniyaram', desc: 'Spiced rice-and-lentil griddle balls.', price: 70 },
      { name: 'Wheat Parotta', desc: 'Flaky wheat parotta.', price: 60 },
      { name: 'Kara Paniyaram', desc: 'Lacy, spiced rice-batter paniyaram.', price: 70 },
    ],
  },
  {
    id: 'curries',
    name: 'Breakfast Curries',
    malayalam: 'கறிகள்',
    icon: 'Soup',
    blurb: 'The gravies that turn breakfast into a memory.',
    items: [
      { name: 'Kadalai Curry', desc: 'Black chickpeas in roasted-coconut gravy — born for puttu.', price: 60, featured: true },
      { name: 'Egg Curry (Muttai Kuzhambu)', desc: 'The breakfast classic — eggs in coconut-tomato gravy.', price: 80, featured: true },
      { name: 'Dal Curry', desc: 'Comforting, lightly spiced lentils.', price: 50 },
      { name: 'Mixed Vegetable Curry', desc: 'Seasonal vegetables in mild coconut masala.', price: 60 },
      { name: 'Pasi Paruppu Curry', desc: 'Green-gram curry, simple and wholesome.', price: 50 },
      { name: 'Green Peas Curry', desc: 'Green peas in a fragrant masala.', price: 60 },
      { name: 'Egg Roast', desc: 'Eggs in a thick, caramelised onion masala.', price: 90 },
      { name: 'Egg Burji', desc: 'Spiced scrambled eggs.', price: 70 },
      { name: 'Beef Curry', desc: 'Slow-cooked Kongu-style beef.', price: 140 },
      { name: 'Chicken Curry', desc: 'Home-style chicken curry.', price: 130 },
      { name: 'Fish Curry', desc: 'Tamarind-soured Tamil Nadu-style fish curry.', price: 140 },
      { name: 'Keema', desc: 'Spiced minced meat.', price: 150 },
    ],
  },
  {
    id: 'beverages',
    name: 'Fresh Juices & Coffee',
    malayalam: 'ஜூஸ் & தேநீர்',
    icon: 'CupSoda',
    blurb: 'Pressed to order. No added preservatives — just fruit, ice and sunshine.',
    items: [
      { name: 'Fresh Orange Juice', price: 90 },
      { name: 'Watermelon Juice', price: 70 },
      { name: 'Pineapple Juice', price: 80 },
      { name: 'Mango Juice', price: 90 },
      { name: 'Green Apple Juice', price: 110 },
      { name: 'Strawberry Juice', price: 120 },
      { name: 'Mixed Fruit Juice', price: 100 },
      { name: 'Fresh Lime / Lemon-Mint', price: 50 },
      { name: 'Masala Tea', desc: 'Strong, sweet, milky spiced tea.', price: 30, featured: true },
      { name: 'Sukku Kaapi', desc: 'Spiced dry-ginger black coffee, warm and earthy.', price: 45 },
      { name: 'Milk Tea', price: 25 },
    ],
  },
  {
    id: 'snacks',
    name: 'Tea-time Snacks',
    malayalam: 'சிற்றுண்டிகள்',
    icon: 'Cookie',
    blurb: 'What the masala Tea has been waiting for.',
    items: [
      { name: 'Samosa', price: 30 },
      { name: 'Vazhaipazham Bajji', desc: 'Ripe-banana fritters in a crisp batter.', price: 40 },
      { name: 'Paruppu Vadai', desc: 'Crunchy split-lentil fritters.', price: 35 },
      { name: 'Sukhiyan', desc: 'Sweet green-gram dumplings, fried golden.', price: 45 },
      { name: 'Vazhaipoo Vadai', desc: 'Crispy banana-flower fritters.', price: 55 },
      { name: 'Chicken Roll', desc: 'Spiced chicken wrapped and fried crisp.', price: 65 },
    ],
  },
]

// The café's real menu board — shown zoomable on the Menu page.
export const menuCards: MenuCard[] = [
  {
    src: '/media/menu/menu-foods.jpg',
    w: 506,
    h: 700,
    alt: 'Golden Hour Café menu board — Breakfast and Breakfast Curry sections',
    label: 'Breakfast & Foods',
  },
  {
    src: '/media/menu/menu-drinks-snacks.jpg',
    w: 508,
    h: 700,
    alt: 'Golden Hour Cafe menu card, drinks and snacks',
    label: 'Drinks & Snacks',
  },
]
