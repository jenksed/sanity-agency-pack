export default {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      { name: 'subheading', title: 'Subheading', type: 'string' },
      { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
      {
        name: 'cta',
        title: 'Call to Action',
        type: 'object',
        fields: [
          { name: 'ctaText', title: 'CTA Text', type: 'string' },
          { name: 'ctaLink', title: 'CTA Link', type: 'url' },
        ],
      },
    ],
  }
  