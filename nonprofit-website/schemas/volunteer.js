export default {
    name: 'volunteer',
    title: 'Volunteer',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
      { name: 'role', title: 'Role', type: 'string' },
      { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
      { name: 'bio', title: 'Biography', type: 'text' },
    ],
  }
  