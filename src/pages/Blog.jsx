import { useState } from 'react'
import { Button, PageTitle, Tabs } from '../components/ui'
import ArticleCard from '../components/ArticleCard'
import { postTabs, posts } from '../data/posts'

const PAGE = 6

export default function Blog() {
  const [tab, setTab] = useState(0)
  const [shown, setShown] = useState(PAGE)

  const filtered = tab === 0 ? posts : posts.filter((p) => p.category === postTabs[tab])
  const list = filtered.slice(0, shown)

  return (
    <>
      <PageTitle title="Blog" />
      <Tabs
        tabs={postTabs}
        value={tab}
        onChange={(i) => {
          setTab(i)
          setShown(PAGE)
        }}
        className="mt-8"
      />

      <div className="container-narrow mt-10 grid gap-6 md:mt-14 md:grid-cols-2" key={tab}>
        {list.map((p) => (
          <div key={p.id} className="reveal">
            <ArticleCard post={p} />
          </div>
        ))}
      </div>

      {shown < filtered.length && (
        <div className="mt-10 flex justify-center">
          <Button variant="secondary" size="sm" onClick={() => setShown((n) => n + PAGE)} className="h-10 px-5 text-xs">
            Load more posts
          </Button>
        </div>
      )}
    </>
  )
}
