import { grantCategories } from '@/entities/grant'
import { Tabs, Toggle } from '@/shared/ui'

export function GrantFilters({ tab, onTabChange, completedOnly, onCompletedChange }) {
  return (
    <>
      <Tabs tabs={grantCategories} value={tab} onChange={onTabChange} align="left" className="mt-8 md:mt-10" />
      <div className="container-wide mt-4 flex justify-center md:justify-start">
        <Toggle checked={completedOnly} onChange={onCompletedChange}>
          Show only completed
        </Toggle>
      </div>
    </>
  )
}
