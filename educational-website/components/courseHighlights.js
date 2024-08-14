export default {
    name: 'courseHighlights',
    title: 'Course Highlights',
    type: 'object',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] },
    ],
  }
  