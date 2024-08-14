export default {
    name: 'seo',
    title: 'SEO Configuration',
    type: 'document',
    fields: [
      {
        name: 'metaTitle',
        title: 'Default Meta Title',
        type: 'string',
        description: 'The default meta title for the website',
      },
      {
        name: 'metaDescription',
        title: 'Default Meta Description',
        type: 'text',
        description: 'The default meta description for the website',
      },
      {
        name: 'metaImage',
        title: 'Default Meta Image',
        type: 'image',
        options: { hotspot: true },
        description: 'The default image for social media previews (Open Graph, Twitter Cards)',
      },
      {
        name: 'metaKeywords',
        title: 'Default Meta Keywords',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Default meta keywords for the website',
      },
      {
        name: 'metaAuthor',
        title: 'Meta Author',
        type: 'string',
        description: 'The default author name for the website',
      },
      {
        name: 'openGraph',
        title: 'Open Graph Settings',
        type: 'object',
        fields: [
          { name: 'ogTitle', title: 'OG Title', type: 'string' },
          { name: 'ogDescription', title: 'OG Description', type: 'text' },
          { name: 'ogImage', title: 'OG Image', type: 'image', options: { hotspot: true } },
          { name: 'ogUrl', title: 'OG URL', type: 'url' },
        ],
      },
      {
        name: 'twitter',
        title: 'Twitter Card Settings',
        type: 'object',
        fields: [
          { name: 'twitterTitle', title: 'Twitter Title', type: 'string' },
          { name: 'twitterDescription', title: 'Twitter Description', type: 'text' },
          { name: 'twitterImage', title: 'Twitter Image', type: 'image', options: { hotspot: true } },
          { name: 'twitterUrl', title: 'Twitter URL', type: 'url' },
        ],
      },
    ],
  };
  