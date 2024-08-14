export default {
    name: 'projectShowcase',
    title: 'Project Showcase',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'projects',
        title: 'Projects',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'project' }],
          },
        ],
      },
    ],
  }
  