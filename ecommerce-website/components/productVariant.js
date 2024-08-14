export default {
    name: 'productVariant',
    title: 'Product Variant',
    type: 'object',
    fields: [
      {
        name: 'size',
        title: 'Size',
        type: 'string',
      },
      {
        name: 'color',
        title: 'Color',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.min(0),
      },
    ],
  };
  