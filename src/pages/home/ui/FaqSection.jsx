import { homeFaq } from '@/entities/faq'
import { Accordion, Ellipse, SectionHeading } from '@/shared/ui'

export function FaqSection() {
  return (
    <section className="mt-24 md:mt-32">
      <SectionHeading
        title={
          <>
            Frequently asked{' '}
            <span className="relative inline-block">
              questions
              <Ellipse className="pointer-events-none absolute -inset-x-[14%] -inset-y-[22%] h-[145%] w-[128%]" />
            </span>
          </>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </SectionHeading>
      <div className="container-narrow mt-12 md:mt-16">
        <Accordion items={homeFaq} />
      </div>
    </section>
  )
}
