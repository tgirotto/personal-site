import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tommaso Girotto',
  tagline: 'Software Engineer',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://tommaso-girotto.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',        // The name of your repository

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tgirotto', // Usually your GitHub org/user name.
  projectName: 'personal-site', // Usually your repo name.
  deploymentBranch: 'main',      // The branch that will host the site
  trailingSlash: false,
  onBrokenLinks: 'throw',

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
      {
        docs: {
          routeBasePath: 'work',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: true,
    },
    navbar: {
      title: 'Tommaso Girotto',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {to: '/work/intro', label: 'Work', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tgirotto',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://docs.google.com/document/d/1hiQ93xySNun7tyFun6hFth9o2RtDfzwZt1jfKrmd_mc/edit?usp=sharing',
          label: 'CV',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          label: 'tommaso.girotto91@gmail.com',
          href: 'mailto:hello@tommaso.girotto91@gmail.com',
        },
        {
          label: 'Github',
          href: 'https://github.com/tgirotto',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/tommaso-girotto-03474b153/',
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Tommaso Girotto.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
