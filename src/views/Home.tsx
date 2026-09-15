'use client'

import Page from '../components/layout/Page'
import Hero from '../components/home/Hero'
import SpecialtiesMarquee from '../components/home/SpecialtiesMarquee'
import StorySection from '../components/home/StorySection'
import FeaturedDishes from '../components/home/FeaturedDishes'
import GalleryTeaser from '../components/home/GalleryTeaser'
import VideoFeature from '../components/home/VideoFeature'
import VisitSection from '../components/home/VisitSection'

export default function Home() {
  return (
    <Page
      title=""
      description="Golden Hour Café in Pollachi, Coimbatore — a place to slow down, eat well, and stay awhile. Good coffee, thoughtful food and unhurried moments."
    >
      <Hero />
      <SpecialtiesMarquee />
      <StorySection />
      <FeaturedDishes />
      <GalleryTeaser />
      <VideoFeature />
      <VisitSection />
    </Page>
  )
}
