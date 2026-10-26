import { BrowserRouter } from 'react-router-dom'
import { ScrollManager } from './providers/ScrollManager'
import { AppRouter } from './router/AppRouter'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <AppRouter />
    </BrowserRouter>
  )
}
