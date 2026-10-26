export const postTabs = ['Latest', 'Funding round', 'Spotlight', 'News & updates']

const base = { date: 'January 1, 2022', grants: ['rust-sdk', 'dgp-referral-program'] }

export const posts = [
  { ...base, id: 'round-9-of-approvals', title: 'Round 9 of approvals', cover: 'Round 9\nof approvals', category: 'Funding round', grants: ['analytics-dashboard-llama', 'japanese-website-newsletter', 'hack-for-inclusion', 'educational-content-hedgies'], withImage: true },
  { ...base, id: 'round-8-of-approvals', title: 'Round 8 of approvals', cover: 'Round 8\nof approvals', category: 'Funding round', withImage: false },
  { ...base, id: 'round-7-of-approved-grants', title: 'Round 7 of approved grants', cover: 'Round 7\nof approvals', category: 'Funding round', withImage: true },
  { ...base, id: 'round-6-of-approved-grants', title: 'Round 6 of approved grants', cover: 'Round 6\nof approvals', category: 'Funding round', withImage: true },
  { ...base, id: 'fifth-round-of-approvals', title: 'Fifth round of approvals', cover: 'Round 5\nof approvals', category: 'Funding round', withImage: true },
  { ...base, id: 'third-round-of-approvals', title: 'Third round of approvals', cover: 'Round 4\nof approvals', category: 'Funding round', withImage: true },
  { ...base, id: 'grantee-spotlight-hedgie', title: 'Grantee spotlight: Hedgie content', cover: 'Grantee\nspotlight', category: 'Spotlight', date: 'December 12, 2021', withImage: true },
  { ...base, id: 'committee-revamp', title: 'Committee revamp is almost done', cover: 'Committee\nrevamp', category: 'News & updates', date: 'December 3, 2021', withImage: true },
  { ...base, id: 'two-new-rfps', title: 'Two new RFPs are open', cover: 'New RFPs\nare open', category: 'News & updates', date: 'November 21, 2021', withImage: true },
  { ...base, id: 'spotlight-rust-sdk', title: 'Spotlight: the Rust SDK', cover: 'Rust SDK\nspotlight', category: 'Spotlight', date: 'November 9, 2021', withImage: true },
  { ...base, id: 'second-round-of-approvals', title: 'Second round of approvals', cover: 'Round 2\nof approvals', category: 'Funding round', date: 'October 28, 2021', withImage: true },
  { ...base, id: 'first-round-of-approvals', title: 'First round of approvals', cover: 'Round 1\nof approvals', category: 'Funding round', date: 'October 1, 2021', withImage: true },
]

export const postById = (id) => posts.find((p) => p.id === id)
