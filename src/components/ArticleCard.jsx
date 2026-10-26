import { Link } from 'react-router-dom'

export function CoverArt({ text, label = 'Funding round', large = false, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-bg ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: large ? '36px 36px' : '24px 24px',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex w-[68%] items-center justify-center py-[9%]">
          <svg className="absolute inset-0 size-full" viewBox="0 0 280 150" preserveAspectRatio="none" fill="none" aria-hidden>
            <ellipse cx="140" cy="75" rx="136" ry="72" stroke="#6966FF" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="relative -ml-[2%] flex flex-col items-start">
            <span className="mono text-[8px] text-muted md:text-[9px]" style={large ? { fontSize: 14 } : undefined}>
              {label}
            </span>
            <span
              className="whitespace-pre-line font-bold leading-[1.12] tracking-tight"
              style={{ fontSize: large ? 'clamp(28px, 6vw, 52px)' : 'clamp(18px, 2.4vw, 24px)' }}
            >
              {text}
            </span>
          </div>
        </div>
      </div>
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] border-[3px] border-brand" />
      <span className="absolute bottom-0 right-0 size-6 bg-bg">
        <span className="absolute bottom-0 right-0 size-6 bg-[linear-gradient(135deg,#6966ff_50%,#24243a_50%)]" />
      </span>
    </div>
  )
}

export default function ArticleCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="card group flex h-full flex-col overflow-hidden">
      <CoverArt text={post.cover} label={post.category} className="aspect-[2/1] w-full rounded-2xl" />
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <span className="mono text-sm text-dim">{post.category}</span>
        <h3 className="mt-3 text-lg font-bold leading-snug">{post.title}</h3>
        <span className="mono mt-auto pt-10 text-[13px] text-dim">{post.date}</span>
      </div>
    </Link>
  )
}
