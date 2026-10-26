import { Badge } from '@/shared/ui'

const tones = { Open: 'brand', Funded: 'dark', Completed: 'ok' }

export function RfpItem({ rfp }) {
  return (
    <li className="card reveal relative p-5 md:pr-28">
      <Badge tone={tones[rfp.status]} check={rfp.status === 'Completed'} className="absolute right-5 top-5">
        {rfp.status}
      </Badge>
      <h2 className="pr-24 text-base font-bold md:pr-0">{rfp.title}</h2>
      <p className="mt-2 max-w-[360px] text-[13px] leading-5 md:max-w-[430px]">{rfp.desc}</p>
      <p className="mono mt-2 text-xs text-dim">Funding amount: {rfp.amount}</p>
    </li>
  )
}
