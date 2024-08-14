export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      { name: 'quote', title: 'Quote', type: 'text', validation: Rule => Rule.required() },
      { name: 'author', title: 'Author', type: 'string' },
      { name: 'authorImage', title: 'Author Image', type: 'image', options: { hotspot: true } },
    ],
  }
  