import { grants } from '@/entities/grant'
import { GrantFilters, useGrantFilters } from '@/features/grant-filters'
import { PageTitle } from '@/shared/ui'
import { Cta } from '@/widgets/cta'
import { ProjectCard } from '@/widgets/project-card'

export function GrantsPage() {
  const { tab, setTab, completedOnly, setCompletedOnly, list } = useGrantFilters(grants)

  return (
    <>
      <PageTitle title="Funded grants" />
      <GrantFilters tab={tab} onTabChange={setTab} completedOnly={completedOnly} onCompletedChange={setCompletedOnly} />

      <div className="container-wide mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3" key={`${tab}-${completedOnly}`}>
        {list.map((g) => (
          <div key={g.id} className="reveal">
            <ProjectCard grant={g} />
          </div>
        ))}
        {!list.length && <p className="col-span-full py-16 text-center text-muted">No grants match these filters.</p>}
      </div>

      <Cta className="mt-24 md:mt-32" />
    </>
  )
}
