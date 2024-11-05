// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ShellHub',
  tagline: 'Get seamless remote access to any Linux device',
  url: 'https://docs.shellhub.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shellhub-io/docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shellhub-io/docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-168888230-2',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'community-openapi',
            spec: 'https://shellhub-openapi-files.nyc3.digitaloceanspaces.com/community-openapi.yaml',
          },
          {
            id: 'cloud-openapi',
            spec: 'https://shellhub-openapi-files.nyc3.digitaloceanspaces.com/cloud-openapi.yaml',
          },
        ],
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff', // TODO: change to ShellHub color.
        },
      },
    ],
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      docs: {
        sidebar: {
          hideable: true
        },
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'ShellHub',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            to: 'https://cloud.shellhub.io',
            label: 'Get Started',
            className: 'nav-link_getting-started',
            position: 'right',
          },
          {
            href: 'https://github.com/shellhub-io/shellhub/',
            position: 'right',
            className: 'header-github-link',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'U0BS9FJALJ',
        apiKey: 'c2ba62069b528a88c6a1f702a0bfcdfb',
        indexName: 'shellhub',
        contextualSearch: true,
        searchParameters: {},
      },
      chatwoot: {
        websiteToken: "WNSdM8iU6UGw5h7ncy3qVvfh",
        baseURL: "https://chatwoot.infra.ossystems.io",
        enableInDevelopment: true,
        chatwootSettings: {
          hideMessageBubble: false,
          position: "right",
          locale: "en",
          useBrowserLanguage: false,
          darkMode: "light",
          type: "expanded_bubble",
          launcherTitle: "Chat with us",
        },
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    }),

  plugins: [
    '@chatwoot/docusaurus-plugin',
    'docusaurus-plugin-image-zoom',
  ],
};

module.exports = config;
