export default {
    name: 'impactStories',
    title: 'Impact Stories',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'stories',
        title: 'Stories',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'story', title: 'Story', type: 'text' },
              { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            ],
          },
        ],
      },
    ],
  }
  