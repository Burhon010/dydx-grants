import { useParams } from 'react-router-dom'
import { BackButton, SectionHeading } from '../components/ui'
import { Github, LinkedIn, LinkIcon, Twitter } from '../components/Icons'
import GrantCard from '../components/GrantCard'
import Cta from '../components/Cta'
import { grants } from '../data/grants'
import { avatarSrc, personById } from '../data/people'
import NotFound from './NotFound'

const linkMeta = {
  twitter: ['Twitter', Twitter],
  linkedin: ['LinkedIn', LinkedIn],
  github: ['Github', Github],
  website: ['Website', LinkIcon],
}

export default function Grantee() {
  const { id } = useParams()
  const p = personById(id)
  if (!p) return <NotFound />
  const projects = grants.filter((g) => g.people.includes(p.id)).slice(0, 2)

  return (
    <>
      <div className="container-wide relative pt-4 md:pt-8">
        <BackButton className="mb-4 xl:absolute xl:left-[calc(50%-492px)] xl:top-12 xl:mb-0" />
        <div className="mx-auto max-w-[808px]">
          <img src={avatarSrc(p.avatar)} alt="" className="mx-auto size-[110px] rounded-full md:size-[110px] lg:size-[110px]" style={{ width: 'clamp(110px, 14vw, 110px)' }} />
          <h1 className="mt-6 text-center text-[40px] font-bold leading-tight tracking-tight md:text-5xl">{p.name}</h1>

          <section className="mt-10">
            <h2 className="text-sm font-bold">About</h2>
            <p className="mt-3 text-[13px] leading-5 text-white/90">{p.bio}</p>
          </section>

          <section className="mt-8">
            <h2 className="text-sm font-bold">Links</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {Object.entries(p.links).map(([k, href]) => {
                const [label, Icon] = linkMeta[k]
                return (
                  <li key={k}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 items-center gap-3 rounded-full bg-surface px-5 text-xs font-medium transition-colors hover:bg-brand"
                    >
                      <Icon size={18} />
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      </div>

      <section className="mt-20 md:mt-28">
        <SectionHeading title="Projects" />
        <div className="container-narrow mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((g) => (
            <GrantCard key={g.id} grant={g} lines={4} className="min-h-[280px] md:min-h-[560px]" />
          ))}
        </div>
      </section>
      <Cta className="mt-24 md:hidden" />
    </>
  )
}
