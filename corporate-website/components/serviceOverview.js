export default {
    name: 'serviceOverview',
    title: 'Service Overview',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'services',
        title: 'Services',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'service' }] }],
      },
    ],
  };
  