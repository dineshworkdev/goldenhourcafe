import type { Metadata } from 'next'
import Menu from '../../views/Menu'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Authentic Tamil Nadu menu at Golden Hour Café, Pollachi, Coimbatore — biryani, breakfast, curries, fresh juices and snacks. Prices in ₹.',
}

export default function Page() {
  return <Menu />
}
