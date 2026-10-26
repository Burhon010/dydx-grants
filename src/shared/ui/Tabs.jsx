export function Tabs({ tabs, value, onChange, align = 'center', className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[1224px] ${className}`}>
      <div className="no-scrollbar overflow-x-auto px-6">
        <div role="tablist" className={`flex w-max items-center gap-1 md:gap-2 ${align === 'center' ? 'mx-auto' : ''}`}>
          {tabs.map((t, i) => {
            const active = value === i
            return (
              <button
                key={i}
                role="tab"
                aria-selected={active}
                onClick={() => onChange(i)}
                className={`h-10 shrink-0 cursor-pointer whitespace-nowrap rounded-lg px-4 text-sm font-medium transition-colors ${
                  active ? 'bg-surface text-white' : 'text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                {t}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
