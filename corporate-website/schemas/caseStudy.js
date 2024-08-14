export default {
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'clientName', title: 'Client Name', type: 'string' },
      { name: 'projectDescription', title: 'Project Description', type: 'text' },
      { name: 'results', title: 'Results', type: 'text' },
      { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
    ],
  };
  