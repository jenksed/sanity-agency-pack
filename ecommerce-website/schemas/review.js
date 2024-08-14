export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.required().min(1).max(5),
      },
      {
        name: 'reviewText',
        title: 'Review Text',
        type: 'text',
      },
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }],
      },
    ],
  };
  