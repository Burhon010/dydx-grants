const stroke = { fill: 'none', stroke: '#6966FF', strokeLinecap: 'round', strokeLinejoin: 'round' }

export const Underline = ({ className = '', wavy }) => (
  <svg className={className} viewBox="0 0 280 24" preserveAspectRatio="none" aria-hidden {...stroke} strokeWidth="3">
    {wavy ? (
      <path d="M4 14c14-9 26-9 40-4s24 2 38-3 30-4 46 0 32 5 52 1 38-5 58-3 30 4 38 3" />
    ) : (
      <path d="M4 18c60-9 150-12 270-12" />
    )}
  </svg>
)

export const Ellipse = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 280 160" preserveAspectRatio="none" aria-hidden {...stroke} strokeWidth="2.5">
    <path d="M30 40C55 12 130 4 200 12c60 7 82 36 74 72-8 38-70 66-150 64C54 146 6 118 8 86 9 62 22 50 40 40" />
  </svg>
)

export const DownArrow = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 72" aria-hidden {...stroke} strokeWidth="2.5">
    <path d="M13 3c-4 16-5 34-1 62M3 52c4 6 7 11 9 15 3-5 7-10 11-14" />
  </svg>
)

export const Sparks = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 56 40" aria-hidden {...stroke} strokeWidth="3">
    <path d="M18 3v8M34 2l-5 9M47 26l-10-2" />
  </svg>
)

export const CurveArrow = ({ className = '', down }) => (
  <svg className={className} viewBox="0 0 120 60" aria-hidden {...stroke} strokeWidth="3">
    {down ? (
      <path d="M4 4C6 34 44 48 108 24M92 22l17 1-8 15" />
    ) : (
      <path d="M4 56C10 24 52 6 108 22M92 10l17 12-19 9" />
    )}
  </svg>
)

export const Scribble = ({ className = '', d }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke} strokeWidth="2">
    <path d={d} />
  </svg>
)
