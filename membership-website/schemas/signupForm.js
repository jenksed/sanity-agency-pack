export default {
    name: 'signupForm',
    title: 'Signup Form',
    type: 'document',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string', validation: Rule => Rule.required() },
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
  