export default {
    name: 'mission',
    title: 'Mission',
    type: 'document',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string', validation: Rule => Rule.required() },
      { name: 'statement', title: 'Statement', type: 'text' },
      { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
    ],
  }
  