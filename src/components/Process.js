import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import processImage from '@/images/stock/process.jpg'
import processImage2 from '@/images/stock/process-02.jpg'

export function Process() {
  return (
    <section className="relative overflow-hidden bg-slate-700 pt-24 lg:py-24">
      <Container>
        <div className="relative z-10 mx-auto w-full max-w-lg sm:max-w-xl lg:mx-0">
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl sm:leading-tight">
            How Simplify works
          </h2>
          <div className="mt-12 space-y-8 divide-y divide-gray-secondary-400/90 sm:mt-16">
            <div className="flex items-center space-x-10">
              <span className="text-4xl font-semibold text-white">01</span>
              <span className="text-xl leading-snug text-slate-50">
                You tell us your website needs
              </span>
            </div>
            <div className="flex items-center space-x-10 pt-8">
              <span className="text-4xl font-semibold text-white">02</span>
              <span className="text-xl leading-snug text-slate-50">
                We build, host, and manage your web services
              </span>
            </div>
            <div className="flex items-center space-x-10 pt-8">
              <span className="text-4xl font-semibold text-white">03</span>
              <span className="text-xl leading-snug text-slate-50">
                We boost your revenue and stay available for content editing
                24/7
              </span>
            </div>
          </div>
          <Button
            href="/contact"
            variant="ghost"
            color="light"
            className="mt-16 sm:mt-20"
          >
            Get your website built
          </Button>
        </div>
      </Container>
      <div className="relative mt-16 h-80 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-5/12">
        <Image
          src={processImage}
          className="hidden h-full w-full object-cover object-right-top lg:flex"
        />
        <Image
          src={processImage2}
          className="h-full w-full object-cover object-right-top lg:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-white/0 lg:bg-gradient-to-r"></div>
      </div>
    </section>
  )
}
