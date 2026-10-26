export const routes = {
  home: '/',
  rfps: '/rfps',
  grants: '/grants',
  grant: (id = ':id') => `/grants/${id}`,
  grantee: (id = ':id') => `/grantees/${id}`,
  expenses: '/expenses',
  blog: '/blog',
  post: (id = ':id') => `/blog/${id}`,
  brandAssets: '/brand-assets',
  apply: '/apply',
  faq: '/faq',
}

export const navItems = [
  { to: routes.rfps, label: 'Discover initiatives' },
  { to: routes.grants, label: 'Funded grants' },
  { to: routes.expenses, label: 'Program expenses' },
  { to: routes.blog, label: 'Blog' },
  { to: routes.faq, label: 'FAQ' },
]
