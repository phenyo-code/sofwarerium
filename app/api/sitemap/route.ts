import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://softwarerium.vercel.app';
  const pages = [
    // Static Pages
    { url: '/', lastmod: '2025-04-02', changefreq: 'weekly', priority: '1.0' },
    { url: '/services', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.8' },
    { url: '/projects', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.8' },
    { url: '/contact', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.7' },
    { url: '/blog', lastmod: '2025-04-02', changefreq: 'weekly', priority: '0.7' },

    // Blog Posts
    { url: '/blog/web-development-trends', lastmod: '2025-04-10', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/desktop-applications-efficiency', lastmod: '2025-04-08', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/mobile-app-trends-2025', lastmod: '2025-04-06', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/seo-strategies', lastmod: '2025-04-04', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/web-design-conversion', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/ui-ux-engagement', lastmod: '2025-03-31', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/best-it-solutions-south', lastmod: '2025-03-29', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/choose-software-partner', lastmod: '2025-03-27', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/mobile-friendly-website-2025', lastmod: '2025-03-25', changefreq: 'monthly', priority: '0.6' },

    // Updated Project Pages (matching your latest featuredProjects)
    { url: '/projects/flare', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/design-craft', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/morph', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/reactlab', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/roomify', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
    { url: '/projects/light-docs', lastmod: '2025-04-02', changefreq: 'monthly', priority: '0.5' },
  ];

  // Construct XML without extra whitespace
  const xml = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    pages.map(page =>
      '<url>' +
      `<loc>${baseUrl}${page.url}</loc>` +
      `<lastmod>${page.lastmod}</lastmod>` +
      `<changefreq>${page.changefreq}</changefreq>` +
      `<priority>${page.priority}</priority>` +
      '</url>'
    ).join('') +
    '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}