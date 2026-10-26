import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from './Icons'

export function BackButton({ className = '' }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
      aria-label="Go back"
      className={`flex size-10 cursor-pointer items-center justify-center rounded-full bg-surface text-white transition-colors hover:bg-brand ${className}`}
    >
      <ArrowLeft size={18} />
    </button>
  )
}
