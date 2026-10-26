import { Link } from 'react-router-dom'
import { avatarSrc, personById } from '../data/people'

export function AvatarStack({ ids, extra = 0, size = 36, className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      {ids.map((id, i) => {
        const p = personById(id)
        if (!p) return null
        return (
          <img
            key={id}
            src={avatarSrc(p.avatar)}
            alt={p.name}
            title={p.name}
            style={{ width: size, height: size, zIndex: i }}
            className={`rounded-full ring-2 ring-surface ${i ? '-ml-2.5' : ''}`}
          />
        )
      })}
      {extra > 0 && (
        <span
          style={{ width: size, height: size, zIndex: ids.length }}
          className="-ml-2.5 flex items-center justify-center rounded-full bg-brand text-xs font-medium ring-2 ring-surface"
        >
          +{extra}
        </span>
      )}
    </div>
  )
}

export default function GrantCard({ grant, lines = 4, className = '' }) {
  const to = `/grants/${grant.id}`
  const clamp = { 3: 'line-clamp-3', 4: 'line-clamp-4', 6: 'line-clamp-6', 7: 'line-clamp-7' }[lines]
  return (
    <Link to={to} className={`card group flex h-full flex-col overflow-hidden ${className}`}>
      {(grant.placeholder || grant.cover) && (
        <div className="h-[180px] shrink-0 overflow-hidden rounded-b-2xl bg-surface-dark">
          {grant.cover && <img src={grant.cover} alt="" className="size-full object-cover" loading="lazy" />}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="mono text-sm text-dim">{grant.category}</span>
        <h3 className="mt-3 text-xl font-bold leading-[1.25] transition-colors group-hover:text-white">{grant.title}</h3>
        <p className="mono mt-3 text-[13px] leading-5 text-dim md:text-sm">Funding amount: {grant.amount}</p>
        <p className={`mt-4 text-[15px] leading-6 text-white ${clamp}`}>{grant.desc}</p>
        <AvatarStack ids={grant.people} extra={grant.extra} className="mt-auto pt-6" />
      </div>
    </Link>
  )
}
