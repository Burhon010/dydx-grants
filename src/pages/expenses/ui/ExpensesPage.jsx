import { useState } from 'react'
import { ExpenseItem, expenseTabs, expenses } from '@/entities/expense'
import { PageTitle, Tabs } from '@/shared/ui'

export function ExpensesPage() {
  const [tab, setTab] = useState(0)
  const list = tab === 0 ? expenses : expenses.filter((e) => e.cat === tab)

  return (
    <>
      <PageTitle title="Program expenses" />
      <Tabs tabs={expenseTabs} value={tab} onChange={setTab} className="mt-8" />

      <ul className="container-narrow mt-10 flex flex-col gap-3 md:mt-14" key={tab}>
        {list.map((e, i) => (
          <ExpenseItem key={i} expense={e} />
        ))}
      </ul>
    </>
  )
}
