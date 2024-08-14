export default {
    name: 'blogHighlights',
    title: 'Blog Highlights',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'blogs',
        title: 'Blogs',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'blog' }] }],
      },
    ],
  };
  