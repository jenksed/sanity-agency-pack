export default {
    name: 'siteConfig',
    title: 'Site Configuration',
    type: 'document',
    fields: [
      {
        name: 'siteTitle',
        title: 'Site Title',
        type: 'string',
        description: 'The title of the website',
      },
      {
        name: 'siteDescription',
        title: 'Site Description',
        type: 'text',
        description: 'A short description of the website for SEO purposes',
      },
      {
        name: 'logo',
        title: 'Site Logo',
        type: 'image',
        options: { hotspot: true },
        description: 'Upload the site logo that will appear in the header',
      },
      {
        name: 'footerText',
        title: 'Footer Text',
        type: 'string',
        description: 'Text that will appear in the website footer',
      },
    ],
  };
  