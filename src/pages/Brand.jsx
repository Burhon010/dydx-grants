import { PageTitle } from '../components/ui'
import { Download } from '../components/Icons'

const logos = [
  { label: 'Primary Logo', src: '/img/logo.png', light: false },
  { label: 'Inverted Primary Logo', src: '/img/logo-inverted.png', light: true },
  { label: 'Monotone Logo Dark', src: '/img/logo-white.png', light: false },
  { label: 'Monotone Logo Light', src: '/img/logo-black.png', light: true },
]
const avatars = [
  { label: 'Primary', src: '/img/avatar-primary.png', light: true },
  { label: 'Monotone Dark', src: '/img/avatar-mono-dark.png', light: true },
  { label: 'Monotone Light', src: '/img/avatar-mono-light.png', light: false },
]

function Tile({ item, className = '', imgClass }) {
  const file = `dydx-grants-${item.label.toLowerCase().replace(/\s+/g, '-')}.png`
  return (
    <figure>
      <div className={`relative flex items-center justify-center rounded-lg border border-white/5 ${item.light ? 'bg-white' : 'bg-[#22222f]'} ${className}`}>
        <img src={item.src} alt={item.label} className={imgClass} />
        <a
          href={item.src}
          download={file}
          aria-label={`Download ${item.label}`}
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-surface text-white transition-colors hover:bg-brand"
        >
          <Download size={18} />
        </a>
      </div>
      <figcaption className="mt-3 text-xs text-white/90">{item.label}</figcaption>
    </figure>
  )
}

export default function Brand() {
  return (
    <>
      <PageTitle title="Brand assets">If you are looking to use the dYdX Grants brand, please use the below logos.</PageTitle>

      <section className="container-narrow mt-16 md:mt-20">
        <h2 className="text-center text-[28px] font-bold md:text-4xl">Logo</h2>
        <div className="mt-10 grid gap-x-3 gap-y-6 sm:grid-cols-2">
          {logos.map((l) => (
            <Tile key={l.label} item={l} className="aspect-[196/125]" imgClass="h-auto w-[36%]" />
          ))}
        </div>
      </section>

      <section className="container-narrow mt-16 md:mt-20">
        <h2 className="text-center text-[28px] font-bold md:text-4xl">Avatar</h2>
        <div className="mt-10 grid gap-x-3 gap-y-6 sm:grid-cols-3">
          {avatars.map((a) => (
            <Tile key={a.label} item={a} className="aspect-[126/90]" imgClass="aspect-square h-auto w-[44%] rounded-full object-cover" />
          ))}
        </div>
      </section>

      <section className="container-narrow mt-16 md:mt-20">
        <h2 className="text-sm font-bold">Guidelines</h2>
        <p className="mt-3 text-xs leading-5 text-white/90">
          You may include the dYdX Grants logo in your website if you received a grant. We want our logo to be instantly recognizable, so consistency is important—please don’t edit, change, distort, recolor, or reconfigure it. Please don’t use our name as a part of your company or service name, website name, trade name, or product name. You’re allowed to say you received a grant from dYdX Grants.
        </p>
      </section>
    </>
  )
}
