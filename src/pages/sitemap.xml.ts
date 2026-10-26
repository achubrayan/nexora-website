// Sitemap with French and English alternates for every page.
import type { APIRoute } from 'astro';
import { company } from '../i18n/content';
import { routes } from '../i18n/routes';
import { articles } from '../i18n/insights';
import { jobs } from '../i18n/careers';

export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, company.site).href;
  const pages = [...Object.values(routes), ...articles.map((a) => ({ fr: `${routes.insights.fr}${a.slug.fr}/`, en: `${routes.insights.en}${a.slug.en}/` })), ...jobs.filter((j) => j.status === 'open').map((j) => ({ fr: `${routes.careers.fr}${j.slug.fr}/`, en: `${routes.careers.en}${j.slug.en}/` }))];
  const urls = pages.flatMap((r) => (['fr', 'en'] as const).map((l) => `  <url>
    <loc>${abs(r[l])}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${abs(r.fr)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${abs(r.en)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(r.fr)}" />
  </url>`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
