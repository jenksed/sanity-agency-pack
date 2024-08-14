export default {
    name: 'orderSummary',
    title: 'Order Summary',
    type: 'object',
    fields: [
      {
        name: 'subtotal',
        title: 'Subtotal',
        type: 'number',
        validation: Rule => Rule.min(0),
      },
      {
        name: 'tax',
        title: 'Tax',
        type: 'number',
        validation: Rule => Rule.min(0),
      },
      {
        name: 'total',
        title: 'Total',
        type: 'number',
        validation: Rule => Rule.min(0),
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [{ type: 'cartItem' }],
      },
    ],
  };
  