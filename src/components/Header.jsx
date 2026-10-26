import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button } from './ui'
import { Close, Discord, Menu, Twitter } from './Icons'

export const navItems = [
  { to: '/rfps', label: 'Discover initiatives' },
  { to: '/grants', label: 'Funded grants' },
  { to: '/expenses', label: 'Program expenses' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-200 ${
          scrolled || open ? 'bg-bg/90 backdrop-blur-md' : 'bg-transparent'
        } ${open ? 'bg-bg' : ''}`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-8">
          <Link to="/" aria-label="dYdX grants — home" className="shrink-0">
            <img src="/img/logo.png" alt="dYdX grants" className="h-11 w-auto lg:h-12" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `mono text-[13px] tracking-wide transition-colors hover:text-white ${isActive ? 'text-white' : 'text-muted'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Button to="/apply" size="sm" className="ml-2 h-11">
              Apply for grants
            </Button>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <Button to="/apply" size="sm" className="h-11 px-5">
              Apply
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex size-11 cursor-pointer items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 top-20 z-30 flex flex-col bg-bg px-6 pb-10 pt-10 transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-1 flex-col items-center gap-8 overflow-y-auto pt-6" aria-label="Mobile">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              tabIndex={open ? 0 : -1}
              className={({ isActive }) =>
                `text-2xl font-semibold transition-colors hover:text-brand ${isActive ? 'text-brand' : 'text-white'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-6 text-muted">
          <a href="https://twitter.com/dydx" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="https://discord.gg/dydx" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="transition-colors hover:text-white">
            <Discord size={24} />
          </a>
        </div>
      </div>
    </>
  )
}
