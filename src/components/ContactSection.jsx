import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="px-6 py-20 -mx-6 rounded-4xl bg-neutral-950 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="flex mt-6">
              <Button href="/contact" invert>
                Say hi!
              </Button>
            </div>
            <div className="pt-10 mt-10 border-t border-white/10">
              <h3 className="text-base font-semibold text-white font-display">
                Our offices
              </h3>
              <Offices
                invert
                className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
