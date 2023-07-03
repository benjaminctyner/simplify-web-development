import Head from 'next/head'

import { Header } from '@/components/Header'
import { HomeHero } from '@/components/HomeHero'
import { LogosRow } from '@/components/LogosRow'
import { FeatureBlocks } from '@/components/FeatureBlocks'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import { Process } from '@/components/Process'
import { TestimonialsSlide } from '@/components/TestimonialsSlide'
import { Faqs } from '@/components/Faqs'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simplify - Your website, made simple.</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />

        <meta
          name="description"
          content="Wavvy takes the headaches out of your podcast hosting, and allows you to focus on what you love to do – record great content, and grow a loyal audience."
        />
      </Head>
      <Header />
      <HomeHero />
      <LogosRow />
      <FeatureBlocks />
      <FeaturesGrid />
      <Process />
      <TestimonialsSlide />

      <CallToAction />
      <Footer />
    </>
  )
}
