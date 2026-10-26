export const grantCategories = [
  'All',
  'Technical / Tool Development',
  'Governance',
  'Growth / Marketing',
  'Analytics',
  'Third Party Provider',
]

export const grants = [
  { id: 'hedgie-banner', title: 'Hedgie banner', category: 'Growth / Marketing', amount: '$5,000 - $6,000', completed: false, people: ['jane-cooper'], desc: 'They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.' },
  { id: 'hedgie-educational-content', title: 'Hedgie educational content', category: 'Growth / Marketing', amount: '$5,000 - $6,000', completed: true, people: ['theresa-webb', 'cody-fisher'], desc: 'They are mathematically consistent in the sense that no one rule would ever violate another.' },
  { id: 'hedgie-educational-content-2', title: 'Hedgie educational content', category: 'Growth / Marketing', amount: '$5,000 - $6,000', completed: false, placeholder: true, extra: 3, people: ['leslie-alexander', 'guy-hawkins', 'esther-howard'], desc: 'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then used it to describe the behavior of matter on a small scale and more.' },
  { id: 'japanese-content-website', title: 'Japanese content website', category: 'Growth / Marketing', amount: '$5,000 - $6,000', completed: true, placeholder: true, extra: 1, people: ['kristin-watson', 'robert-fox', 'jenny-wilson'], desc: 'Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a wave. So it really behaves like neither. Now we have given up.' },
  { id: 'dgp-referral-program', title: 'DGP referral program', category: 'Governance', amount: '$5,000 - $6,000', completed: false, people: ['darlene-robertson', 'cody-fisher', 'esther-howard'], desc: 'They finally obtained a consistent description of the behavior of matter on a small scale.' },
  { id: 'ethglobal-event-sponsorship', title: 'ETHGlobal event sponsorship', category: 'Growth / Marketing', amount: '$5,000 - $6,000', completed: true, placeholder: true, people: ['jenny-wilson'], desc: 'Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to, and it appears peculiar and mysterious to everyone, both to the novice and to the experienced physicist.' },
  { id: 'rust-sdk', title: 'Rust SDK', category: 'Technical / Tool Development', amount: '$5,000 - $6,000', completed: false, people: ['darlene-robertson', 'leslie-alexander', 'esther-howard'], desc: 'At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this' },
  { id: 'hack-for-inclusion', title: 'Hack for Inclusion Sponsorship', category: 'Growth / Marketing', amount: '$5,000 - $6,000', completed: true, people: ['esther-howard', 'cody-fisher'], desc: 'Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle.' },
  { id: 'gitcoin-grants-round-13', title: 'Gitcoin Grants Round 13 sponsorship', category: 'Third Party Provider', amount: '$5,000 - $6,000', completed: false, people: ['guy-hawkins'], desc: 'So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.' },
  {
    id: 'youtube-dydx-education-library',
    title: 'Youtube dYdX Education Library',
    category: 'Growth / Marketing',
    amount: '$5,000',
    completed: true,
    cover: '/img/cover-grant.jpg',
    link: 'www.granttitleproject.com',
    people: ['theresa-webb', 'jenny-wilson'],
    desc: 'Grant includes work on Funding Rates page, Rewards & Tracking Simulator, and CLI Trading tool. All will be combined in a community accessible webpage that will continue to host additional work done and maintenance on behalf of Chaos Labs.',
    purpose: 'Funding Rates page will help promote and guide traders around Perpetual premiums found across all assets traded on dYdX. Rewards & Tracking simulator will help market the benefits of trading on dYdX and assist current traders in mapping out their rewards. The CLI trading tool will make it easier for non-UI based traders to execute quickly on dYdX. The general purpose of this grant is to recruit Chaos Labs, a very qualified contributor, to work with dYdX on current and future projects.',
    execution: '3 months to completion. Each individual grant is estimated to take 120 days, but will be worked on concurrently.',
    payment: '25% upfront / 75% at completion of all Grants',
    links: ['www.granttitleproject.com', 'www.granttitleproject.com', 'www.granttitleproject.com'],
    transactions: [
      { title: 'Round 9', amount: '$250,000.00', date: 'Date', desc: 'Description' },
      { title: 'Funding title', amount: '$30,000.00', date: 'Date', desc: 'Description' },
    ],
  },
  { id: 'trading-strategy-risk-tool', title: 'Trading Strategy and Risk Tool', category: 'Technical / Tool Development', amount: '$5,000 - $6,000', completed: true, people: ['cody-fisher', 'robert-fox'], desc: 'They were used to create the machines that launched two waves of industrial revolution — the first one powered by steam and the second one by electricity and combustion engines.' },
  { id: 'dydx-vote-subgraph', title: 'dydx.vote + Subgraph', category: 'Governance', amount: '$5,000 - $6,000', completed: true, people: ['robert-fox'], desc: 'We know how large objects will act, but things on a small scale just do not act that way.' },
  { id: 'analytics-dashboard-llama', title: 'Analytics Dashboard (Llama Partnership)', category: 'Analytics', amount: '$5,000 - $6,000', completed: false, extra: 1, people: ['guy-hawkins', 'cody-fisher', 'jenny-wilson'], desc: 'Partnering with Llama to develop an Analytics Dashboard that will help digest and promote all dYdX activity.' },
  { id: 'japanese-website-newsletter', title: 'Japanese Website with Educational and Newsletter Content', category: 'Growth / Marketing', amount: '$5,000 - $6,000', completed: false, people: ['kristin-watson', 'leslie-alexander', 'esther-howard'], desc: 'A Japanese dYdX content website to include the production of educational content, weekly newsletters and hiring more writers.' },
  { id: 'educational-content-hedgies', title: 'Educational Content using Hedgies', category: 'Growth / Marketing', amount: '$5,000 - $6,000', completed: true, people: ['theresa-webb', 'jenny-wilson'], desc: 'Description' },
]


export const homeGrants = [
  { id: 'funding-rates-page', title: 'Funding rates page', category: 'Crowdfund', amount: '$5,000 - $6,000', people: ['jenny-wilson', 'leslie-alexander'], desc: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.' },
  { id: 'tradingview-integration', title: 'Tradingview integration', category: 'Edition', amount: '$5,000 - $6,000', placeholder: true, people: ['kristin-watson', 'esther-howard', 'robert-fox'], desc: 'The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different strategies with the community.' },
  { id: 'rewards-optimization-research', title: 'Rewards optimization research and paper', category: 'Entry', amount: '$5,000 - $6,000', people: ['cody-fisher', 'darlene-robertson', 'jane-cooper'], desc: 'The grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership.' },
  { id: 'dao-governance-research', title: 'DAO Governance Research', category: 'Entry', amount: '$5,000 - $6,000', people: ['guy-hawkins'], desc: 'The grant will fund research of DAO strategies and best practices for community governance and proposal development.' },
]

export const grantById = (id) => grants.find((g) => g.id === id) ?? homeGrants.find((g) => g.id === id)
