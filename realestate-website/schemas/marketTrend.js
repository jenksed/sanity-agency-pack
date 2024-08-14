export default {
    name: 'marketTrend',
    title: 'Market Trend',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    ],
  }
  