// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Entra ID',
      items: [
        'entra-id/overview',
        'entra-id/architecture',
        'entra-id/operations',
        'entra-id/app-integrations',
        'entra-id/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Languages',
      items: ['languages/overview'],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: ['workflows/overview'],
    },
    {
      type: 'category',
      label: 'Projects',
      items: ['projects/overview'],
    },
  ],
};

export default sidebars;
