import Image from 'next/future/image'

import TeamImage from '@/images/stock/team.jpg'
import { Container } from '@/components/Container'

export function StoryWithStats() {
  return (
    <section className="relative overflow-hidden bg-vanilla pt-16 pb-[100px] sm:pb-[100px] sm:pt-24 md:pb-[100px] lg:pb-[100px]">
      <Container>
        <div className="flex flex-col sm:items-center">
          <p className="flex items-center space-x-3.5 text-xl font-medium text-amber-900/70">
            <svg
              className=""
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

            <span>My story</span>
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-snug text-slate-900 sm:max-w-xl sm:text-center sm:text-5xl sm:leading-snug md:mx-auto xl:mx-0">
            Make it happen.
          </h1>
        </div>
        <div className="  mt-12 flex flex-col">
          <div className="mx-auto md:w-1/2 md:py-8 ">
            <p className="text-lg leading-relaxed text-slate-700">
              My name is Ben and I am the owner and sole developer of Simplify
              Web Development. I designed and managed civil engineering projects
              for 5+ years and earned a Master of Engineering degree before
              taking the leap for something I wanted for a long time - starting
              this web development business.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-slate-700">
              I am proud of building beautiful websites that grow local
              businesses and help communities thrive. In the age of AI site
              builders and black-box web solutions, a hand-coded website is
              faster, ranks higher on SEO, and allows for the personal feel and
              connection that a business needs.
            </p>
          </div>
        </div>
        <div className="relative mt-16 sm:mt-20">
          {/* <div className="aspect-w-2 aspect-h-1">
            <Image
              className="object-cover object-center"
              src={TeamImage}
              alt="Team"
            />
          </div> */}
          {/* <div className="absolute top-full left-6 right-6 flex max-w-4xl -translate-y-12 flex-col divide-y divide-gray-secondary-400/60 bg-amber-100 px-10 py-10 md:left-[unset] md:top-[unset] md:right-0 md:-bottom-1/4 md:w-full md:flex-row md:divide-y-0 md:divide-x md:px-8 lg:p-12">
            <div className="pb-10 md:w-1/3 md:pb-0 md:pr-10 lg:pr-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                5+
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Years of project managment
              </p>
            </div>
            <div className="py-10 md:w-1/3 md:py-0 md:px-10 lg:px-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                $1.5M
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Capital raised by our investors
              </p>
            </div>
            <div className="pt-10 md:w-1/3 md:pt-0 md:pl-10 lg:pl-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                120+
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Team members working on Wavy
              </p>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  )
}
