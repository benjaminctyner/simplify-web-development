import clsx from 'clsx'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

const tiers = [
  {
    name: 'Business',
    href: '/contact',
    description:
      'Lorem ipsum dolor sit amet molestie condimentum nisl mollis iaculis etiam. ',
    price: 99,
    features: [
      'Unlimited recording ​​& editing',
      'Up to 1080p video quality',
      '50GB of cloud storage',
      '256 kbps audio quality',
      '5 hours of automatic transcript generation',
      '3 hour of clips',
      'Listener analytics',
      'Screen sharing',
    ],
  },
]

export function PricingCards() {
  return (
    <section className="relative overflow-hidden bg-amber-100 pt-16 sm:pt-24">
      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center sm:max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="text-center text-4xl font-semibold leading-snug text-slate-900 sm:text-5xl sm:leading-snug md:mx-auto md:max-w-4xl xl:mx-0">
            A simple plan that works for you
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-slate-700 sm:mt-6">
            We offer a monthly subscription that includes the building of a
            hand-coded business website, complete SEO optimization, unlimited
            lifetime content edits, and hosting with 99.99% uptime. Guaranteed.
          </p>
        </div>
      </Container>
      <div className="relative pt-20">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-amber-100" />
          <div className="w-full flex-1 bg-vanilla" />
          <div className="flex-1 bg-vanilla" />
        </div>
        <Container>
          <div className="relative mx-auto grid max-w-lg divide-x-0 divide-y divide-gray-secondary-400/75 border border-gray-secondary-400/60 sm:max-w-xl md:max-w-2xl ">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={clsx(
                  index == 2 ? 'bg-purple-light' : 'bg-gray-secondary-50',
                  'p-8 sm:p-10'
                )}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {tier.name}
                </h3>
                <p className="mt-4 text-slate-600">{tier.description}</p>
                <p className="mt-12">
                  <span className="text-4xl font-semibold text-slate-900">
                    ${tier.price}
                  </span>
                  <span className="ml-2.5 text-lg font-medium text-slate-500">
                    / month
                  </span>
                </p>
                <Button href={tier.href} className="mt-8 w-full">
                  Get your website built
                </Button>
                <p className="mt-3.5 text-center text-sm text-slate-500">
                  No credit card required
                </p>
                <hr className="border-gray-secondary-400/35 my-10" />
                <p className="font-medium text-slate-900">
                  {tier.name} includes:
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-6">
                      <CheckCircleIcon className="h-5 w-5 shrink-0 text-slate-800" />
                      <p className="text-slate-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="h-16 bg-vanilla sm:h-24"></div>
    </section>
  )
}
