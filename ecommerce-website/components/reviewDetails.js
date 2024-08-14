export default {
    name: 'reviewDetails',
    title: 'Review Details',
    type: 'object',
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
  