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
  title: 'Productivity App for LightDocs | Softwarerium',
  description: 'A productivity app with document management and collaboration features built by Softwarerium for LightDocs.',
  keywords: 'productivity app, LightDocs, Softwarerium, document management, collaboration tools',
  openGraph: {
    title: 'Productivity App for LightDocs | Softwarerium',
    description: 'Softwarerium’s productivity app for LightDocs with advanced document and collaboration features.',
    url: 'https://softwarerium.vercel.app/projects/light-docs',
    image: 'https://softwarerium.vercel.app/LightDocs.jpg',
  },
};

export default function LightDocsProject() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Productivity App for LightDocs',
    description: 'A productivity app with document management and collaboration features, built by Softwarerium.',
    url: 'https://softwarerium.vercel.app/projects/light-docs',
    image: 'https://softwarerium.vercel.app/LightDocs.jpg',
    author: { '@type': 'Organization', name: 'Softwarerium' },
    datePublished: '2025-04-02',
  };

  return (
    <div className="font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Productivity App for LightDocs"
        description="A powerful tool for document management and teamwork."
        ctaText="Contact Us"
        ctaLink="/contact"
        bgImage="https://softwarerium.vercel.app/LightDocs.jpg"
      />
      <nav className="py-4 bg-white" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6">
          <ol className="flex space-x-2 text-sm sm:text-base" style={{ color: colors.gray }}>
            <li><Link href="/" style={{ color: colors.primary }}>Home</Link></li>
            <li><span className="mx-2">/</span><Link href="/projects" style={{ color: colors.primary }}>Projects</Link></li>
            <li><span className="mx-2">/</span><span>LightDocs</span></li>
          </ol>
        </div>
      </nav>
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.black }}>
            Productivity App for LightDocs
          </h1>
          <Image src="/LightDocs.jpg" alt="LightDocs Productivity App by Softwarerium" width={800} height={400} className="w-full mb-6 rounded-lg" />
          <p className="text-base sm:text-lg mb-6" style={{ color: colors.gray }}>
            Softwarerium developed a productivity app for LightDocs, enhancing workflow with document management and real-time collaboration tools. Built with Electron for cross-platform support and integrated with cloud storage (e.g., Google Drive), this app boosts team efficiency.
          </p>
          <p className="text-base sm:text-lg" style={{ color: colors.gray }}>
            Features like version control, task assignments, and secure sharing make LightDocs a standout solution. Softwarerium’s focus on performance and user experience delivers a tool that transforms how teams work together.
          </p>
        </div>
      </section>
      <CTA text="Boost Productivity with Your Own App!" link="/contact" />
    </div>
  );
}