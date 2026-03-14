import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site, url }) => {
  const siteBase = site ? site.toString().replace(/\/$/, '') : url.origin;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemapUrl = `${siteBase}${base}/sitemap-index.xml`;

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
};
