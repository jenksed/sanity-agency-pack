export default {
    name: 'speakerProfiles',
    title: 'Speaker Profiles',
    type: 'array',
    of: [{ type: 'reference', to: [{ type: 'speaker' }] }],
  }
  