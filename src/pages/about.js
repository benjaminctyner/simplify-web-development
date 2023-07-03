import Head from 'next/head'

import { Header } from '@/components/Header'
import { AboutHero } from '@/components/AboutHero'
import { StoryWithStats } from '@/components/StoryWithStats'
import { FeaturesGridDark } from '@/components/FeaturesGridDark'
import { Team } from '@/components/Team'
import { LogosGrid } from '@/components/LogosGrid'
import { CareersCTA } from '@/components/CareersCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simplify - Your website, made simple.</title>
        <meta
          name="description"
          content="Simplify - Your website, made simple."
        />
      </Head>
      <Header />
      <AboutHero />
      <StoryWithStats />
      <FeaturesGridDark />
      {/* <Team /> */}
      {/* <LogosGrid /> */}
      <CareersCTA />
      <Footer />
    </>
  )
}
