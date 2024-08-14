export default {
    name: 'benefit',
    title: 'Benefit',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } },
    ],
  }
  