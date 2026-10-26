export function PageTitle({ title, children, className = '' }) {
  return (
    <header className={`container-wide pt-12 text-center md:pt-20 ${className}`}>
      <h1 className="text-[40px] font-bold leading-[1.1] tracking-tight md:text-[56px]">{title}</h1>
      {children && <p className="mx-auto mt-6 max-w-[620px] text-sm leading-6 text-white/80 md:text-[15px]">{children}</p>}
    </header>
  )
}
