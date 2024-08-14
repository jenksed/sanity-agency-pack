export default {
    name: 'attendeeFeedback',
    title: 'Attendee Feedback',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'attendeeName', title: 'Attendee Name', type: 'string' },
          { name: 'feedback', title: 'Feedback', type: 'text' },
        ],
      },
    ],
  }
  