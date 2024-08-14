export default {
    name: 'contactForm',
    title: 'Contact Form',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      { name: 'subheading', title: 'Subheading', type: 'string' },
      {
        name: 'formFields',
        title: 'Form Fields',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'fieldLabel', title: 'Field Label', type: 'string' },
              { name: 'fieldType', title: 'Field Type', type: 'string' },
              { name: 'isRequired', title: 'Is Required', type: 'boolean' },
            ],
          },
        ],
      },
      { name: 'submitButtonText', title: 'Submit Button Text', type: 'string' },
    ],
  }
  