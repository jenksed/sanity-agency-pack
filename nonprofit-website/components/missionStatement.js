export default {
    name: 'missionStatement',
    title: 'Mission Statement',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      { name: 'statement', title: 'Statement', type: 'text' },
      { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
    ],
  }
  