export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'author', title: 'Author', type: 'string' },
      { name: 'date', title: 'Date', type: 'datetime' },
      { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'string' }] },
      { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }, { type: 'video' }] },
    ],
  };
  