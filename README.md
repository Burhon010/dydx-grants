# dYdX Grants

Multi-page dark-theme site for the dYdX community grants program. React + Vite + Tailwind CSS v4 + React Router.

    npm install
    npm run dev
    npm run build

Routes: `/`, `/rfps`, `/grants`, `/grants/:id`, `/grantees/:id`, `/expenses`, `/blog`, `/blog/:id`, `/brand-assets`, `/apply`, `/faq`.
Content lives in `src/data`. Images are in `public/img`.

## Architecture (Feature-Sliced Design)

    src/
      app/        entry, providers, router, layouts, global styles
      pages/      one slice per route (home, rfps, grants, grant-detail, grantee, expenses, blog, post, brand, apply, faq, not-found)
      widgets/    header, footer, cta, project-card, not-found
      features/   apply-form, grant-filters
      entities/   grant, person, post, rfp, expense, faq (model + ui)
      shared/     ui kit, config (routes, nav)

Each slice exposes a public API through `index.js`; imports go only to lower layers and use the `@/` alias.
