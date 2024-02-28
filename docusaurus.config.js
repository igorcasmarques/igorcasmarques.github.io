// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Igor Coelho A. S. Marques',
  tagline: 'Committed to equalizing access to information and tools',
  favicon: 'img/favicon.ico',

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
          sidebarPath: './sidebars.js',
        },
        blog: {
          blogTitle: 'Micro-blog',
          blogDescription: 'Micro-blog with casual entries about the use of technical writing in Ottawa, Canada.',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          routeBasePath: 'micro-blog',
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
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Site logo',
          src: 'img/logo.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            to: 'docs/resume/intro',
            label: 'Resume',
            position: 'left'
          },
          {
            to: 'docs/portfolio/intro',
            label: 'Portfolio',
            position: 'left'
          },
          {
            to: 'micro-blog',
            label: 'Micro-blog',
            position: 'left'
          },
          {
            to: 'mailto:coelhoigor@gmail.com',
            label: 'Email',
            position: 'right'
          },
          {
            to: 'https://www.linkedin.com/in/icasm/',
            label: 'LinkedIn',
            position: 'right'
          },
          {
            to: 'https://github.com/igorcasmarques',
            label: 'GitHub',
            position: 'right'
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
