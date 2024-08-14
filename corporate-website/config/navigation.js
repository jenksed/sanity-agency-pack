export default {
    name: 'navigation',
    title: 'Navigation Menu',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Menu Title',
        type: 'string',
        description: 'The title of the navigation menu (e.g., Main Menu, Footer Menu)',
      },
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
              {
                name: 'subMenu',
                title: 'Sub Menu',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      { name: 'title', title: 'Sub Menu Title', type: 'string' },
                      { name: 'link', title: 'Sub Menu Link', type: 'url' },
                    ],
                  },
                ],
                options: {
                  collapsible: true,
                },
              },
            ],
          },
        ],
      },
    ],
  };
  