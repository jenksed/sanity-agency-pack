export default {
    name: 'sponsor',
    title: 'Sponsor',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
      { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
      { name: 'website', title: 'Website', type: 'url' },
    ],
  }
  