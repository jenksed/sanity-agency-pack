export default {
    name: 'pricing',
    title: 'Pricing',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'pricingPlans',
        title: 'Pricing Plans',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'planName', title: 'Plan Name', type: 'string' },
              { name: 'price', title: 'Price', type: 'string' },
              { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
              { name: 'ctaText', title: 'CTA Text', type: 'string' },
              { name: 'ctaLink', title: 'CTA Link', type: 'url' },
            ],
          },
        ],
      },
    ],
  }
  