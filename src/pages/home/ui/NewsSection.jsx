import { ArticleCard, posts } from '@/entities/post'
import { routes } from '@/shared/config'
import { SectionHeading, Sparks, TextLink } from '@/shared/ui'

export function NewsSection() {
  return (
    <section className="mt-24 md:mt-32">
      <SectionHeading
        title="What’s new?"
        decoration={<Sparks className="absolute -right-12 -top-5 h-10 w-14 md:-right-14" />}
        link={<TextLink to={routes.blog}>Read more on our blog</TextLink>}
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
