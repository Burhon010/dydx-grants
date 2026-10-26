export function Toggle({ checked, onChange, children }) {
  return (
    <label className="inline-flex cursor-pointer select-none items-center gap-3 text-sm text-muted">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-5 w-9 rounded-full transition-colors ${checked ? 'bg-brand' : 'bg-surface'}`}
      >
        <span className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${checked ? 'translate-x-4' : ''}`} />
      </button>
      {children}
    </label>
  )
}
