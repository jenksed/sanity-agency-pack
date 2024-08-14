export default {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'teacher', title: 'Teacher', type: 'reference', to: [{ type: 'teacher' }] },
      { name: 'lessons', title: 'Lessons', type: 'array', of: [{ type: 'reference', to: [{ type: 'lesson' }] }] },
    ],
  }
  