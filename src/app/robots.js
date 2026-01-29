import { siteConfig } from "@/data/siteConfig";

export default function robots() {
  const baseUrl = siteConfig.url || "https://www.yavuzsahin.com";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Botların girmesini istemediğin yer varsa buraya yazarsın
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}