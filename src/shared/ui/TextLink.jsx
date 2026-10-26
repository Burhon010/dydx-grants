import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

export function TextLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2 text-brand transition-colors hover:text-brand-hover ${className}`}>
      {children}
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
    </Link>
  )
}
