export default {
    name: 'productDetails',
    title: 'Product Details',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'productImage' }],
      },
      {
        name: 'variants',
        title: 'Variants',
        type: 'array',
        of: [{ type: 'productVariant' }],
      },
    ],
  };
  