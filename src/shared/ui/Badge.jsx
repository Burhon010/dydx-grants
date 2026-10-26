import { Check } from './Icons'

const tones = {
  dark: 'bg-bg text-white',
  brand: 'bg-brand text-white',
  ok: 'bg-ok text-white',
}

export function Badge({ tone = 'dark', check, className = '', children }) {
  return (
    <span className={`inline-flex h-6 items-center gap-1.5 rounded-full px-3 text-xs font-medium leading-none ${tones[tone]} ${className}`}>
      {children}
      {check && <Check size={12} />}
    </span>
  )
}
