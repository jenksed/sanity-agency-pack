export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'orders',
        title: 'Order History',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'order' }] }],
      },
    ],
  };
  