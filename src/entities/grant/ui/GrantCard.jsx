import { Link } from 'react-router-dom'
import { routes } from '@/shared/config'

const clamps = { 3: 'line-clamp-3', 4: 'line-clamp-4', 6: 'line-clamp-6', 7: 'line-clamp-7' }

export function GrantCard({ grant, footer, lines = 4, className = '' }) {
  return (
    <Link to={routes.grant(grant.id)} className={`card group flex h-full flex-col overflow-hidden ${className}`}>
      {(grant.placeholder || grant.cover) && (
        <div className="h-[180px] shrink-0 overflow-hidden rounded-b-2xl bg-surface-dark">
          {grant.cover && <img src={grant.cover} alt="" className="size-full object-cover" loading="lazy" />}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="mono text-sm text-dim">{grant.category}</span>
        <h3 className="mt-3 text-xl font-bold leading-[1.25] transition-colors group-hover:text-white">{grant.title}</h3>
        <p className="mono mt-3 text-[13px] leading-5 text-dim md:text-sm">Funding amount: {grant.amount}</p>
        <p className={`mt-4 text-[15px] leading-6 text-white ${clamps[lines]}`}>{grant.desc}</p>
        {footer && <div className="mt-auto pt-6">{footer}</div>}
      </div>
    </Link>
  )
}
