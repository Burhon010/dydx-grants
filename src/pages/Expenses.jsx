import { useState } from 'react'
import { PageTitle, Tabs } from '../components/ui'
import { External } from '../components/Icons'
import { expenseTabs, expenses } from '../data/expenses'

export default function Expenses() {
  const [tab, setTab] = useState(0)
  const list = tab === 0 ? expenses : expenses.filter((e) => e.cat === tab)

  return (
    <>
      <PageTitle title="Program expenses" />
      <Tabs tabs={expenseTabs} value={tab} onChange={setTab} className="mt-8" />

      <ul className="container-narrow mt-10 flex flex-col gap-3 md:mt-14" key={tab}>
        {list.map((e, i) => (
          <li key={i} className="reveal">
            <a href="#" className="card card-hover block p-5">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-sm font-bold md:text-base">{e.title}</h2>
                <span className="mono flex shrink-0 items-center gap-2 text-xs text-white">
                  {e.amount}
                  <External size={16} className="text-muted" />
                </span>
              </div>
              <p className="mono mt-2 text-xs text-dim">{e.type}</p>
              <p className="mt-3 text-xs">{e.desc}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
