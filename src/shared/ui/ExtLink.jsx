import { External } from './Icons'

export function ExtLink({ href, children, className = '', icon = true }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 ${className}`}>
      {children}
      {icon && <External size={14} />}
    </a>
  )
}

const statusStyles = {
  Open: 'bg-brand text-white',
  Funded: 'bg-bg text-white',
  Completed: 'bg-ok text-white',
}
