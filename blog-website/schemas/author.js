export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'bio', title: 'Bio', type: 'text' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    ],
  }
  