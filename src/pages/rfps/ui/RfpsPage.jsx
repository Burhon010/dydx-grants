import { useState } from 'react'
import { RfpItem, rfpTabs, rfps } from '@/entities/rfp'
import { PageTitle, Tabs } from '@/shared/ui'
import { Cta } from '@/widgets/cta'

export function RfpsPage() {
  const [tab, setTab] = useState(0)
  const list = tab === 0 ? rfps : rfps.filter((r) => r.status === rfpTabs[tab])

  return (
    <>
      <PageTitle title="Discover initiatives (RFPs)">
        The list below includes initial ideas that we think could make excellent Grants. This is a living list that will continue to update as ideas popup.
      </PageTitle>
      <Tabs tabs={rfpTabs} value={tab} onChange={setTab} className="mt-8" />

      <ul className="container-narrow mt-10 flex flex-col gap-3 md:mt-14" key={tab}>
        {list.map((r) => (
          <RfpItem key={r.title} rfp={r} />
        ))}
        {!list.length && <li className="py-16 text-center text-muted">No initiatives in this category yet.</li>}
      </ul>

      <Cta className="mt-24 md:mt-32" />
    </>
  )
}
