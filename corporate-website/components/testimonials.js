export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'testimonialsList',
        title: 'Testimonials List',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
      },
    ],
  };
  