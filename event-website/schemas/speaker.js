export default {
    name: 'speaker',
    title: 'Speaker',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
      { name: 'bio', title: 'Biography', type: 'text' },
      { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    ],
  }
  