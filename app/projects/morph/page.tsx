import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import Link from 'next/link';
import Image from 'next/image';


const colors = {
  primary: '#6393FF',
  black: '#1A1A1A',
  gray: '#4A4A4A',
  lightGray: '#E5E7EB',
  white: '#FFFFFF',
};

export const metadata = {
  title: 'Corporate Website for Morph | Softwarerium',
  description: 'A professional CMS website built by Softwarerium for Morph with advanced features.',
  keywords: 'corporate website, Morph, Softwarerium, CMS, web development',
  openGraph: {
    title: 'Corporate Website for Morph | Softwarerium',
    description: 'Softwarerium’s professional CMS site for Morph with robust functionality.',
    url: 'https://softwarerium.co.za/projects/morph',
    image: 'https://softwarerium.co.za/MorphBuilder.png',
  },
};

export default function MorphProject() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Corporate Website for Morph',
    description: 'A professional Content Management System website built by Softwarerium for Morph.',
    url: 'https://softwarerium.co.za/projects/morph',
    image: 'https://softwarerium.co.za/MorphBuilder.png',
    author: { '@type': 'Organization', name: 'Softwarerium' },
    datePublished: '2025-04-02',
  };

  return (
    <div className="font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Corporate Website for Morph"
        description="A robust CMS solution for corporate needs."
        ctaText="Contact Us"
        ctaLink="/contact"
        bgImage="https://softwarerium.co.za/MorphBuilder.png"
      />
      <nav className="py-4 bg-white" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6">
          <ol className="flex space-x-2 text-sm sm:text-base" style={{ color: colors.gray }}>
            <li><Link href="/" style={{ color: colors.primary }}>Home</Link></li>
            <li><span className="mx-2">/</span><Link href="/projects" style={{ color: colors.primary }}>Projects</Link></li>
            <li><span className="mx-2">/</span><span>Morph</span></li>
          </ol>
        </div>
      </nav>
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.black }}>
            Corporate Website for Morph
          </h1>
          <Image src="/MorphBuilder.png" alt="Morph Corporate CMS by Softwarerium" width={800} height={400} className="w-full mb-6 rounded-lg" />
          <p className="text-base sm:text-lg mb-6" style={{ color: colors.gray }}>
            Softwarerium developed a sophisticated corporate website for Morph, featuring a custom Content Management System (CMS) built with WordPress and tailored plugins. This platform offers easy content updates, lead generation tools, and a professional design that reflects Morph’s brand identity.
          </p>
          <p className="text-base sm:text-lg" style={{ color: colors.gray }}>
            Optimized for SEO and performance, the site integrates analytics and secure forms, making it a powerful tool for Morph’s business growth. Softwarerium’s expertise ensures this CMS is both user-friendly and robust for corporate demands.
          </p>
        </div>
      </section>
      <CTA text="Want a Corporate CMS? Reach Out!" link="/contact" />
    </div>
  );
}