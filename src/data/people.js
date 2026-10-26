export const people = [
  { id: 'jane-cooper', name: 'Jane Cooper', avatar: 9, bio: 'For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete’s performance will generally be better at high altitude.', links: { twitter: '#', linkedin: '#', github: '#', website: '#' } },
  { id: 'theresa-webb', name: 'Theresa Webb', avatar: 8, bio: 'Product designer and community builder focused on education content for new traders. Previously ran onboarding programs for several DeFi protocols.', links: { twitter: '#', github: '#', website: '#' } },
  { id: 'jenny-wilson', name: 'Jenny Wilson', avatar: 6, bio: 'Full-stack engineer working on open-source trading tooling and analytics dashboards across perpetual markets.', links: { twitter: '#', linkedin: '#', github: '#' } },
  { id: 'cody-fisher', name: 'Cody Fisher', avatar: 2, bio: 'Quantitative researcher writing about funding rates, liquidations and market microstructure.', links: { twitter: '#', website: '#' } },
  { id: 'esther-howard', name: 'Esther Howard', avatar: 5, bio: 'Developer advocate. Builds SDKs, bots and examples that help the community ship faster on dYdX.', links: { twitter: '#', github: '#', website: '#' } },
  { id: 'leslie-alexander', name: 'Leslie Alexander', avatar: 3, bio: 'Community lead running events, newsletters and regional content programs.', links: { twitter: '#', linkedin: '#' } },
  { id: 'guy-hawkins', name: 'Guy Hawkins', avatar: 7, bio: 'Governance contributor and delegate. Maintains dashboards that track proposals and voting.', links: { twitter: '#', github: '#' } },
  { id: 'robert-fox', name: 'Robert Fox', avatar: 10, bio: 'Smart contract engineer and subgraph maintainer.', links: { github: '#', website: '#' } },
  { id: 'kristin-watson', name: 'Kristin Watson', avatar: 4, bio: 'Technical writer and translator producing educational material in multiple languages.', links: { twitter: '#', website: '#' } },
  { id: 'darlene-robertson', name: 'Darlene Robertson', avatar: 1, bio: 'Open-source maintainer of the Rust ecosystem tooling for dYdX.', links: { github: '#', twitter: '#' } },
]

export const personById = (id) => people.find((p) => p.id === id)
export const avatarSrc = (n) => `/img/av${n}.png`
