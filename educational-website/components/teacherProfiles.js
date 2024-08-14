export default {
    name: 'teacherProfiles',
    title: 'Teacher Profiles',
    type: 'array',
    of: [{ type: 'reference', to: [{ type: 'teacher' }] }],
  }
  