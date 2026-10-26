import { useParams } from 'react-router-dom'
import { grantById } from '@/entities/grant'
import { CoverArt, postById } from '@/entities/post'
import { BackButton, SectionHeading } from '@/shared/ui'
import { Cta } from '@/widgets/cta'
import { NotFound } from '@/widgets/not-found'
import { ProjectCard } from '@/widgets/project-card'

export function PostPage() {
  const { id } = useParams()
  const post = postById(id)
  if (!post) return <NotFound />
  const related = post.grants.map(grantById).filter(Boolean).slice(0, 4)

  return (
    <>
      <div className="container-wide relative pt-4 md:pt-8">
        <BackButton className="mb-6 xl:absolute xl:left-[calc(50%-492px)] xl:top-10 xl:mb-0" />
        <article className="mx-auto max-w-[808px]">
          <header className="text-center">
            <span className="mono text-xs text-dim">{post.category}</span>
            <h1 className="mt-2 text-[34px] font-bold leading-[1.1] tracking-tight md:text-[44px]">{post.title}</h1>
            <p className="mt-8 text-xs font-bold">By:</p>
            <span className="mt-3 inline-flex h-9 items-center gap-2 rounded-full bg-surface py-1 pl-1.5 pr-4 text-xs font-medium">
              <img src="/img/x-icon.png" alt="" className="size-6 rounded-full" />
              dYdX Grants Team
            </span>
          </header>

          {post.withImage && (
            <figure className="mt-12">
              <CoverArt
                text={post.cover}
                label={post.category}
                large
                className="aspect-[2.5/1] w-full rounded-2xl border border-white/10"
              />
              <figcaption className="mt-3 text-center text-[11px] text-muted">This is an image caption</figcaption>
            </figure>
          )}

          <div className={`${post.withImage ? 'mt-8' : 'mt-12'} text-[13px] leading-5 text-white/90 [&_p]:mb-5`}>
            <p>Hi Everyone!</p>
            <p>
              Excited to share another round of funding approved by the Committee! For Round 6, we have 5 grantees with a total of $246,000.00 in DYDX funding. Check out the table below for more information on each grant.
            </p>
            <p>
              We’re also happy to share that the Committee revamp is close to getting finalized. This revamp will enable payments to be complete by the Grants multisig. The team is working on the final documentation and will share everything with the community as soon as they’re ready. We’re excited to finally start paying our Grantees to really get things going!
            </p>
            <h2 className="mb-4 mt-8 text-2xl font-bold leading-tight text-white">Centralization lets you make decisions quickly</h2>
            <p>
              We’re also happy to share that the Committee revamp is close to getting finalized. This revamp will enable payments to be complete by the Grants multisig. The team is working on the final documentation and will share everything with the community as soon as they’re ready. We’re excited to finally start paying our Grantees to really get things going!
            </p>
            <h3 className="mb-4 mt-8 text-sm font-bold text-white">Centralization lets you make decisions quickly</h3>
            <p>
              We’re also happy to share that the Committee revamp is close to getting finalized. This revamp will enable payments to be complete by the Grants multisig. The team is working on the final documentation and will share everything with the community as soon as they’re ready. We’re excited to finally start paying our Grantees to really get things going!
            </p>
            <p>
              We’re also happy to share that the Committee revamp is close to getting finalized. This revamp will enable payments to be complete by the Grants multisig. See the <a href="#" className="text-brand underline underline-offset-2 hover:text-brand-hover">full proposal</a> for details.
            </p>
            <blockquote className="my-8 rounded-lg bg-surface-dark p-4 text-xs leading-[18px]">
              The more realistic an experience we provide, the more real feedback we can get. With a more static mockup, or broad-line prototype, or a rich prototype with placeholder data, you tend to get more hypothetical feedback.
              <br />—Creighton Abrams
            </blockquote>
            <p>Hope everyone has a great week!</p>
          </div>
        </article>
      </div>

      {!!related.length && (
        <section className="mt-12 md:mt-16">
          <SectionHeading title="Funded grants" />
          <div className="container-narrow mt-10 grid gap-6 md:grid-cols-2">
            {related.map((g) => (
              <ProjectCard key={g.id} grant={g} lines={4} className="min-h-[280px] md:min-h-[560px]" />
            ))}
          </div>
        </section>
      )}
      <Cta className="mt-24 md:hidden" />
    </>
  )
}
