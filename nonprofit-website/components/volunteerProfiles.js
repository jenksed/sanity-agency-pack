export default {
    name: 'volunteerProfiles',
    title: 'Volunteer Profiles',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'role', title: 'Role', type: 'string' },
          { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
          { name: 'bio', title: 'Biography', type: 'text' },
        ],
      },
    ],
  }
  