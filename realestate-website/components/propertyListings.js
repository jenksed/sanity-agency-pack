export default {
    name: 'propertyListings',
    title: 'Property Listings',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'properties',
        title: 'Properties',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'property' }],
          },
        ],
      },
    ],
  }
  