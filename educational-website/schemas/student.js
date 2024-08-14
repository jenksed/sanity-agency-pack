export default {
    name: 'student',
    title: 'Student',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
      { name: 'email', title: 'Email', type: 'email' },
      { name: 'coursesEnrolled', title: 'Courses Enrolled', type: 'array', of: [{ type: 'reference', to: [{ type: 'course' }] }] },
    ],
  }
  