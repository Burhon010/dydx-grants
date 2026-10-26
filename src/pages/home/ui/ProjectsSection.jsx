import { homeGrants } from '@/entities/grant'
import { routes } from '@/shared/config'
import { Carousel, SectionHeading, TextLink } from '@/shared/ui'
import { ProjectCard } from '@/widgets/project-card'

export function ProjectsSection() {
  return (
    <section className="mt-16 md:mt-24">
      <SectionHeading title="Projects built with grants" link={<TextLink to={routes.grants}>View all funded projects</TextLink>}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </SectionHeading>

      <div className="mt-12 md:mt-16">
        <Carousel label="Next projects" itemClassName="w-[calc(100vw-48px)] max-w-[390px] sm:w-[390px]">
          {homeGrants.map((g, i) => (
            <ProjectCard key={g.id} grant={g} lines={i === 1 ? 6 : 7} className="min-h-[560px]" />
          ))}
        </Carousel>
      </div>
    </section>
  )
}
