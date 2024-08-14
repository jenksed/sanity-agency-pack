export default {
    name: 'skillsList',
    title: 'Skills List',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'skill' }],
          },
        ],
      },
    ],
  }
  