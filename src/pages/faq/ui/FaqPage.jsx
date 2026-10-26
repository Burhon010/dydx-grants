import { faqGroups } from '@/entities/faq'
import { Accordion, PageTitle } from '@/shared/ui'
import { Cta } from '@/widgets/cta'

export function FaqPage() {
  return (
    <>
      <PageTitle title="Frequently asked questions" />
      <div className="container-narrow mt-14 flex flex-col gap-14 md:mt-16">
        {faqGroups.map((g, i) => (
          <section key={g.title}>
            <h2 className="mb-5 text-sm font-bold">{g.title}</h2>
            <Accordion items={g.items} defaultOpen={i === 0 ? 0 : -1} />
          </section>
        ))}
      </div>
      <Cta className="mt-24 md:mt-32" />
    </>
  )
}
