import { selectionCriteria } from '@/entities/faq'
import { ApplyForm } from '@/features/apply-form'
import { Accordion, PageTitle } from '@/shared/ui'

export function ApplyPage() {
  return (
    <>
      <PageTitle title="Apply for a grant">Please complete the application below for Grant consideration!</PageTitle>

      <section className="container-narrow mt-14 md:mt-16">
        <h2 className="text-sm font-bold">How are grants selected?</h2>
        <p className="mt-2 max-w-[560px] text-xs leading-5 text-muted">
          When assessing applications, the Grants team follows standard criteria using the questions below to guide our decision making.
        </p>
        <Accordion items={selectionCriteria} className="mt-4" />
      </section>

      <section className="container-narrow mt-14 md:mt-16">
        <h2 className="text-[28px] font-bold md:text-[32px]">Grant application</h2>
        <div className="mt-5">
          <ApplyForm />
        </div>
      </section>
    </>
  )
}
