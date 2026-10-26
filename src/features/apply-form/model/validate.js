const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const emptyApplication = { name: '', email: '', about: '', links: '' }

export function validateApplication(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name'
  if (!v.email.trim()) e.email = 'Please enter your email'
  else if (!emailRe.test(v.email.trim())) e.email = 'Please enter a valid email address'
  if (!v.about.trim()) e.about = 'Please tell us about yourself'
  return e
}
