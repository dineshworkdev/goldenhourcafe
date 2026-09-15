import type { Metadata } from 'next'
import Gallery from '../../views/Gallery'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A look inside Golden Hour Café — food, fresh juices and moments from our Pollachi, Coimbatore kitchen.',
}

export default function Page() {
  return <Gallery />
}
