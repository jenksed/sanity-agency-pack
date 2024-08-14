export default {
    name: 'lessonOverview',
    title: 'Lesson Overview',
    type: 'object',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'duration', title: 'Duration', type: 'string' },
      { name: 'resources', title: 'Resources', type: 'array', of: [{ type: 'file' }] },
    ],
  }
  