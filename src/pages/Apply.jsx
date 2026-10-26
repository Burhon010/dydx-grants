import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../components/ui'
import Accordion from '../components/Accordion'
import { Check } from '../components/Icons'
import { selectionCriteria } from '../data/faq'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name'
  if (!v.email.trim()) e.email = 'Please enter your email'
  else if (!emailRe.test(v.email.trim())) e.email = 'Please enter a valid email address'
  if (!v.about.trim()) e.about = 'Please tell us about yourself'
  return e
}

function Field({ id, label, required, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] text-[#2b2b36]">
        {label} {required && <span className="text-[#e5174f]">*</span>}
      </label>
      {hint && <p id={`${id}-hint`} className="mt-1.5 text-[11px] leading-4 text-[#6b6b78]">{hint}</p>}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-xs text-[#e5174f]">
          {error}
        </p>
      )}
    </div>
  )
}

const inputCls = (err) =>
  `block w-full rounded-[3px] border bg-white px-3 py-2 text-sm text-[#1c1c28] outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 ${err ? 'border-[#e5174f]' : 'border-[#d9d9e0]'}`

export default function Apply() {
  const [values, setValues] = useState({ name: '', email: '', about: '', links: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => {
    const next = { ...values, [k]: e.target.value }
    setValues(next)
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: validate(next)[k] }))
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    setSent(true)
    window.scrollTo({ top: document.getElementById('apply-form')?.offsetTop - 120, behavior: 'smooth' })
  }

  return (
    <>
      <PageTitle title="Apply for a grant">Please complete the application below for Grant consideration!</PageTitle>

      <section className="container-narrow mt-14 md:mt-16">
        <h2 className="text-sm font-bold">How are grants selected?</h2>
        <p className="mt-2 max-w-[560px] text-xs leading-5 text-muted">
          When assessing applications, the Grants team follows standard criteria using the questions below to guide our decision making.
        </p>
        <Accordion items={selectionCriteria} className="mt-4" />
      </section>

      <section id="apply-form" className="container-narrow mt-14 md:mt-16">
        <h2 className="text-[28px] font-bold md:text-[32px]">Grant application</h2>

        <div className="mt-5 rounded-lg bg-[#fafafa] px-6 py-8 text-[#1c1c28] md:px-[60px] md:py-10">
          {sent ? (
            <div className="flex flex-col items-center py-10 text-center" role="status">
              <span className="flex size-12 items-center justify-center rounded-full bg-ok text-white">
                <Check size={22} />
              </span>
              <h3 className="mt-5 text-xl font-bold">Application sent</h3>
              <p className="mt-2 max-w-[360px] text-sm leading-6 text-[#4b4b58]">
                Thank you, {values.name.split(' ')[0]}! The Grants team will get back to you at {values.email}. Meanwhile, read our{' '}
                <Link to="/faq" className="text-brand underline underline-offset-2">FAQ</Link>.
              </p>
              <button
                onClick={() => {
                  setValues({ name: '', email: '', about: '', links: '' })
                  setSent(false)
                }}
                className="mt-6 cursor-pointer text-sm text-brand hover:underline"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="flex flex-col gap-8">
              <Field id="f-name" label="Name" required error={errors.name}>
                <input id="f-name" value={values.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'f-name-err' : undefined} className={inputCls(errors.name)} />
              </Field>
              <Field id="f-email" label="Email" required hint="Primary contact if applying as a team/company" error={errors.email}>
                <input id="f-email" type="email" value={values.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={`f-email-hint${errors.email ? ' f-email-err' : ''}`} className={inputCls(errors.email)} />
              </Field>
              <Field id="f-about" label="About You" required hint="Tell us about yourself and/or your team" error={errors.about}>
                <textarea id="f-about" rows={3} value={values.about} onChange={set('about')} aria-invalid={!!errors.about} aria-describedby={`f-about-hint${errors.about ? ' f-about-err' : ''}`} className={`${inputCls(errors.about)} min-h-20 resize-y`} />
              </Field>
              <Field id="f-links" label="Additional Links" hint="If helpful, please share any links about you (e.g. Website, GitHub, Twitter)">
                <textarea id="f-links" rows={3} value={values.links} onChange={set('links')} aria-describedby="f-links-hint" className={`${inputCls(false)} min-h-20 resize-y`} />
              </Field>
              <button
                type="submit"
                className="h-11 w-full cursor-pointer rounded-lg bg-brand px-6 text-sm font-medium text-white transition-colors hover:bg-brand-hover sm:w-auto sm:self-start"
              >
                Submit application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
