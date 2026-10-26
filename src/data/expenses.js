export const expenseTabs = ['All', 'Category', 'Category', 'Category', 'Category']

export const expenses = [
  { title: 'Airtable Yearly Subscription', type: 'Vendor', desc: 'Airtable is used to build the application form and store all application data.', amount: '$500.00', cat: 1 },
  ...Array.from({ length: 9 }, (_, i) => ({ title: 'Expense title', type: 'Type', desc: 'Description', amount: '-5,190.37 USDC', cat: (i % 4) + 1 })),
]
