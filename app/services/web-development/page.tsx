// app/services/web-development/page.tsx
import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import Link from 'next/link';
import { RiCodeSSlashLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRocket, FaShieldAlt, FaCogs } from "react-icons/fa";


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
  title: 'Web Development | Softwarerium',
  description: 'Scalable, high-performance websites built with cutting-edge technologies to elevate your online presence.',
  keywords: 'web development, custom websites, e-commerce development, website performance, web solutions',
  openGraph: {
    title: 'Web Development | Softwarerium',
    description: 'Robust and scalable websites tailored to your business needs, from e-commerce to corporate solutions.',
    url: 'https://softwarerium.co.za/services/web-development',
    image: 'https://softwarerium.co.za/opengraph-image.png', // Replace with an actual image URL
  },
  twitter: {
    title: 'Web Development | Softwarerium',
    description: 'Performance-driven web development services to create fast, secure, and scalable websites.',
    image: 'https://softwarerium.co.za/opengraph-image.png', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function WebDevelopment() {
  // JSON-LD Structured Data for Organization, Breadcrumbs, and Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Softwarerium',
        url: 'https://softwarerium.co.za',
        logo: 'https://softwarerium.co.za/logo.png', // Replace with your logo URL
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
            name: 'Web Development',
            item: 'https://softwarerium.co.za/services/web-development',
          },
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Web Development',
        provider: {
          '@type': 'Organization',
          name: 'Softwarerium',
        },
        description: 'Scalable, high-performance websites built with cutting-edge technologies to elevate your online presence.',
        offers: {
          '@type': 'Offer',
          name: 'Custom Web Development',
          description: 'Robust and scalable websites tailored to your business needs, from e-commerce to corporate solutions.',
          url: 'https://softwarerium.co.za/services/web-development',
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
        title="Web Development by Softwarerium"
        description="Build a powerful online presence with scalable, high-performance websites crafted to meet your business goals and exceed expectations."
        ctaText="Get Started Now"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1450&auto=format&fit=crop"
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
              <span>Web Development</span>
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
              <RiCodeSSlashLine size={48} />
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: colors.black }}
            >
              Web Development
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12"
              style={{ color: colors.gray }}
            >
              At Softwarerium, we create robust, scalable websites using the latest technologies to ensure your online presence is fast, secure, and perfectly aligned with your business objectives. Whether it’s an e-commerce platform, a corporate site, or a custom web application, we deliver solutions that drive performance and growth.
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
            Why Choose Softwarerium for Web Development?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <FaRocket size={32} />, title: 'High Performance', desc: 'Fast-loading sites optimized for speed and user experience.' },
              { icon: <FaShieldAlt size={32} />, title: 'Secure Coding', desc: 'Built with security best practices to protect your data.' },
              { icon: <FaCogs size={32} />, title: 'Scalable Solutions', desc: 'Websites that grow with your business seamlessly.' },
              { icon: <IoMdCheckmarkCircleOutline size={32} />, title: 'Custom Features', desc: 'Tailored functionality to meet your unique needs.' },
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
            {/* Development Process */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: colors.black }}
              >
                Our Web Development Process
              </h2>
              <p
                className="text-base sm:text-lg mb-6 leading-relaxed"
                style={{ color: colors.gray }}
              >
                Softwarerium follows a streamlined process to deliver websites that are both visually stunning and technically sound, ensuring your project succeeds from concept to launch.
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-base sm:text-lg" style={{ color: colors.gray }}>
                <li><strong>Planning:</strong> We define your goals, audience, and technical requirements.</li>
                <li><strong>Design:</strong> Creating wireframes and mockups for a user-friendly layout.</li>
                <li><strong>Development:</strong> Coding with modern frameworks for optimal performance.</li>
                <li><strong>Testing:</strong> Ensuring cross-browser compatibility and functionality.</li>
                <li><strong>Launch & Support:</strong> Deploying your site with ongoing maintenance.</li>
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
                Our web development expertise supports a wide range of industries, delivering tailored websites that address specific business challenges.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ color: colors.gray }}>
                {[
                  'E-commerce and Retail',
                  'Healthcare and Medical',
                  'Technology and SaaS',
                  'Education and E-learning',
                  'Finance and Banking',
                  'Professional Services',
                ].map((industry, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <IoMdCheckmarkCircleOutline size={20} style={{ color: colors.primary }} />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: colors.black }}
              >
                Technologies We Use
              </h2>
              <p
                className="text-base sm:text-lg mb-6 leading-relaxed"
                style={{ color: colors.gray }}
              >
                We utilize cutting-edge tools and frameworks to build websites that are fast, secure, and future-proof.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  'Next.js',
                  'React',
                  'Node.js',
                  'Tailwind CSS',
                  'WordPress',
                  'Django',
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-md"
                    style={{ background: colors.primary, color: colors.white }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA text="Ready to Launch Your Website? Let’s Talk!" link="/contact" />
    </div>
  );
}