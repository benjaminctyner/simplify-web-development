import Image from 'next/future/image'

import Gallery01 from '@/images/stock/me.png'
import Gallery02 from '@/images/stock/gallery-02.jpg'
import Gallery03 from '@/images/stock/gallery-03.jpg'
import Gallery04 from '@/images/stock/gallery-04.jpg'
import Gallery05 from '@/images/stock/gallery-05.jpg'
import Gallery06 from '@/images/stock/gallery-06.jpg'
import Gallery07 from '@/images/stock/gallery-07.jpg'
import { Container } from '@/components/Container'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-amber-100 pt-16 sm:pt-24">
      <Container>
        <div className="flex flex-col items-center">
          <p className="flex items-center space-x-3.5 text-xl font-medium text-amber-900/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={3}
              viewBox="0 0 28 3"
              fill="none"
            >
              <line
                y1="1.5"
                x2={28}
                y2="1.5"
                stroke="currentColor"
                strokeOpacity="0.65"
                strokeWidth={3}
              />
            </svg>

            <span>About Simplify</span>
          </p>
          <h1 className="mt-5 text-center text-4xl font-semibold leading-snug text-slate-900 sm:mt-6 sm:text-5xl sm:leading-snug md:mx-auto md:max-w-4xl xl:mx-0">
            Helping small business out-grow what they thought possible, because
            that&apos;s our dream too.
          </h1>
        </div>
      </Container>
      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-amber-100" />
          <div className="w-full flex-1 bg-vanilla" />
          <div className="flex-1 bg-vanilla" />
        </div>
        <Container className="relative">
          <div className="mx-auto mt-[30px] grid w-1/2 grid-cols-1 gap-3 lg:mt-[50px] lg:gap-5">
            <div className="col-span-6 flex flex-col gap-3 sm:col-span-4 lg:gap-5">
              <Image
                className="h-auto w-full object-cover object-center"
                src={Gallery01}
                alt="Gallery 01"
              />
            </div>
          </div>
        </Container>
        <div className="h-16 bg-vanilla sm:h-24"></div>
      </div>
    </section>
  )
}
