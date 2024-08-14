export default {
    name: 'lesson',
    title: 'Lesson',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
      { name: 'content', title: 'Content', type: 'blockContent' },
      { name: 'resources', title: 'Resources', type: 'array', of: [{ type: 'file' }] },
      { name: 'duration', title: 'Duration', type: 'string' },
    ],
  }
  