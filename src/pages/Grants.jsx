import { useState } from 'react'
import { PageTitle, Tabs, Toggle } from '../components/ui'
import GrantCard from '../components/GrantCard'
import Cta from '../components/Cta'
import { grantCategories, grants } from '../data/grants'

export default function Grants() {
  const [tab, setTab] = useState(0)
  const [completedOnly, setCompletedOnly] = useState(false)

  const list = grants.filter(
    (g) => (tab === 0 || g.category === grantCategories[tab]) && (!completedOnly || g.completed),
  )

  return (
    <>
      <PageTitle title="Funded grants" />
      <Tabs tabs={grantCategories} value={tab} onChange={setTab} align="left" className="mt-8 md:mt-10" />
      <div className="container-wide mt-4 flex justify-center md:justify-start">
        <div className="md:pl-0">
          <Toggle checked={completedOnly} onChange={setCompletedOnly}>
            Show only completed
          </Toggle>
        </div>
      </div>

      <div className="container-wide mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3" key={`${tab}-${completedOnly}`}>
        {list.map((g) => (
          <div key={g.id} className="reveal">
            <GrantCard grant={g} />
          </div>
        ))}
        {!list.length && <p className="col-span-full py-16 text-center text-muted">No grants match these filters.</p>}
      </div>

      <Cta className="mt-24 md:mt-32" />
    </>
  )
}
