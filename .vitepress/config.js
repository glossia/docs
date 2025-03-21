import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Glossia",
  lang: "en-US",
  titleTemplate: ":title | Glossia Documentation",
  description: "A free software language hub",
  cleanUrls: true,
  srcDir: "./content",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Users", link: "/users/quick-start/why-glossia" },
      { text: "Hosters", link: "/hosters/quick-start/host-glossia" },
      { text: "Contributors", link: "/contributors/quick-start/welcome" },
      { text: "Website", link: "https://glossia.org" },
    ],
    sidebar: {
      "/users/": [
        {
          text: "Quick Start",
          items: [
            { text: "Why Glossia?", link: "/users/quick-start/why-glossia" },
          ],
        },
      ],
      "/hosters/": [
        {
          text: "Quick Start",
          items: [
            {
              text: "Host Glossia",
              link: "/hosters/quick-start/host-glossia",
            },
          ],
        },
        {
          text: "Methods",
          items: [
            {
              text: "Fly.io",
              link: "/hosters/methods/fly",
            },
          ],
        },
        {
          text: "Reference",
          items: [
            { text: "Configuration", link: "/hosters/reference/configuration" },
            {
              text: "Releases",
              link: "https://github.com/glossia/glossia/releases",
            },
            {
              text: "Image registry",
              link: "https://github.com/glossia/-/packages/container/glossia/",
            },
          ],
        },
      ],
      "/contributors/": [
        {
          text: "Quick Start",
          items: [
            {
              text: "Welcome",
              link: "/contributors/quick-start/welcome",
            },
          ],
        },
        {
          text: "Code",
          items: [
            {
              text: "Stack",
              link: "/contributors/code/stack",
            },
          ],
        },
      ],
    },
    editLink: {
      pattern: "https://github.com/glossia/docs/_edit/main/docs/:path",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/glossia" },
      { icon: "mastodon", link: "https://fosstodon.org/@glossia" },
      { icon: "discourse", link: "https://community.glossia.org/" },
    ],
  },
});
