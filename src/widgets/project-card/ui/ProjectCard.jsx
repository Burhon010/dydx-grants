import { GrantCard } from '@/entities/grant'
import { AvatarStack } from '@/entities/person'

export function ProjectCard({ grant, ...rest }) {
  return <GrantCard grant={grant} footer={<AvatarStack ids={grant.people} extra={grant.extra} />} {...rest} />
}
