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
  title: 'Portfolio Site for DesignCraft | Softwarerium',
  description: 'A visually stunning portfolio site built by Softwarerium to showcase DesignCraft’s creative work.',
  keywords: 'portfolio site, DesignCraft, Softwarerium, web design, creative showcase',
  openGraph: {
    title: 'Portfolio Site for DesignCraft | Softwarerium',
    description: 'Softwarerium’s visually stunning portfolio for DesignCraft’s creative work.',
    url: 'https://softwarerium.vercel.app/projects/design-craft',
    image: 'https://softwarerium.vercel.app/DesignCraftImg.png',
  },
};

export default function DesignCraftProject() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Portfolio Site for DesignCraft',
    description: 'A visually stunning portfolio showcasing DesignCraft’s creative work, built by Softwarerium.',
    url: 'https://softwarerium.vercel.app/projects/design-craft',
    image: 'https://softwarerium.vercel.app/DesignCraftImg.png',
    author: { '@type': 'Organization', name: 'Softwarerium' },
    datePublished: '2025-04-02',
  };

  return (
    <div className="font-sans">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Portfolio Site for DesignCraft"
        description="A creative showcase of stunning design work."
        ctaText="Contact Us"
        ctaLink="/contact"
        bgImage="https://softwarerium.vercel.app/DesignCraftImg.png"
      />
      <nav className="py-4 bg-white" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6">
          <ol className="flex space-x-2 text-sm sm:text-base" style={{ color: colors.gray }}>
            <li><Link href="/" style={{ color: colors.primary }}>Home</Link></li>
            <li><span className="mx-2">/</span><Link href="/projects" style={{ color: colors.primary }}>Projects</Link></li>
            <li><span className="mx-2">/</span><span>DesignCraft</span></li>
          </ol>
        </div>
      </nav>
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.black }}>
            Portfolio Site for DesignCraft
          </h1>
          <Image src="/DesignCraftImg.png" alt="DesignCraft Portfolio by Softwarerium" width={800} height={400} className="w-full mb-6 rounded-lg" />
          <p className="text-base sm:text-lg mb-6" style={{ color: colors.gray }}>
            Softwarerium crafted a visually captivating portfolio site for DesignCraft, highlighting their creative projects with elegance and flair. Built with a focus on aesthetics and usability, this site uses Tailwind CSS and Next.js to deliver a seamless browsing experience across devices.
          </p>
          <p className="text-base sm:text-lg" style={{ color: colors.gray }}>
            Featuring dynamic galleries and smooth animations, the platform lets DesignCraft’s work shine, attracting clients and showcasing their artistic vision. It’s a testament to Softwarerium’s ability to blend design and technology into a cohesive masterpiece.
          </p>
        </div>
      </section>
      <CTA text="Need a Portfolio Site? Let’s Talk!" link="/contact" />

    </div>
  );
}