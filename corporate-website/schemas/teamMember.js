export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'bio', title: 'Bio', type: 'text' },
      { name: 'profileImage', title: 'Profile Image', type: 'image' },
      { name: 'socialLinks', title: 'Social Links', type: 'array', of: [{ type: 'url' }] },
    ],
  };
  