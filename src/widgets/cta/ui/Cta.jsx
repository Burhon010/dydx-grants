import { Button } from '@/shared/ui'
import { routes } from '@/shared/config'

export function Cta({ className = '' }) {
  return (
    <section className={`container-wide ${className}`}>
      <div className="flex flex-col items-center rounded-2xl bg-[linear-gradient(160deg,#4a48b3_0%,#6966ff_100%)] px-6 py-10 text-center md:py-16">
        <p className="text-sm text-white/90 md:text-base">Have a project in mind?</p>
        <h2 className="mt-3 max-w-[300px] text-[28px] font-bold leading-tight tracking-tight md:max-w-none md:text-[36px]">
          Let’s create something awesome.
        </h2>
        <Button to={routes.apply} variant="white" arrow className="mt-8 h-11 px-5 text-sm">
          Apply for grant
        </Button>
      </div>
    </section>
  )
}
