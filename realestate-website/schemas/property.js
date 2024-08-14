export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'location', title: 'Location', type: 'string' },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      { name: 'propertyType', title: 'Property Type', type: 'string' },
      { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
      { name: 'agent', title: 'Agent', type: 'reference', to: [{ type: 'agent' }] },
    ],
  }
  