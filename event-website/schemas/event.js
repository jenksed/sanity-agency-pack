export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
      { name: 'date', title: 'Date', type: 'datetime' },
      { name: 'location', title: 'Location', type: 'string' },
      { name: 'schedule', title: 'Schedule', type: 'reference', to: [{ type: 'eventSchedule' }] },
    ],
  }
  