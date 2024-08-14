export default {
    name: 'eventSchedule',
    title: 'Event Schedule',
    type: 'object',
    fields: [
      { name: 'day', title: 'Day', type: 'string' },
      { name: 'scheduleItems', title: 'Schedule Items', type: 'array', of: [{ type: 'string' }] },
    ],
  }
  