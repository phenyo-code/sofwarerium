// app/api/sitemap/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://softwarerium.vercel.app';

  // Static pages for the sitemap
  const pages = [
    { url: `${baseUrl}/`, lastmod: new Date('2025-04-02'), changefreq: 'weekly', priority: '1.0' },
    { url: `${baseUrl}/services`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.8' },
    { url: `${baseUrl}/projects`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.8' },
    { url: `${baseUrl}/contact`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.7' },
    { url: `${baseUrl}/blog`, lastmod: new Date('2025-04-02'), changefreq: 'weekly', priority: '0.7' },
    { url: `${baseUrl}/blog/web-development-trends`, lastmod: new Date('2025-04-10'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/blog/desktop-applications-efficiency`, lastmod: new Date('2025-04-08'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/blog/mobile-app-trends-2025`, lastmod: new Date('2025-04-06'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/blog/seo-strategies`, lastmod: new Date('2025-04-04'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/blog/web-design-conversion`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/blog/ui-ux-engagement`, lastmod: new Date('2025-03-31'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/blog/best-it-solutions-south`, lastmod: new Date('2025-03-29'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/blog/choose-software-partner`, lastmod: new Date('2025-03-27'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/blog/mobile-friendly-website-2025`, lastmod: new Date('2025-03-25'), changefreq: 'monthly', priority: '0.6' },
    { url: `${baseUrl}/projects/flare`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/projects/design-craft`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/projects/morph`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/projects/reactlab`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/projects/roomify`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.5' },
    { url: `${baseUrl}/projects/light-docs`, lastmod: new Date('2025-04-02'), changefreq: 'monthly', priority: '0.5' },
  ];

  // Generate XML string
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod.toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Log for debugging
  console.log('Softwarerium sitemap accessed at:', new Date().toISOString());

  // Return the sitemap as XML
  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}