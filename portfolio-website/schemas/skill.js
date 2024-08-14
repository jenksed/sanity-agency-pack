export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      { name: 'name', title: 'Skill Name', type: 'string', validation: Rule => Rule.required() },
      { name: 'level', title: 'Proficiency Level', type: 'string' },
    ],
  }
  