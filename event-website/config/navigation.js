export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    fields: [
      {
        name: 'menuItems',
        title: 'Menu Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'link', title: 'Link', type: 'url' },
            ],
          },
        ],
      },
    ],
  }
  