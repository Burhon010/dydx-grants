import { Button } from '../components/ui'

export default function NotFound() {
  return (
    <div className="container-narrow flex flex-col items-center py-32 text-center">
      <p className="mono text-sm text-dim">404</p>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for doesn’t exist or has moved.</p>
      <Button to="/" className="mt-8">Back to home</Button>
    </div>
  )
}
