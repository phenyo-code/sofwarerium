import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import Link from 'next/link';
import { FaSearch, FaRocket, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


// Color Palette
const colors = {
  primary: '#6393FF',    // Vibrant Blue
  black: '#1A1A1A',      // Deep Black
  gray: '#4A4A4A',       // Medium Gray
  lightGray: '#E5E7EB',  // Light Gray
  white: '#FFFFFF',      // Pure White
};

// Metadata for this page
export const metadata = {
  title: 'SEO Optimization | Softwarerium',
  description: 'Boost your search engine rankings and drive organic traffic with Softwarerium’s proven SEO strategies.',
  keywords: 'SEO optimization, search engine optimization, organic traffic, SEO services, website ranking',
  openGraph: {
    title: 'SEO Optimization | Softwarerium',
    description: 'Data-driven SEO services to elevate your online visibility and convert visitors into customers.',
    url: 'https://softwarerium.co.za/services/seo-optimization',
    image: 'https://softwarerium.co.za/opengraph-image.png', // Replace with an actual image URL
  },
  twitter: {
    title: 'SEO Optimization | Softwarerium',
    description: 'Proven SEO strategies to improve your search rankings and grow your business organically.',
    image: 'https://softwarerium.co.za/opengraph-image.png', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function SEOOptimization() {
  // JSON-LD Structured Data for Organization, Breadcrumbs, and Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'Softwarerium',
        'url': 'https://softwarerium.co.za',
        'logo': 'https://softwarerium.co.za/logo.png', // Replace with actual logo URL
        'description': 'Expert software solutions designed to propel your business forward through innovation, scalability, and excellence.',
        'sameAs': [
          'https://twitter.com/softwarerium',
          'https://linkedin.com/company/softwarerium',
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+1-555-123-4567', // Replace with actual phone number
          'contactType': 'Customer Service',
          'email': 'info@softwarerium.com', // Replace with actual email
        },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://softwarerium.co.za',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://softwarerium.co.za/services',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'SEO Optimization',
            'item': 'https://softwarerium.co.za/services/seo-optimization',
          },
        ],
      },
      {
        '@type': 'Service',
        'serviceType': 'SEO Optimization',
        'provider': {
          '@type': 'Organization',
          'name': 'Softwarerium',
        },
        'description': 'Boost your search engine rankings and drive organic traffic with Softwarerium’s proven SEO strategies.',
        'areaServed': 'Worldwide',
        'image': 'https://softwarerium.co.za/opengraph-image.png', // Replace with actual image URL
        'offers': [
          {
            '@type': 'Offer',
            'name': 'SEO Optimization Services',
            'description': 'Data-driven SEO services to elevate your online visibility and convert visitors into customers.',
            'url': 'https://softwarerium.co.za/services/seo-optimization',
          },
          {
            '@type': 'Offer',
            'name': 'Keyword Research & Strategy',
            'description': 'Targeting high-value keywords to attract your ideal audience.',
            'url': 'https://softwarerium.co.za/services/seo-optimization',
          },
        ],
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
        title="SEO Optimization by Softwarerium"
        description="Skyrocket your online presence with proven SEO strategies that drive organic traffic, boost rankings, and grow your business."
        ctaText="Get Started Now"
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
              <Link href="/services" className="hover:underline" style={{ color: colors.primary }}>
                Services
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span>SEO Optimization</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Overview Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="mb-4 sm:mb-6 mx-auto w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full max-w-fit transition-colors duration-300"
              style={{ color: colors.primary, background: `${colors.primary}15`, maxWidth: 'fit-content', padding: '10px 18px' }}
            >
              <FaSearch size={48} />
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: colors.black }}
            >
              SEO Optimization
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12"
              style={{ color: colors.gray }}
            >
              At Softwarerium, we elevate your digital presence with data-driven SEO services. Our strategies are designed to improve your search engine rankings, attract high-quality organic traffic, and convert visitors into loyal customers, ensuring long-term success for your business.
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
            Why Choose Softwarerium for SEO?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <FaRocket size={32} />, title: 'Fast Results', desc: 'Quick wins with targeted optimization strategies.' },
              { icon: <FaChartLine size={32} />, title: 'Higher Rankings', desc: 'Climb search engine results with proven tactics.' },
              { icon: <FaShieldAlt size={32} />, title: 'Safe Practices', desc: 'White-hat SEO to protect your site’s reputation.' },
              { icon: <IoMdCheckmarkCircleOutline size={32} />, title: 'Measurable Growth', desc: 'Trackable improvements in traffic and conversions.' },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.lightGray }}
              >
                <div
                  className="mb-4 mx-auto w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ color: colors.primary }}
                >
                  {benefit.icon}
                </div>
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2 text-center"
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
            {/* Optimization Process */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: colors.black }}
              >
                Our SEO Optimization Process
              </h2>
              <p
                className="text-base sm:text-lg mb-6 leading-relaxed"
                style={{ color: colors.gray }}
              >
                Softwarerium employs a comprehensive, results-oriented approach to SEO, ensuring your website thrives in search engine results.
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-base sm:text-lg" style={{ color: colors.gray }}>
                <li><strong>Audit & Analysis:</strong> We assess your site’s current performance and identify opportunities.</li>
                <li><strong>Keyword Research:</strong> Targeting high-value keywords to attract your ideal audience.</li>
                <li><strong>On-Page Optimization:</strong> Enhancing content, meta tags, and site structure for search engines.</li>
                <li><strong>Off-Page Strategies:</strong> Building quality backlinks and boosting domain authority.</li>
                <li><strong>Monitoring & Reporting:</strong> Ongoing tracking and detailed reports to measure success.</li>
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
                Our SEO expertise helps businesses across various sectors improve their online visibility and reach their target markets effectively.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ color: colors.gray }}>
                {[
                  'E-commerce and Retail',
                  'Healthcare and Wellness',
                  'Technology and SaaS',
                  'Real Estate and Property',
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

            {/* Tools */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: colors.black }}
              >
                Tools We Use
              </h2>
              <p
                className="text-base sm:text-lg mb-6 leading-relaxed"
                style={{ color: colors.gray }}
              >
                We leverage industry-standard SEO tools to analyze, optimize, and monitor your website’s performance.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  'Google Analytics',
                  'SEMrush',
                  'Ahrefs',
                  'Moz',
                  'Yoast SEO',
                  'Screaming Frog',
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-opacity-90"
                    style={{ background: colors.primary, color: colors.white }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA text="Ready to Dominate Search Results? Let’s Talk!" link="/contact" />
    </div>
  );
}