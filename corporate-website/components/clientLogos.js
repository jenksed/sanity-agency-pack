export default {
    name: 'clientLogos',
    title: 'Client Logos',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'logos',
        title: 'Logos',
        type: 'array',
        of: [{ type: 'image' }],
      },
    ],
  };
  