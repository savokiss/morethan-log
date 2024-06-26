const CONFIG = {
  // profile setting (required)
  profile: {
    name: "savokiss",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "I develop everything using JavaScript.",
    email: "jaynaruto@qq.com",
    linkedin: "savokiss",
    github: "savokiss",
    instagram: "",
  },
  projects: [
    {
      name: `DokeyAI`,
      href: "https://dokeyai.com?utm_source=detools.dev&utm_medium=referral",
    },
    {
      name: `MyGPTs`,
      href: "https://mygpts.dev?utm_source=detools.dev&utm_medium=referral",
    },
    {
      name: `Omnivore2RSS`,
      href: "https://github.com/savokiss/omnivore2rss",
    },
    {
      name: `HackerTools`,
      href: "https://hackertools.one/",
    },
    {
      name: `SocialCardGenerator`,
      href: "https://social.detools.dev/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Detools Blog",
    description: "welcome to Detools Blog!",
  },

  // CONFIG configration (required)
  link: "https://blog.detools.dev",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "59cd8e75-5b16-473e-a894-02577cffa436", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 3600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
