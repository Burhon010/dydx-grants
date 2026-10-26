import { useState } from 'react'
import { grantCategories } from '@/entities/grant'

export function useGrantFilters(grants) {
  const [tab, setTab] = useState(0)
  const [completedOnly, setCompletedOnly] = useState(false)

  const list = grants.filter(
    (g) => (tab === 0 || g.category === grantCategories[tab]) && (!completedOnly || g.completed),
  )

  return { tab, setTab, completedOnly, setCompletedOnly, list }
}
