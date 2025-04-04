// app/services/mobile-app-development/page.tsx
import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import Link from 'next/link';
import { CiMobile3 } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";


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
  title: 'Mobile App Development | Softwarerium',
  description: 'Engaging, high-performance mobile apps for iOS and Android, designed to drive user engagement and business growth.',
  keywords: 'mobile app development, iOS apps, Android apps, custom mobile apps, app development services',
  openGraph: {
    title: 'Mobile App Development | Softwarerium',
    description: 'High-performance mobile apps built for iOS and Android to enhance user engagement and streamline your business.',
    url: 'https://softwarerium.co.za/services/mobile-app-development',
    image: 'https://softwarerium.co.za/opengraph-image.png', // Replace with an actual image URL
  },
  twitter: {
    title: 'Mobile App Development | Softwarerium',
    description: 'Custom mobile apps for iOS and Android that deliver speed, scalability, and a seamless user experience.',
    image: 'https://softwarerium.co.za/opengraph-image.png', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function MobileAppDevelopment() {
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
            name: 'Mobile App Development',
            item: 'https://softwarerium.co.za/services/mobile-app-development',
          },
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Mobile App Development',
        provider: {
          '@type': 'Organization',
          name: 'Softwarerium',
        },
        description: 'Engaging, high-performance mobile apps for iOS and Android, designed to drive user engagement and business growth.',
        offers: {
          '@type': 'Offer',
          name: 'Custom Mobile App Development',
          description: 'High-performance mobile apps built for iOS and Android to enhance user engagement and streamline your business.',
          url: 'https://softwarerium.co.za/services/mobile-app-development',
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
        title="Mobile App Development by Softwarerium"
        description="Transform your ideas into engaging, high-performance mobile apps for iOS and Android, designed to captivate users and grow your business."
        ctaText="Get Started Now"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1512941937669-5d9c8e419e42?q=80&w=1450&auto=format&fit=crop"
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
              <span>Mobile App Development</span>
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
              <CiMobile3 size={48} />
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: colors.black }}
            >
              Mobile App Development
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12"
              style={{ color: colors.gray }}
            >
              At Softwarerium, we specialize in crafting mobile applications that deliver exceptional user experiences on iOS and Android platforms. From startups to enterprises, our apps are built to be fast, scalable, and tailored to your unique goals, ensuring maximum engagement and impact.
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
            Why Choose Softwarerium for Mobile Apps?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <FaRocket size={32} />, title: 'High Performance', desc: 'Apps optimized for speed and responsiveness on all devices.' },
              { icon: <FaShieldAlt size={32} />, title: 'Secure Design', desc: 'Built-in security to protect user data and transactions.' },
              { icon: <FaUsers size={32} />, title: 'User-Centric', desc: 'Intuitive interfaces that keep users engaged and satisfied.' },
              { icon: <IoMdCheckmarkCircleOutline size={32} />, title: 'Cross-Platform', desc: 'Seamless experiences on both iOS and Android.' },
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
                Softwarerium follows a meticulous process to deliver mobile apps that meet your business objectives and exceed user expectations.
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-base sm:text-lg" style={{ color: colors.gray }}>
                <li><strong>Discovery:</strong> We gather insights into your goals, audience, and app requirements.</li>
                <li><strong>Design:</strong> Crafting wireframes and prototypes for a user-friendly experience.</li>
                <li><strong>Development:</strong> Agile coding with modern frameworks for iOS and Android.</li>
                <li><strong>Testing:</strong> Thorough testing for functionality, performance, and compatibility.</li>
                <li><strong>Launch & Support:</strong> App store deployment and ongoing updates to keep it thriving.</li>
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
                Our mobile app development expertise spans multiple industries, delivering tailored solutions to meet diverse needs.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ color: colors.gray }}>
                {[
                  'E-commerce and Retail',
                  'Healthcare and Wellness',
                  'Education and E-learning',
                  'Travel and Hospitality',
                  'Finance and Banking',
                  'Entertainment and Media',
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
                We leverage the latest mobile development tools and frameworks to create apps that are fast, reliable, and future-ready.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  'Swift (iOS)',
                  'Kotlin (Android)',
                  'React Native',
                  'Flutter',
                  'Firebase',
                  'GraphQL',
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
      <CTA text="Ready to Launch Your Mobile App? Let’s Talk!" link="/contact" />
    </div>
  );
}