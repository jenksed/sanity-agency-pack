export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      { name: 'eventName', title: 'Event Name', type: 'string', validation: Rule => Rule.required() },
      { name: 'date', title: 'Date', type: 'datetime' },
      { name: 'location', title: 'Location', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
    ],
  }
  