import { useState } from 'react'
import { PageTitle, StatusBadge, Tabs } from '../components/ui'
import Cta from '../components/Cta'
import { rfpTabs, rfps } from '../data/rfps'

export default function Rfps() {
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
          <li key={r.title} className="card reveal relative p-5 pr-5 md:pr-28">
            <StatusBadge status={r.status} className="absolute right-5 top-5" />
            <h2 className="pr-24 text-base font-bold md:pr-0">{r.title}</h2>
            <p className="mt-2 max-w-[360px] text-[13px] leading-5 md:max-w-[430px]">{r.desc}</p>
            <p className="mono mt-2 text-xs text-dim">Funding amount: {r.amount}</p>
          </li>
        ))}
        {!list.length && <li className="py-16 text-center text-muted">No initiatives in this category yet.</li>}
      </ul>

      <Cta className="mt-24 md:mt-32" />
    </>
  )
}
