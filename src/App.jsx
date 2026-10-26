import { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rfps from './pages/Rfps'
import Grants from './pages/Grants'
import GrantDetail from './pages/GrantDetail'
import Grantee from './pages/Grantee'
import Expenses from './pages/Expenses'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Brand from './pages/Brand'
import Apply from './pages/Apply'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rfps" element={<Rfps />} />
          <Route path="grants" element={<Grants />} />
          <Route path="grants/:id" element={<GrantDetail />} />
          <Route path="grantees/:id" element={<Grantee />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="brand-assets" element={<Brand />} />
          <Route path="apply" element={<Apply />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
