export default {
    name: 'donation',
    title: 'Donation',
    type: 'document',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string', validation: Rule => Rule.required() },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'donationLink', title: 'Donation Link', type: 'url' },
      { name: 'ctaText', title: 'CTA Text', type: 'string' },
    ],
  }
  