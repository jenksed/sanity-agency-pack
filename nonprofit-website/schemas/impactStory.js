export default {
    name: 'impactStory',
    title: 'Impact Story',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
      { name: 'story', title: 'Story', type: 'text' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    ],
  }
  