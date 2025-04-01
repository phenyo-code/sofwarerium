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
  title: 'Real Estate Portal for Roomify | Softwarerium',
  description: 'A user-friendly real estate portal by Softwarerium for Roomify, enabling property buying, renting, and selling.',
  keywords: 'real estate portal, Roomify, Softwarerium, property platform, web development',
  openGraph: {
    title: 'Real Estate Portal for Roomify | Softwarerium',
    description: 'Softwarerium’s sleek real estate platform for Roomify’s property transactions.',
    url: 'https://softwarerium.vercel.app/projects/roomify',
    image: 'https://softwarerium.vercel.app/Roomify.png',
  },
};

export default function RoomifyProject() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Real Estate Portal for Roomify',
    description: 'A sleek, user-friendly real estate platform for buying, renting, and selling properties, built by Softwarerium.',
    url: 'https://softwarerium.vercel.app/projects/roomify',
    image: 'https://softwarerium.vercel.app/Roomify.png',
    author: { '@type': 'Organization', name: 'Softwarerium' },
    datePublished: '2025-04-02',
  };

  return (
    <div className="font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Real Estate Portal for Roomify"
        description="A seamless platform for property transactions."
        ctaText="Contact Us"
        ctaLink="/contact"
        bgImage="https://softwarerium.vercel.app/Roomify.png"
      />
      <nav className="py-4 bg-white" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6">
          <ol className="flex space-x-2 text-sm sm:text-base" style={{ color: colors.gray }}>
            <li><Link href="/" style={{ color: colors.primary }}>Home</Link></li>
            <li><span className="mx-2">/</span><Link href="/projects" style={{ color: colors.primary }}>Projects</Link></li>
            <li><span className="mx-2">/</span><span>Roomify</span></li>
          </ol>
        </div>
      </nav>
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.black }}>
            Real Estate Portal for Roomify
          </h1>
          <Image src="/Roomify.png" alt="Roomify Real Estate Portal by Softwarerium" width={800} height={400} className="w-full mb-6 rounded-lg" />
          <p className="text-base sm:text-lg mb-6" style={{ color: colors.gray }}>
            Softwarerium designed a sleek real estate portal for Roomify, streamlining the process of buying, renting, and selling properties. Built with Next.js and integrated with a robust backend (e.g., Node.js), this platform offers advanced search filters, interactive maps, and secure user profiles.
          </p>
          <p className="text-base sm:text-lg" style={{ color: colors.gray }}>
            Roomify’s portal enhances user experience with fast load times and mobile optimization, making property transactions effortless. Softwarerium’s solution drives engagement and efficiency in the real estate market.
          </p>
        </div>
      </section>
      <CTA text="Launch Your Real Estate Portal Now!" link="/contact" />
    </div>
  );
}