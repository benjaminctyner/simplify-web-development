import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CareersCTA() {
  return (
    <section className="relative overflow-hidden bg-vanilla py-16 sm:py-20">
      <Container>
        <div className="bg-amber-100 px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <h1 className="text-center text-4xl font-semibold leading-snug text-slate-900 sm:text-5xl sm:leading-snug">
            Want to join the team?
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-slate-700">
            If you have an interest in web devlopment and small businesses, you
            came to the right place. Check for available positions or give us a
            call if Simplify is the right fit for you.
          </p>
          <div className="mt-10 flex w-full justify-center sm:mt-12">
            <Button href="/contact">See open positions</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
