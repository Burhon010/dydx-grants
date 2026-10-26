import { Link } from 'react-router-dom'
import { Discord, External, Twitter } from '@/shared/ui'
import { routes } from '@/shared/config'

const links = [
  { label: 'About', to: `${routes.home}#about` },
  { label: 'FAQ', to: routes.faq },
  { label: 'Brand assets', to: routes.brandAssets },
  { label: 'dYdX Foundation', href: 'https://dydx.foundation' },
  { label: 'dYdX trading', href: 'https://dydx.exchange' },
]

const linkCls = 'mono inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-white'

export function Footer() {
  return (
    <footer className="mt-24 md:mt-32">
      <div className="container-wide flex flex-col items-center gap-10 pb-12 pt-10 md:flex-row md:justify-between md:py-14 lg:gap-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8 lg:gap-10">
          <Link to={routes.home} aria-label="dYdX grants — home" className="shrink-0">
            <img src="/img/x-icon.png" alt="" className="size-10 rounded-full" />
          </Link>
          <nav className="flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:justify-center md:gap-x-7 md:gap-y-3" aria-label="Footer">
            {links.map((l) =>
              l.href ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {l.label}
                  <External size={12} />
                </a>
              ) : (
                <Link key={l.label} to={l.to} className={linkCls}>
                  {l.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="flex items-center gap-6 text-muted">
          <a href="https://twitter.com/dydx" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:text-white">
            <Twitter />
          </a>
          <a href="https://discord.gg/dydx" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="transition-colors hover:text-white">
            <Discord />
          </a>
        </div>
      </div>
    </footer>
  )
}
