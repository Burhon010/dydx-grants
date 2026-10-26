import { useId, useState } from 'react'
import { Plus } from './Icons'

export default function Accordion({ items, defaultOpen = -1, className = '' }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()

  return (
    <ul className={`border-t border-white/10 ${className}`}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <li key={i} className="border-b border-white/10">
            <h3>
              <button
                type="button"
                id={`${id}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-4 text-left text-[15px] font-medium text-white transition-colors hover:text-brand md:py-[18px]"
              >
                {it.q}
                <Plus size={18} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
              </button>
            </h3>
            <div id={`${id}-p${i}`} role="region" aria-labelledby={`${id}-b${i}`} className="acc-panel" data-open={isOpen}>
              <div>
                <p className="pb-5 pr-10 text-sm leading-6 text-muted">{it.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
