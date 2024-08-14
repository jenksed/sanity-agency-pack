export default {
    name: 'footer',
    title: 'Footer',
    type: 'object',
    fields: [
      { name: 'footerText', title: 'Footer Text', type: 'string' },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [{ type: 'url' }],
      },
    ],
  }
  