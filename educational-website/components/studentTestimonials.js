export default {
    name: 'studentTestimonials',
    title: 'Student Testimonials',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'studentName', title: 'Student Name', type: 'string' },
          { name: 'testimonial', title: 'Testimonial', type: 'text' },
        ],
      },
    ],
  }
  