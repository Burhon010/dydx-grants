import { Link } from 'react-router-dom'
import { routes } from '@/shared/config'
import { CoverArt } from './CoverArt'

export function ArticleCard({ post }) {
  return (
    <Link to={routes.post(post.id)} className="card group flex h-full flex-col overflow-hidden">
      <CoverArt text={post.cover} label={post.category} className="aspect-[2/1] w-full rounded-2xl" />
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <span className="mono text-sm text-dim">{post.category}</span>
        <h3 className="mt-3 text-lg font-bold leading-snug">{post.title}</h3>
        <span className="mono mt-auto pt-10 text-[13px] text-dim">{post.date}</span>
      </div>
    </Link>
  )
}
