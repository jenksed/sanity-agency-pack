export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string', validation: Rule => Rule.required() },
      { name: 'bio', title: 'Biography', type: 'text' },
      { name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    ],
  }
  