export default {
    name: 'faq',
    title: 'Frequently Asked Questions',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'questions',
        title: 'Questions',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'question', title: 'Question', type: 'string' },
              { name: 'answer', title: 'Answer', type: 'text' },
            ],
          },
        ],
      },
    ],
  }
  