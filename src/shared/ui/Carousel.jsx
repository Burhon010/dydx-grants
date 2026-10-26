import { Children, useEffect, useRef, useState } from 'react'
import { ArrowRight } from './Icons'

export function Carousel({ children, label = 'Next', itemClassName = '' }) {
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
    <div className="relative">
      <div
        ref={ref}
        onScroll={update}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 lg:px-[max(24px,calc((100vw-1224px)/2))]"
        style={{ scrollPaddingLeft: 'max(24px, calc((100vw - 1224px) / 2))' }}
      >
        {Children.map(children, (child) => (
          <div data-card className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
        <div className="w-2 shrink-0 lg:w-24" aria-hidden />
      </div>
      <button
        onClick={next}
        aria-label={label}
        className={`absolute right-3 top-1/2 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-bg shadow-lg shadow-black/30 transition-all hover:scale-105 lg:flex ${atEnd ? 'pointer-events-none opacity-0' : ''}`}
      >
        <ArrowRight size={20} />
      </button>
    </div>
  )
}
