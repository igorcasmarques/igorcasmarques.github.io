// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Igor Marques',
  tagline: 'Clear writing that clicks instantly',
  favicon: 'img/favicon-2.ico',

  // Set the production url of your site here
  url: 'https://igorcasmarques.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'igorcasmarques', // Usually your GitHub org/user name.
  projectName: 'igorcasmarques.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Capital Noise',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'technical writer, ottawa'},
      ],
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Site logo',
          src: 'img/logo-2.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'resume/work-experience',
            label: 'Resume',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left',
          },
          /* Commenting out the Mudpuppy form for now (February 9, 2026)
          {
            position: 'left',
            to: 'mudpuppy',
            label: 'Mudpuppy',
          },
          */
          {
            type: 'dropdown',
            label: 'Contact',
            position: 'right',
            items: [
              {
                label: 'Email',
                href: 'mailto:coelhoigor@gmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/icasm/',
              }
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      defaultMode: 'light',
    }),
};

export default config;
