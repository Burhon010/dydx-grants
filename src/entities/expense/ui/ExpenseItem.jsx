import { External } from '@/shared/ui'

export function ExpenseItem({ expense }) {
  return (
    <li className="reveal">
      <a href="#" className="card card-hover block p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-sm font-bold md:text-base">{expense.title}</h2>
          <span className="mono flex shrink-0 items-center gap-2 text-xs text-white">
            {expense.amount}
            <External size={16} className="text-muted" />
          </span>
        </div>
        <p className="mono mt-2 text-xs text-dim">{expense.type}</p>
        <p className="mt-3 text-xs">{expense.desc}</p>
      </a>
    </li>
  )
}
