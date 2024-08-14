export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'ctaText', title: 'CTA Text', type: 'string' },
        { name: 'ctaLink', title: 'CTA Link', type: 'url' },
      ],
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'blockContent' }],
    },
    { name: 'footerText', title: 'Footer Text', type: 'string' },
  ],
}
