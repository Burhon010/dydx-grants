import { Link, Navigate, useParams } from 'react-router-dom'
import { grantById } from '@/entities/grant'
import { avatarSrc, personById } from '@/entities/person'
import { routes } from '@/shared/config'
import { BackButton, Badge, Button, ExtLink, External, SectionHeading, TextLink } from '@/shared/ui'
import { Cta } from '@/widgets/cta'
import { ProjectCard } from '@/widgets/project-card'

const fallback = {
  purpose: 'This grant supports the dYdX community and ecosystem by funding the work described above.',
  execution: '3 months to completion.',
  payment: '25% upfront / 75% at completion',
  links: ['www.granttitleproject.com'],
  transactions: [{ title: 'Funding title', amount: '$5,000.00', date: 'Date', desc: 'Description' }],
}

function Block({ title, children }) {
  return (
    <section>
      <h2 className="text-sm font-bold">{title}</h2>
      <div className="mt-3 text-[13px] leading-5 text-white/90">{children}</div>
    </section>
  )
}

export function GrantDetailPage() {
  const { id } = useParams()
  const base = grantById(id)
  if (!base) return <Navigate to={routes.notFound} replace />
  const g = { ...fallback, link: 'www.granttitleproject.com', ...base }
  const more = ['trading-strategy-risk-tool', 'dydx-vote-subgraph', 'rust-sdk']
    .filter((x) => x !== g.id)
    .slice(0, 2)
    .map(grantById)

  return (
    <>
      <div className="container-wide relative pt-4 md:pt-8">
        <BackButton className="mb-6 xl:absolute xl:left-[calc(50%-492px)] xl:top-12 xl:mb-0" />
        <article className="mx-auto max-w-[808px]">
          {g.cover ? (
            <img src={g.cover} alt="" className="aspect-[2.2/1] w-full rounded-2xl border border-white/10 object-cover max-md:h-[150px] max-md:aspect-auto" />
          ) : (
            <div className="h-[150px] rounded-2xl bg-surface md:hidden" />
          )}

          <div className="mt-8 text-center md:mt-6 md:text-left">
            <span className="mono text-sm text-dim">{g.category}</span>
            <h1 className="mt-2 text-[34px] font-bold leading-[1.1] tracking-tight md:text-[56px]">{g.title}</h1>

            <div className="mt-5 flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-4">
                <Badge tone="ok" check className="h-9 px-5 text-sm md:h-6 md:px-3 md:text-xs">Funded</Badge>
                <p className="text-sm text-muted md:text-xs">
                  Funding amount: <span className="ml-1 font-medium text-white">{g.amount}</span>
                </p>
              </div>
              <div className="hidden md:block">
                <Button href={`https://${g.link}`} target="_blank" rel="noopener noreferrer" size="sm" className="h-9 gap-2 px-4 text-xs">
                  Project link <External size={13} />
                </Button>
              </div>
              <a
                href={`https://${g.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand hover:text-brand-hover md:hidden"
              >
                {g.link} <External size={16} />
              </a>
            </div>
          </div>

          <section className="mt-10 text-center md:mt-8 md:text-left">
            <h2 className="text-sm font-bold">Team</h2>
            <ul className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
              {g.people.map((pid) => {
                const p = personById(pid)
                return (
                  <li key={pid}>
                    <Link
                      to={routes.grantee(p.id)}
                      className="flex h-11 items-center gap-2.5 rounded-full bg-surface py-1.5 pl-1.5 pr-5 text-xs font-medium transition-colors hover:bg-surface-hover"
                    >
                      <img src={avatarSrc(p.avatar)} alt="" className="size-8 rounded-full" />
                      {p.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>

          <hr className="my-8 border-white/10" />

          <div className="flex flex-col gap-8">
            <Block title="Description">{g.desc}</Block>
            <Block title="Purpose">{g.purpose}</Block>
            <Block title="Execution">{g.execution}</Block>
            <Block title="Payment structure">{g.payment}</Block>
            <Block title="Useful links">
              <ul className="flex flex-col gap-3">
                {g.links.map((l, i) => (
                  <li key={i}>
                    <ExtLink href={`https://${l}`} className="text-brand transition-colors hover:text-brand-hover">
                      {l}
                    </ExtLink>
                  </li>
                ))}
              </ul>
            </Block>
            <section>
              <h2 className="text-sm font-bold">Funding transactions</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {g.transactions.map((t, i) => (
                  <li key={i} className="card relative p-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-sm font-bold">{t.title}</h3>
                      <a href="#" className="mono flex items-center gap-2 text-xs text-white transition-colors hover:text-brand" aria-label="Open transaction">
                        {t.amount}
                        <External size={16} className="text-muted" />
                      </a>
                    </div>
                    <p className="mono mt-2 text-xs text-dim">{t.date}</p>
                    <p className="mt-3 text-xs">{t.desc}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>

      <section className="mt-24 md:mt-32">
        <SectionHeading title="More grants like this" link={<TextLink to={routes.grants} className="text-sm">View all similar projects</TextLink>} />
        <div className="container-narrow mt-12 grid gap-6 md:grid-cols-2">
          {more.map((m) => (
            <ProjectCard key={m.id} grant={m} lines={3} className="min-h-[280px] md:min-h-[560px]" />
          ))}
        </div>
      </section>

      <Cta className="mt-24 md:hidden" />
    </>
  )
}
