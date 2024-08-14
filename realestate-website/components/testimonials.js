export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'testimonialsList',
        title: 'Testimonials List',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'quote', title: 'Quote', type: 'text' },
              { name: 'author', title: 'Author', type: 'string' },
              { name: 'authorImage', title: 'Author Image', type: 'image', options: { hotspot: true } },
            ],
          },
        ],
      },
    ],
  }
  