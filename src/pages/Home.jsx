import { useEffect, useRef, useState } from 'react'
import { Button, SectionHeading, TextLink } from '../components/ui'
import { CurveArrow, DownArrow, Ellipse, Sparks, Underline } from '../components/Doodles'
import GrantCard from '../components/GrantCard'
import ArticleCard from '../components/ArticleCard'
import Accordion from '../components/Accordion'
import Cta from '../components/Cta'
import { ArrowRight } from '../components/Icons'
import { homeGrants } from '../data/grants'
import { posts } from '../data/posts'
import { homeFaq } from '../data/faq'

const stats = [
  ['100+', 'projects funded'],
  ['$3+ milion', 'awarded'],
  ['400+', 'projects funded'],
]

const steps = [
  { n: '1', title: 'Apply', text: 'Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.' },
  { n: '2', title: 'Interview', text: 'If your application is selected, the dYdX Grants will conduct 1-2 interviews to collect more information on the Applicant’s background and the proposal.' },
  { n: '3', title: 'Grant offer', text: 'The dYdX Grants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer;' },
]
const tilt = ['lg:-rotate-[0.6deg]', 'lg:rotate-[2.4deg] lg:translate-y-4', 'lg:-rotate-[2deg]']

function Hero() {
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
        <Button to="/rfps" variant="secondary" className="sm:w-[180px]">Discover RFPs</Button>
        <Button to="/apply" arrow className="sm:w-[200px]">Apply for grant</Button>
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

function Projects() {
  const ref = useRef(null)
  const [atEnd, setAtEnd] = useState(false)

  const update = () => {
    const el = ref.current
    if (el) setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }
  useEffect(update, [])

  const next = () => {
    const el = ref.current
    const card = el.querySelector('[data-card]')
    el.scrollBy({ left: (card?.offsetWidth ?? 360) + 24, behavior: 'smooth' })
  }

  return (
    <section className="mt-16 md:mt-24" aria-labelledby="projects-h">
      <SectionHeading
        title="Projects built with grants"
        link={<TextLink to="/grants">View all funded projects</TextLink>}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </SectionHeading>

      <div className="relative mt-12 md:mt-16">
        <div
          ref={ref}
          onScroll={update}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 lg:px-[max(24px,calc((100vw-1224px)/2))]"
          style={{ scrollPaddingLeft: 'max(24px, calc((100vw - 1224px) / 2))' }}
        >
          {homeGrants.map((g, i) => (
            <div key={g.id} data-card className="w-[calc(100vw-48px)] max-w-[390px] shrink-0 snap-start sm:w-[390px]">
              <GrantCard grant={g} lines={i === 1 ? 6 : 7} className="min-h-[560px]" />
            </div>
          ))}
          <div className="w-2 shrink-0 lg:w-24" aria-hidden />
        </div>
        <button
          onClick={next}
          aria-label="Next projects"
          className={`absolute right-3 top-1/2 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-bg shadow-lg shadow-black/30 transition-all hover:scale-105 lg:flex ${atEnd ? 'pointer-events-none opacity-0' : ''}`}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

function News() {
  return (
    <section className="mt-24 md:mt-32" aria-labelledby="news-h">
      <SectionHeading
        title="What’s new?"
        decoration={<Sparks className="absolute -right-12 -top-5 h-10 w-14 md:-right-14" />}
        link={<TextLink to="/blog">Read more on our blog</TextLink>}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </SectionHeading>
      <div className="container-narrow mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
        {posts.slice(0, 2).map((p) => (
          <ArticleCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="mt-24 md:mt-32">
      <SectionHeading
        title={
          <>
            Frequently asked{' '}
            <span className="relative inline-block">
              questions
              <Ellipse className="pointer-events-none absolute -inset-x-[14%] -inset-y-[22%] h-[145%] w-[128%]" />
            </span>
          </>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </SectionHeading>
      <div className="container-narrow mt-12 md:mt-16">
        <Accordion items={homeFaq} />
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="mt-24 md:mt-32">
      <SectionHeading
        title={
          <span className="relative inline-block">
            Application process
            <Underline wavy className="absolute -bottom-3 right-[8%] h-4 w-[40%]" />
          </span>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </SectionHeading>
      <div className="container-wide relative mt-12 grid gap-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`card relative flex min-h-[320px] flex-col p-8 md:min-h-[360px] lg:min-h-[380px] ${tilt[i]} ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <span className="font-hand text-[44px] font-semibold leading-none">{s.n}</span>
            <h3 className="mt-14 text-2xl font-bold">{s.title}</h3>
            <p className="mt-4 text-[15px] leading-7">{s.text}</p>
            {i < 2 && <CurveArrow down className="pointer-events-none absolute -bottom-12 left-10 z-10 h-10 w-20 rotate-90 md:hidden" />}
          </div>
        ))}
        <CurveArrow className="pointer-events-none absolute left-[27%] top-[8%] hidden h-14 w-28 lg:block" />
        <CurveArrow down className="pointer-events-none absolute left-[58%] top-[75%] hidden h-14 w-28 lg:block" />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <News />
      <Faq />
      <Process />
      <Cta className="mt-24 md:mt-32" />
    </>
  )
}
