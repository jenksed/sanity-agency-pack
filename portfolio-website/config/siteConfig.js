export default {
    name: 'siteConfig',
    title: 'Site Configuration',
    type: 'document',
    fields: [
      { name: 'siteTitle', title: 'Site Title', type: 'string' },
      { name: 'siteLogo', title: 'Site Logo', type: 'image', options: { hotspot: true } },
      { name: 'footerText', title: 'Footer Text', type: 'string' },
    ],
  }
  