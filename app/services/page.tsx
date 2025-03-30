// app/services/page.tsx
import { FaSearch } from 'react-icons/fa';
import { IoIosDesktop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { RiCodeSSlashLine, RiPaintFill } from "react-icons/ri";
import { SiMaterialdesignicons } from "react-icons/si";
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Link from 'next/link';

// Color Palette
const colors = {
  primary: '#6393FF',    // Vibrant Blue
  black: '#1A1A1A',      // Deep Black
  gray: '#4A4A4A',       // Medium Gray
  lightGray: '#E5E7EB',  // Light Gray
  white: '#FFFFFF',      // Pure White
};

// Services data
const services = [
  { name: 'Web Development', slug: 'web-development', description: 'Scalable websites built with the latest technologies for optimal performance.', icon: <RiCodeSSlashLine size={24} /> },
  { name: 'Desktop Applications', slug: 'desktop-applications', description: 'Powerful desktop software tailored to streamline your business operations.', icon: <IoIosDesktop size={24} /> },
  { name: 'Mobile App Development', slug: 'mobile-app-development', description: 'Engaging, high-performance mobile apps for iOS and Android platforms.', icon: <CiMobile3 size={24} /> },
  { name: 'SEO Optimization', slug: 'seo-optimization', description: 'Boost your search rankings and drive organic traffic with proven strategies.', icon: <FaSearch size={24} /> },
  { name: 'Web Design', slug: 'web-design', description: 'Stunning, user-friendly designs that captivate your audience and reflect your brand identity.', icon: <RiPaintFill size={24} /> },
  { name: 'UI/UX Design', slug: 'ui-ux-design', description: 'Intuitive, user-centered designs that enhance usability and engagement.', icon: <SiMaterialdesignicons size={24} /> },
];

// Metadata for SEO
export const metadata = {
  title: 'Services | Softwarerium',
  description: 'Explore Softwarerium’s expert services in web development, mobile apps, desktop applications, SEO, web design, and UI/UX design.',
  keywords: 'Softwarerium services, web development, mobile apps, desktop applications, SEO optimization, web design, UI/UX design',
  openGraph: {
    title: 'Services | Softwarerium',
    description: 'Tailored software solutions to elevate your digital presence across web, mobile, and desktop platforms.',
    url: 'https://sofwarerium.vercel.app/services',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
  },
  twitter: {
    title: 'Services | Softwarerium',
    description: 'Discover Softwarerium’s comprehensive services for your business’s digital needs.',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function Services() {
  // JSON-LD Structured Data for Organization, Breadcrumbs, and Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Softwarerium',
        url: 'https://sofwarerium.vercel.app',
        logo: 'URL_TO_LOGO', // Replace with your logo URL
        description: 'Expert software solutions designed to propel your business forward through innovation, scalability, and excellence.',
        sameAs: [
          'https://twitter.com/softwarerium', // Replace with your social media URLs
          'https://linkedin.com/company/softwarerium',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567', // Replace with your phone number
          contactType: 'Customer Service',
          email: 'info@softwarerium.com', // Replace with your email
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://sofwarerium.vercel.app',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://sofwarerium.vercel.app/services',
          },
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Software Solutions',
        provider: {
          '@type': 'Organization',
          name: 'Softwarerium',
        },
        description: 'Softwarerium offers a range of services including web development, mobile app development, desktop applications, SEO optimization, web design, and UI/UX design.',
        offers: services.map((service) => ({
          '@type': 'Offer',
          name: service.name,
          description: service.description,
          url: `https://sofwarerium.vercel.app/services/${service.slug}`,
        })),
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
        title="Services at Softwarerium"
        description="Discover tailored solutions designed to elevate your digital presence and drive success across web, mobile, and desktop platforms."
        ctaText="Contact Us Now"
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
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: colors.black }}
          >
            Our Services
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            We recommend our clients choose our continuous support and maintenance for services from our expert team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.white }}
              >
                <div className="text-center">
                  <div
                    className="mb-4 sm:mb-6 mx-auto w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                    style={{ color: colors.primary, background: `${colors.primary}15` }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 transition-colors duration-300 hover:text-primary"
                    style={{ color: colors.black }}
                  >
                    {service.name}
                  </h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA text="Let’s Build Your Future" link="/contact" />
    </div>
  );
}