// app/services/page.tsx
import { FaSearch } from 'react-icons/fa';
import { IoIosDesktop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { RiCodeSSlashLine, RiPaintFill } from "react-icons/ri";
import { SiMaterialdesignicons } from "react-icons/si";
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Link from 'next/link';
import ChatBot from '../components/ChatBot';

// Color Palette
const colors = {
  primary: '#6393FF',    // Vibrant Blue
  black: '#1A1A1A',      // Deep Black
  gray: '#4A4A4A',       // Medium Gray
  lightGray: '#E5E7EB',  // Light Gray
  white: '#FFFFFF',      // Pure White
};

// Services data (enhanced descriptions for SEO)
const services = [
  { name: 'Web Development', slug: 'web-development', description: 'Custom web development services delivering scalable, SEO-optimized websites with cutting-edge technology.', icon: <RiCodeSSlashLine size={24} /> },
  { name: 'Desktop Applications', slug: 'desktop-applications', description: 'Expert desktop application development to create powerful, tailored software for your business.', icon: <IoIosDesktop size={24} /> },
  { name: 'Mobile App Development', slug: 'mobile-app-development', description: 'High-performance mobile app development services for iOS and Android to engage your audience.', icon: <CiMobile3 size={24} /> },
  { name: 'SEO Optimization', slug: 'seo-optimization', description: 'Proven SEO optimization services to boost your search rankings and drive organic traffic.', icon: <FaSearch size={24} /> },
  { name: 'Web Design', slug: 'web-design', description: 'Professional web design services crafting stunning, user-friendly websites that reflect your brand.', icon: <RiPaintFill size={24} /> },
  { name: 'UI/UX Design', slug: 'ui-ux-design', description: 'Top-tier UI/UX design services for intuitive, engaging user experiences across digital platforms.', icon: <SiMaterialdesignicons size={24} /> },
];

// Enhanced Metadata for SEO
export const metadata = {
  title: 'Softwarerium Services | Web Development, Mobile Apps, SEO & More',
  description: 'Explore Softwarerium’s expert services in custom web development, mobile app development, desktop applications, SEO optimization, web design, and UI/UX design to elevate your business in 2025.',
  keywords: 'web development services, mobile app development, desktop application development, SEO optimization services, web design services, UI/UX design services, Softwarerium South Africa',
  alternates: {
    canonical: 'https://softwarerium.co.za/services',
  },
  openGraph: {
    title: 'Softwarerium Services | Web Development, Mobile Apps, SEO & More',
    description: 'Boost your digital presence with Softwarerium’s custom software solutions, including web development, mobile apps, and SEO services.',
    url: 'https://softwarerium.co.za/services',
    siteName: 'Softwarerium',
    images: [
      {
        url: 'https://softwarerium.co.za/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Softwarerium Software Development Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    title: 'Softwarerium Services | Web Development, Mobile Apps, SEO & More',
    description: 'Discover Softwarerium’s expert services for web development, mobile apps, desktop software, and SEO in 2025.',
    image: 'https://softwarerium.co.za/opengraph-image.png',
    card: 'summary_large_image',
    creator: '@softwarerium',
  },
  robots: 'index, follow',
};

export default function Services() {
  // Enhanced JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Softwarerium',
        url: 'https://softwarerium.co.za',
        logo: 'https://softwarerium.co.za/logo.png',
        description: 'Softwarerium provides expert software development services including custom web development, mobile apps, desktop applications, SEO, web design, and UI/UX design in South Africa.',
        sameAs: [
          'https://twitter.com/softwarerium',
          'https://linkedin.com/company/softwarerium',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+27-74-755-3247',
          contactType: 'Customer Service',
          email: 'info@softwarerium.co.za',
          areaServed: 'South Africa',
          availableLanguage: 'English',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://softwarerium.co.za',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://softwarerium.co.za/services',
          },
        ],
      },
      // Individual Service Schemas for Rich Results
      ...services.map((service) => ({
        '@type': 'Service',
        serviceType: service.name,
        provider: {
          '@type': 'Organization',
          name: 'Softwarerium',
          url: 'https://softwarerium.co.za',
        },
        description: service.description,
        areaServed: 'South Africa',
        url: `https://softwarerium.co.za/services/${service.slug}`,
        offers: {
          '@type': 'Offer',
          name: service.name,
          description: service.description,
          availability: 'https://schema.org/InStock',
        },
      })),
      {
        '@type': 'WebPage',
        url: 'https://softwarerium.co.za/services',
        name: 'Softwarerium Services',
        description: 'Comprehensive software development services including web development, mobile app development, desktop applications, SEO optimization, web design, and UI/UX design.',
        inLanguage: 'en-US',
        isPartOf: {
          '@type': 'WebSite',
          url: 'https://softwarerium.co.za',
          name: 'Softwarerium',
        },
      },
    ],
  };

  return (
    <div className="font-sans">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <Hero
        title="Softwarerium Services"
        description="Unlock your business potential with our expert web development, mobile app development, desktop applications, SEO, web design, and UI/UX design services tailored for 2025."
        ctaText="Get Started Today"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1450&auto=format&fit=crop"
      />

      {/* Breadcrumbs */}
      <nav className="py-4 bg-white" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6">
          <ol className="flex space-x-2 text-sm sm:text-base" style={{ color: colors.gray }}>
            <li>
              <Link href="/" className="hover:underline" style={{ color: colors.primary }}>
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span>Services</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Services Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: colors.black }}
          >
            Our Software Development Services
          </h1>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            Elevate your digital presence with Softwarerium’s comprehensive services in custom web development, mobile apps, desktop software, SEO optimization, web design, and UI/UX design.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <article
                key={service.name}
                className="p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.white }}
              >
                <div className="text-center">
                  <div
                    className="mb-4 sm:mb-6 mx-auto w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                    style={{ color: colors.primary, background: `${colors.primary}15` }}
                    aria-label={`${service.name} icon`}
                  >
                    {service.icon}
                  </div>
                  <h2
                    className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 transition-colors duration-300 hover:text-primary"
                    style={{ color: colors.black }}
                  >
                    {service.name}
                  </h2>
                  <p
                    className="text-sm sm:text-base mb-4"
                    style={{ color: colors.gray }}
                  >
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-center text-sm sm:text-base font-medium transition-colors duration-300 hover:underline"
                    style={{ color: colors.primary }}
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.white }}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8" style={{ color: colors.black }}>
            Why Choose Softwarerium’s Services?
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12" style={{ color: colors.gray }}>
            Our expertise in software development ensures your business thrives with tailored, high-quality solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Expert Team', desc: 'Skilled professionals delivering top-tier web, mobile, and desktop solutions.' },
              { title: 'Custom Solutions', desc: 'Tailored services in web development, SEO, and design to meet your needs.' },
              { title: 'Proven Results', desc: 'Boosted rankings and performance for clients across South Africa.' },
            ].map((item, index) => (
              <div key={index} className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: colors.black }}>
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: colors.gray }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA text="Launch Your Project with Softwarerium’s Services" link="/contact" />
      <ChatBot />
    </div>
  );
}