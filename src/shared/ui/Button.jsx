import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

export function Button({ to, href, variant = 'primary', size = 'md', arrow, className = '', children, ...rest }) {
  const sizes = {
    sm: 'h-10 px-4 text-[15px]',
    md: 'h-12 px-6 text-base',
  }
  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-hover',
    secondary: 'bg-surface text-white hover:bg-surface-hover',
    white: 'bg-white text-brand hover:bg-white/90',
  }
  const cls = `inline-flex items-center justify-center gap-3 rounded-lg font-medium transition-colors duration-150 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>
  return <button className={cls} {...rest}>{content}</button>
}
