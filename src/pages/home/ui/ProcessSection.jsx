import { CurveArrow, SectionHeading, Underline } from '@/shared/ui'
import { steps, stepTilt } from '../model/content'

export function ProcessSection() {
  return (
    <section className="mt-24 md:mt-32">
      <SectionHeading
        title={
          <span className="relative inline-block">
            Application process
            <Underline wavy className="absolute -bottom-3 right-[8%] h-4 w-[40%]" />
          </span>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </SectionHeading>
      <div className="container-wide relative mt-12 grid gap-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`card relative flex min-h-[320px] flex-col p-8 md:min-h-[360px] lg:min-h-[380px] ${stepTilt[i]} ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <span className="font-hand text-[44px] font-semibold leading-none">{s.n}</span>
            <h3 className="mt-14 text-2xl font-bold">{s.title}</h3>
            <p className="mt-4 text-[15px] leading-7">{s.text}</p>
            {i < 2 && <CurveArrow down className="pointer-events-none absolute -bottom-12 left-10 z-10 h-10 w-20 rotate-90 md:hidden" />}
          </div>
        ))}
        <CurveArrow className="pointer-events-none absolute left-[27%] top-[8%] hidden h-14 w-28 lg:block" />
        <CurveArrow down className="pointer-events-none absolute left-[58%] top-[75%] hidden h-14 w-28 lg:block" />
      </div>
    </section>
  )
}
