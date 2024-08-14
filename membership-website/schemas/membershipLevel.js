export default {
    name: 'membershipLevel',
    title: 'Membership Level',
    type: 'document',
    fields: [
      { name: 'levelName', title: 'Level Name', type: 'string', validation: Rule => Rule.required() },
      { name: 'price', title: 'Price', type: 'string' },
      { name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'reference', to: [{ type: 'benefit' }] }] },
    ],
  }
  