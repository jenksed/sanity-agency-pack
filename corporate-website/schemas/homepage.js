export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
      { name: 'heroSection', title: 'Hero Section', type: 'heroSection' },
      { name: 'services', title: 'Services Overview', type: 'array', of: [{ type: 'service' }] },
      { name: 'testimonials', title: 'Testimonials', type: 'array', of: [{ type: 'testimonial' }] },
      { name: 'blogHighlights', title: 'Blog Highlights', type: 'array', of: [{ type: 'blog' }] },
      { name: 'cta', title: 'Call to Action', type: 'callToAction' },
    ],
  };
  