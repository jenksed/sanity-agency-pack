export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      { name: 'url', title: 'Project URL', type: 'url' },
      { name: 'technologies', title: 'Technologies Used', type: 'array', of: [{ type: 'string' }] },
    ],
  }
  