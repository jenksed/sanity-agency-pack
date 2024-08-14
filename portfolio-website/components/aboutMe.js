export default {
    name: 'aboutMe',
    title: 'About Me',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      { name: 'bio', title: 'Biography', type: 'text' },
      { name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    ],
  }
  