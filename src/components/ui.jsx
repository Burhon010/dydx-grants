import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, External } from './Icons'

const isExternal = (to) => /^https?:/.test(to)

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

export function TextLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2 text-brand transition-colors hover:text-brand-hover ${className}`}>
      {children}
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

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

export function StatusBadge({ status, tone = 'dark', className = '' }) {
  const color = tone === 'ok' ? 'bg-ok text-white' : statusStyles[status] ?? statusStyles.Funded
  return (
    <span className={`inline-flex h-6 items-center gap-1.5 rounded-full px-3 text-xs font-medium leading-none ${color} ${className}`}>
      {status}
      {(status === 'Completed' || tone === 'ok') && <Check size={12} />}
    </span>
  )
}

export function PageTitle({ title, children, className = '' }) {
  return (
    <header className={`container-wide pt-12 text-center md:pt-20 ${className}`}>
      <h1 className="text-[40px] font-bold leading-[1.1] tracking-tight md:text-[56px]">{title}</h1>
      {children && <p className="mx-auto mt-6 max-w-[620px] text-sm leading-6 text-white/80 md:text-[15px]">{children}</p>}
    </header>
  )
}

export function Tabs({ tabs, value, onChange, align = 'center', className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[1224px] ${className}`}>
      <div className="no-scrollbar overflow-x-auto px-6">
        <div role="tablist" className={`flex w-max items-center gap-1 md:gap-2 ${align === 'center' ? 'mx-auto' : ''}`}>
          {tabs.map((t, i) => {
            const active = value === i
            return (
              <button
                key={i}
                role="tab"
                aria-selected={active}
                onClick={() => onChange(i)}
                className={`h-10 shrink-0 cursor-pointer whitespace-nowrap rounded-lg px-4 text-sm font-medium transition-colors ${
                  active ? 'bg-surface text-white' : 'text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                {t}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function Toggle({ checked, onChange, children }) {
  return (
    <label className="inline-flex cursor-pointer select-none items-center gap-3 text-sm text-muted">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-5 w-9 rounded-full transition-colors ${checked ? 'bg-brand' : 'bg-surface'}`}
      >
        <span className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${checked ? 'translate-x-4' : ''}`} />
      </button>
      {children}
    </label>
  )
}

export function BackButton({ className = '' }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
      aria-label="Go back"
      className={`flex size-10 cursor-pointer items-center justify-center rounded-full bg-surface text-white transition-colors hover:bg-brand ${className}`}
    >
      <ArrowLeft size={18} />
    </button>
  )
}

export function SectionHeading({ title, children, link, decoration, className = '' }) {
  return (
    <div className={`mx-auto max-w-[640px] px-6 text-center ${className}`}>
      <h2 className="relative inline-block text-[32px] font-bold leading-tight tracking-tight md:text-[40px]">
        {title}
        {decoration}
      </h2>
      {children && <p className="mt-6 text-base leading-6 text-muted md:text-[17px]">{children}</p>}
      {link && <div className="mt-6">{link}</div>}
    </div>
  )
}
