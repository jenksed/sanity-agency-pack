export default {
    name: 'cart',
    title: 'Cart',
    type: 'document',
    fields: [
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }],
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }] },
              { name: 'quantity', title: 'Quantity', type: 'number', validation: Rule => Rule.min(1) },
            ],
          },
        ],
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number',
        validation: Rule => Rule.min(0),
      },
      {
        name: 'lastUpdated',
        title: 'Last Updated',
        type: 'datetime',
      },
    ],
  };
  