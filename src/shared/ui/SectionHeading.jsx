export function SectionHeading({ title, children, link, decoration, className = '' }) {
  return (
    <div className={`mx-auto max-w-[640px] px-6 text-center ${className}`}>
      <h2 className="relative inline-block text-[32px] font-bold leading-tight tracking-tight md:text-[40px]">
        {title}
        {decoration}
      </h2>
      {children && <p className="mt-6 text-base leading-6 text-muted md:text-[17px]">{children}</p>}
      {link && <div className="mt-6">{link}</div>}
    </div>
  )
}
