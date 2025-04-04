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
  title: 'E-Commerce Platform for FLARE | Softwarerium',
  description: 'Discover how Softwarerium built a fully responsive e-commerce platform for FLARE with admin dashboard and payment gateway integration.',
  keywords: 'e-commerce platform, FLARE project, Softwarerium, web development, payment gateway',
  openGraph: {
    title: 'E-Commerce Platform for FLARE | Softwarerium',
    description: 'A responsive e-commerce site with admin dashboard and seamless payment integration by Softwarerium.',
    url: 'https://softwarerium.vercel.app/projects/flare',
    image: 'https://softwarerium.vercel.app/Flare.png',
  },
};

export default function FlareProject() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'E-Commerce Platform for FLARE',
    description: 'A fully responsive e-commerce site with admin dashboard, payment gateway, and more, built by Softwarerium.',
    url: 'https://softwarerium.vercel.app/projects/flare',
    image: 'https://softwarerium.vercel.app/Flare.png',
    author: { '@type': 'Organization', name: 'Softwarerium' },
    datePublished: '2025-04-02',
  };

  return (
    <div className="font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="E-Commerce Platform for FLARE"
        description="A fully responsive e-commerce solution with advanced features."
        ctaText="Contact Us"
        ctaLink="/contact"
        bgImage="https://softwarerium.vercel.app/Flare.png"
      />
      <nav className="py-4 bg-white" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6">
          <ol className="flex space-x-2 text-sm sm:text-base" style={{ color: colors.gray }}>
            <li><Link href="/" style={{ color: colors.primary }}>Home</Link></li>
            <li><span className="mx-2">/</span><Link href="/projects" style={{ color: colors.primary }}>Projects</Link></li>
            <li><span className="mx-2">/</span><span>FLARE</span></li>
          </ol>
        </div>
      </nav>
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.black }}>
            E-Commerce Platform for FLARE
          </h1>
          <Image src="/Flare.png" alt="FLARE E-Commerce Platform by Softwarerium" width={800} height={400} className="w-full mb-6 rounded-lg" />
          <p className="text-base sm:text-lg mb-6" style={{ color: colors.gray }}>
            Softwarerium partnered with FLARE to deliver a fully responsive e-commerce platform tailored to their retail needs. Featuring an intuitive admin dashboard, seamless payment gateway integration (e.g., Stripe, PayPal), and a user-friendly shopping experience, this project showcases our expertise in scalable web development.
          </p>
          <p className="text-base sm:text-lg" style={{ color: colors.gray }}>
            Built with React and Next.js, the site ensures fast load times and mobile optimization, driving conversions and customer satisfaction. From product management to secure checkout, FLARE’s platform is a one-stop solution for modern e-commerce success.
          </p>
        </div>
      </section>
      <CTA text="Ready to Build Your E-Commerce Site? Contact Us!" link="/contact" />
    </div>
  );
}