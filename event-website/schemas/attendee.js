export default {
    name: 'attendee',
    title: 'Attendee',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
      { name: 'email', title: 'Email', type: 'email' },
      { name: 'feedback', title: 'Feedback', type: 'text' },
    ],
  }
  