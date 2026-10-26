import { Route, Routes } from 'react-router-dom'
import { ApplyPage } from '@/pages/apply'
import { BlogPage } from '@/pages/blog'
import { BrandPage } from '@/pages/brand'
import { ExpensesPage } from '@/pages/expenses'
import { FaqPage } from '@/pages/faq'
import { GrantDetailPage } from '@/pages/grant-detail'
import { GranteePage } from '@/pages/grantee'
import { GrantsPage } from '@/pages/grants'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { PostPage } from '@/pages/post'
import { RfpsPage } from '@/pages/rfps'
import { routes } from '@/shared/config'
import { MainLayout } from '../layouts/MainLayout'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.rfps} element={<RfpsPage />} />
        <Route path={routes.grants} element={<GrantsPage />} />
        <Route path={routes.grant()} element={<GrantDetailPage />} />
        <Route path={routes.grantee()} element={<GranteePage />} />
        <Route path={routes.expenses} element={<ExpensesPage />} />
        <Route path={routes.blog} element={<BlogPage />} />
        <Route path={routes.post()} element={<PostPage />} />
        <Route path={routes.brandAssets} element={<BrandPage />} />
        <Route path={routes.apply} element={<ApplyPage />} />
        <Route path={routes.faq} element={<FaqPage />} />
        <Route path={routes.notFound} element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
