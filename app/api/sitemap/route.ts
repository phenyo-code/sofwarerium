// app/api/sitemap/route.ts
import { NextResponse } from 'next/server';

// Define the structure of a sitemap entry
interface SitemapEntry {
  url: string;
  lastmod: string; // ISO 8601 date (e.g., '2025-04-02')
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string; // Value between 0.0 and 1.0
}

export async function GET() {
  // Base URL from environment variable or fallback
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://softwarerium.vercel.app';

  // List of pages for the sitemap
  const pages: SitemapEntry[] = [
    { url: '/', lastmod: '2025-04-02', changefreq: 'weekly', priority: '1.0' },
    { url: '/services', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.8' },
    { url: '/projects', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.8' },
    { url: '/contact', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.7' },
    { url: '/blog', lastmod: '2025-04-02', changefreq: 'weekly', priority: '0.7' },
    { url: '/blog/web-development-trends', lastmod: '2025-04-10', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/desktop-applications-efficiency', lastmod: '2025-04-08', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/mobile-app-trends-2025', lastmod: '2025-04-06', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/seo-strategies', lastmod: '2025-04-04', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/web-design-conversion', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/ui-ux-engagement', lastmod: '2025-03-31', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/best-it-solutions-south', lastmod: '2025-03-29', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/choose-software-partner', lastmod: '2025-03-27', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/mobile-friendly-website-2025', lastmod: '2025-03-25', changefreq: 'monthly', priority: '0.6' },
    { url: '/projects/flare', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/design-craft', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/morph', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.6' },
    { url: '/projects/reactlab', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/roomify', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/light-docs', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${encodeURI(`${baseUrl}${page.url}`)}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`.trim();

  // Log for debugging
  console.log('Sitemap accessed at:', new Date().toISOString());

  // Return XML response with explicit encoding
  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'Access-Control-Allow-Origin': '*', // Allow crawlers from any origin
    },
  });
}

// Ensure static generation
export const dynamic = 'force-static';