import { routes } from '@/shared/config'
import { Button, DownArrow, Underline } from '@/shared/ui'
import { stats } from '../model/content'

export function HeroSection() {
  return (
    <section className="container-wide pt-10 text-center md:pt-16">
      <h1 className="mx-auto max-w-[820px] text-[44px] font-bold leading-[1.15] tracking-tight xs:text-5xl md:text-[72px] md:leading-[1.2]">
        Powering the future of<br className="hidden md:block" /> dYdX through<br className="hidden md:block" /> community{' '}
        <span className="relative inline-block">
          grants
          <Underline className="absolute -bottom-2 left-[-6%] h-4 w-[112%] md:-bottom-3 md:h-5" />
        </span>
      </h1>
      <div className="mx-auto mt-12 flex max-w-[400px] flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center sm:gap-8">
        <Button to={routes.rfps} variant="secondary" className="sm:w-[180px]">Discover RFPs</Button>
        <Button to={routes.apply} arrow className="sm:w-[200px]">Apply for grant</Button>
      </div>
      <dl className="mx-auto mt-16 grid max-w-[700px] gap-10 sm:grid-cols-3 sm:gap-6">
        {stats.map(([num, label], i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <dt className="mono order-1 text-xl md:text-lg">{num}</dt>
            <dd className="mono order-2 text-sm text-muted">{label}</dd>
          </div>
        ))}
      </dl>
      <DownArrow className="mx-auto mt-14 h-[72px] w-6" />
    </section>
  )
}
