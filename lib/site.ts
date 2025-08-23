export const siteConfig = {
  name: "SaaSify",
  description: "Launch faster with a beautiful SaaS starter",
  tagline: "Auth, theming, docs, and a polished dashboard—out of the box.",
  url: "https://saasify.com",
  ogImage: "https://saasify.com/og.jpg",
  links: {
    twitter: "https://twitter.com/saasify",
    github: "https://github.com/saasify/saasify",
  },
  mainNav: [
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
}

export type SiteConfig = typeof siteConfig
