export default {
    name: 'cartItem',
    title: 'Cart Item',
    type: 'object',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'product' }],
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
        validation: Rule => Rule.min(1),
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number',
        validation: Rule => Rule.min(0),
      },
    ],
  };
  