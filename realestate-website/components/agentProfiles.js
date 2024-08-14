export default {
    name: 'agentProfiles',
    title: 'Agent Profiles',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      {
        name: 'agents',
        title: 'Agents',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'agent' }],
          },
        ],
      },
    ],
  }
  