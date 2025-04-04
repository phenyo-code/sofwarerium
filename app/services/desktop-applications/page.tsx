"use client";

import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import Link from 'next/link';
import { IoIosDesktop, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaCogs, FaShieldAlt, FaRocket } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const NextSeo = dynamic(() => import('next-seo').then((mod) => mod.NextSeo), {
  ssr: false, // Disables server-side rendering
});


// Color Palette
const colors = {
  primary: '#6393FF', // Vibrant Blue
  black: '#1A1A1A', // Deep Black
  gray: '#4A4A4A', // Medium Gray
  lightGray: '#E5E7EB', // Light Gray
  white: '#FFFFFF', // Pure White
};

// SEO Configuration with NextSeo
const SEO = {
  title: 'Desktop Applications | Softwarerium',
  description:
    'Powerful custom desktop applications designed to streamline your business operations and boost productivity. Build software solutions that fit your unique needs.',
  canonical: 'https://softwarerium.co.za/services/desktop-applications', // Updated domain
  openGraph: {
    title: 'Desktop Applications | Softwarerium',
    description:
      'Tailored desktop applications that integrate with your workflows, enhancing business operations and increasing efficiency.',
    url: 'https://softwarerium.co.za/services/desktop-applications',
    type: 'website',
    images: [
      {
        url: 'https://softwarerium.co.za/opengraph-image.png', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Desktop Applications Preview',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    title: 'Desktop Applications | Softwarerium',
    description: 'Custom desktop applications to streamline your business operations and boost productivity.',
    image: 'https://softwarerium.co.za/opengraph-image.png', // Replace with actual image URL
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'desktop applications, business software, custom desktop software, productivity software, enterprise solutions',
    },
  ],
};

export default function DesktopApplications() {
  // JSON-LD Structured Data for Organization, Breadcrumbs, and Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Softwarerium',
        url: 'https://softwarerium.co.za', // Updated domain
        logo: 'https://softwarerium.co.za/logo.png', // Replace with your logo URL
        description:
          'Expert software solutions designed to propel your business forward through innovation, scalability, and excellence.',
        sameAs: [
          'https://twitter.com/softwarerium',
          'https://linkedin.com/company/softwarerium',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567', // Replace with your phone number
          contactType: 'Customer Service',
          email: 'info@softwarerium.co.za', // Replace with your email
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Desktop Applications',
            item: 'https://softwarerium.co.za/services/desktop-applications',
          },
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Desktop Application Development',
        provider: { '@type': 'Organization', name: 'Softwarerium' },
        description:
          'Powerful custom desktop applications designed to streamline your business operations and boost productivity.',
        areaServed: 'Worldwide',
        image: 'https://softwarerium.co.za/opengraph-image.png', // Replace with actual image URL
        offers: [
          {
            '@type': 'Offer',
            name: 'Custom Desktop Applications',
            description:
              'Tailored software solutions that integrate with your workflows, enhancing business operations and increasing efficiency.',
            url: 'https://softwarerium.co.za/services/desktop-applications',
          },
          {
            '@type': 'Offer',
            name: 'Enterprise Desktop Solutions',
            description: 'Scalable software for large organizations to optimize complex operations.',
            url: 'https://softwarerium.co.za/services/desktop-applications',
          },
        ],
      },
    ],
  };

  return (
    <div className="font-sans">
      {/* NextSeo for SEO management */}
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        canonical={SEO.canonical}
        openGraph={SEO.openGraph}
        twitter={SEO.twitter}
        additionalMetaTags={SEO.additionalMetaTags}
      />

      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <Hero
        title="Desktop Applications by Softwarerium"
        description="Unlock the full potential of your business with powerful, custom-built desktop software tailored to streamline operations and boost productivity."
        ctaText="Get Started Now"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1450&auto=format&fit=crop"
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
              <Link href="/services" className="hover:underline" style={{ color: colors.primary }}>
                Services
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span>Desktop Applications</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Overview Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="mb-4 sm:mb-6 mx-auto w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full shadow-md transition-transform duration-300 hover:scale-110"
              style={{ color: colors.primary, background: `${colors.primary}15` }}
            >
              <IoIosDesktop size={48} />
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: colors.black }}
            >
              Custom Desktop Applications
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12"
              style={{ color: colors.gray }}
            >
              At Softwarerium, we design and develop desktop applications that empower businesses with robust, secure, and efficient tools. Whether you need standalone software or integrated enterprise solutions, we deliver performance-driven applications customized to your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16" style={{ background: colors.white }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
            style={{ color: colors.black }}
          >
            Why Choose Desktop Applications from Softwarerium?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <FaCogs size={32} />,
                title: 'Tailored Functionality',
                desc: 'Software built to match your specific workflows and business processes.',
              },
              {
                icon: <FaShieldAlt size={32} />,
                title: 'Enhanced Security',
                desc: 'Robust security features to protect your data and operations.',
              },
              {
                icon: <FaRocket size={32} />,
                title: 'High Performance',
                desc: 'Optimized for speed and reliability, even with complex tasks.',
              },
              {
                icon: <IoMdCheckmarkCircleOutline size={32} />,
                title: 'Seamless Integration',
                desc: 'Connects effortlessly with your existing systems and tools.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.lightGray }}
              >
                <div
                  className="mb-4 mx-auto w-12 h-12 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                  style={{ color: colors.primary }}
                >
                  {benefit.icon}
                </div>
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2 text-center transition-colors duration-300 hover:text-primary"
                  style={{ color: colors.black }}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-center" style={{ color: colors.gray }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="space-y-12">
            {/* Approach */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: colors.black }}
              >
                Our Development Approach
              </h2>
              <p
                className="text-base sm:text-lg mb-6 leading-relaxed"
                style={{ color: colors.gray }}
              >
                Softwarerium takes a collaborative and structured approach to desktop application development, ensuring every project aligns with your vision and delivers measurable results.
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-base sm:text-lg" style={{ color: colors.gray }}>
                <li>
                  <strong>Discovery:</strong> We analyze your needs, goals, and existing systems to define the project scope.
                </li>
                <li>
                  <strong>Design:</strong> Our team creates prototypes and designs that prioritize usability and efficiency.
                </li>
                <li>
                  <strong>Development:</strong> Using agile methodologies, we build your application with clean, scalable code.
                </li>
                <li>
                  <strong>Testing:</strong> Rigorous testing ensures reliability, security, and performance across platforms.
                </li>
                <li>
                  <strong>Deployment & Support:</strong> We launch your software and provide ongoing maintenance to keep it running smoothly.
                </li>
              </ol>
            </div>

            {/* Industries */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: colors.black }}
              >
                Industries We Serve
              </h2>
              <p
                className="text-base sm:text-lg mb-6 leading-relaxed"
                style={{ color: colors.gray }}
              >
                Our desktop applications are versatile, supporting a wide range of industries with customized solutions that address sector-specific challenges.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ color: colors.gray }}>
                {[
                  'Finance and Accounting',
                  'Healthcare and Medical',
                  'Manufacturing and Logistics',
                  'Retail and E-commerce',
                  'Education and Training',
                  'Professional Services',
                ].map((industry, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <IoMdCheckmarkCircleOutline size={20} style={{ color: colors.primary }} />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA text="Ready to Transform Your Business? Let’s Talk!" link="/contact" />
    </div>
  );
}