export default {
    name: 'marketTrends',
    title: 'Market Trends',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'trends',
        title: 'Trends',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'trendTitle', title: 'Trend Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
              { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            ],
          },
        ],
      },
    ],
  }
  