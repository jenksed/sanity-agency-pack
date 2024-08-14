export default {
    name: 'events',
    title: 'Events',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'eventsList',
        title: 'Events List',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'eventName', title: 'Event Name', type: 'string' },
              { name: 'date', title: 'Date', type: 'datetime' },
              { name: 'location', title: 'Location', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
            ],
          },
        ],
      },
    ],
  }
  