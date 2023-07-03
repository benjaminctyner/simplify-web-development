import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import logoBuzzfeed from '@/images/logos/News_&_observer_logo.svg'
import logoDailyNews from '@/images/logos/the-charlotte-observer.svg'
import logoEntrepreneur from '@/images/logos/BusinessNC.svg'
import logoQuartz from '@/images/logos/quartz.svg'
import logoWired from '@/images/logos/wired.svg'

const companies = [
  { name: 'Buzzfeed', logo: logoBuzzfeed },
  { name: 'Daily News', logo: logoDailyNews },
  { name: 'Entrepreneur', logo: logoEntrepreneur },
]

export function LogosRow() {
  return (
    <section className="relative overflow-hidden bg-vanilla py-20 lg:pt-24">
      <Container>
        <p className="text-center text-base font-semibold uppercase tracking-widest text-slate-500">
          As featured in
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-6 sm:gap-x-12 lg:grid-cols-3">
          {companies.map((company, index) => (
            <li
              key={company.name}
              className={clsx(
                index <= 2 ? 'sm:col-span-2' : 'sm:col-span-3',
                'flex justify-center sm:col-span-2 lg:col-span-1'
              )}
            >
              <Image src={company.logo} alt={company.name} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
