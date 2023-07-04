import Head from 'next/head'

import { Header } from '@/components/Header'
import { PricingCards } from '@/components/PricingCards'
import { PlanFeatures } from '@/components/PlanFeatures'
import { FeaturedTestimonials } from '@/components/FeaturedTestimonials'
import { PlansTable } from '@/components/PlansTable'
import { Faqs } from '@/components/Faqs'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simplify - Pricing</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Simplify - Your website, made simple."
        />
      </Head>

      <Header />
      <PricingCards />

      <FeaturedTestimonials />

      <CallToAction />
      <Footer />
    </>
  )
}
