const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero. Sed vitae tellus a nisl mollis fermentum, vitae viverra libero porttitor.'

const make = (rows) => rows.map(([q, a]) => ({ q, a }))

export const homeFaq = make([
  ['How do I apply?', 'Submit the application form on the Apply page with as many details as possible about your idea and your background. The Grants team reviews applications on a rolling basis.'],
  ['Can I apply as a U.S. based person/company?', lorem],
  ['How will I be compensated?', 'Grants are paid in DYDX or USDC. A vesting schedule and timeline for product development reports will be determined in the grant offer.'],
  ['What type of project will qualify for a Grant?', 'Any project that helps grow the dYdX ecosystem: tooling, education, analytics, governance, and community initiatives. Check the open RFPs for ideas.'],
  ['What is the application timeline? When can I expect to hear back?', lorem],
  ['How can I increase my chances of getting funded?', lorem],
  ['How often do you approve new Rounds of funding?', lorem],
])

const trust = make([
  ['What is the dYdX Grants Trust?', 'The dYdX Grants Trust is the legal entity that holds the program funds and pays out approved grants to recipients.'],
  ['Where are funds held?', 'Funds are held in a multisig controlled by the Trustees of the Grants Trust.'],
  ['When was the program launched?', 'The program launched in 2021 following a community governance vote.'],
  ['Who are the Trustees?', lorem],
  ['What and who is the Enforcer?', lorem],
])

export const faqGroups = [
  { title: 'Grant application process', items: homeFaq },
  { title: 'Selection criteria', items: trust },
  { title: 'The Grants Trust', items: trust },
]

export const selectionCriteria = make([
  ['Relevance', 'Is the project relevant to the dYdX protocol and its community, and does it align with the program’s goals?'],
  ['Benefit', 'What is the expected benefit for dYdX traders, developers or the wider ecosystem?'],
  ['Feasibility', 'Is the proposal realistic in scope, budget and timeline?'],
  ['Execution', 'Does the team have a clear plan with milestones that can be reported on?'],
  ['Qualification', 'Does the applicant have the skills and track record to deliver?'],
  ['Originality', 'Does it offer something new, or meaningfully improve on what already exists?'],
  ['Cost', 'Is the requested amount reasonable for the work being proposed?'],
])
