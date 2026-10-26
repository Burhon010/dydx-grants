import { avatarSrc, personById } from '../model/people'

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
