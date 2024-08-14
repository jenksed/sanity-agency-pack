export default {
    name: 'membershipBenefits',
    title: 'Membership Benefits',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'benefits',
        title: 'Benefits',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
              { name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } },
            ],
          },
        ],
      },
    ],
  }
  