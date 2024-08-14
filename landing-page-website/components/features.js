export default {
    name: 'features',
    title: 'Features',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'featureList',
        title: 'Feature List',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'image' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
            ],
          },
        ],
      },
    ],
  }
  