import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import Link from 'next/link'; // Added for breadcrumbs
import { SiMaterialdesignicons } from "react-icons/si";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";

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
  title: 'UI/UX Design | Softwarerium',
  description: 'Intuitive, user-centered UI/UX designs that enhance usability and engagement for your digital products.',
  keywords: 'UI/UX design, user interface design, user experience design, intuitive design, usability',
  openGraph: {
    title: 'UI/UX Design | Softwarerium',
    description: 'User-centered UI/UX designs that blend aesthetics and functionality to elevate your digital experience.',
    url: 'https://www.softwarerium.com/services/ui-ux-design',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
  },
  twitter: {
    title: 'UI/UX Design | Softwarerium',
    description: 'Intuitive and engaging UI/UX designs crafted to improve usability and delight your users.',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function UIUXDesign() {
  // JSON-LD Structured Data for Organization, Breadcrumbs, and Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'Softwarerium',
        'url': 'https://www.softwarerium.com',
        'logo': 'URL_TO_LOGO', // Replace with actual logo URL
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
            'item': 'https://www.softwarerium.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://www.softwarerium.com/services',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'UI/UX Design',
            'item': 'https://www.softwarerium.com/services/ui-ux-design',
          },
        ],
      },
      {
        '@type': 'Service',
        'serviceType': 'UI/UX Design',
        'provider': {
          '@type': 'Organization',
          'name': 'Softwarerium',
        },
        'description': 'Intuitive, user-centered UI/UX designs that enhance usability and engagement for your digital products.',
        'areaServed': 'Worldwide',
        'image': 'URL_TO_IMAGE', // Replace with actual image URL
        'offers': [
          {
            '@type': 'Offer',
            'name': 'UI/UX Design Services',
            'description': 'User-centered UI/UX designs that blend aesthetics and functionality to elevate your digital experience.',
            'url': 'https://www.softwarerium.com/services/ui-ux-design',
          },
          {
            '@type': 'Offer',
            'name': 'Prototyping & Validation',
            'description': 'Interactive prototypes and user testing to refine the experience.',
            'url': 'https://www.softwarerium.com/services/ui-ux-design',
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
        title="UI/UX Design by Softwarerium"
        description="Elevate your digital products with intuitive, user-centered designs that enhance usability and captivate your audience."
        ctaText="Get Started Now"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1551288049-b5dcea66f847?q=80&w=1450&auto=format&fit=crop"
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
              <span>UI/UX Design</span>
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
              <SiMaterialdesignicons size={48} />
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: colors.black }}
            >
              UI/UX Design
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12"
              style={{ color: colors.gray }}
            >
              At Softwarerium, our UI/UX design services focus on creating intuitive, user-centered interfaces that enhance usability and delight your users. We combine stunning aesthetics with seamless functionality to transform your digital products into engaging experiences that drive results.
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
            Why Choose Softwarerium for UI/UX Design?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <FaUsers size={32} />, title: 'User-Centric', desc: 'Designs focused on your audience’s needs and behaviors.' },
              { icon: <FaLightbulb size={32} />, title: 'Innovative Ideas', desc: 'Creative solutions that set your product apart.' },
              { icon: <FaRocket size={32} />, title: 'Fast Prototyping', desc: 'Quick iterations to refine the user experience.' },
              { icon: <IoMdCheckmarkCircleOutline size={32} />, title: 'Seamless Flow', desc: 'Intuitive navigation for maximum engagement.' },
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
            {/* Design Process */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: colors.black }}
              >
                Our UI/UX Design Process
              </h2>
              <p
                className="text-base sm:text-lg mb-6 leading-relaxed"
                style={{ color: colors.gray }}
              >
                Softwarerium employs a user-focused design process to create interfaces that are both beautiful and highly functional, ensuring an exceptional user experience.
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-base sm:text-lg" style={{ color: colors.gray }}>
                <li><strong>Research:</strong> Analyzing user needs, behaviors, and market trends.</li>
                <li><strong>Wireframing:</strong> Mapping out intuitive layouts and flows.</li>
                <li><strong>Prototyping:</strong> Building interactive models for testing.</li>
                <li><strong>Design:</strong> Crafting polished, visually appealing interfaces.</li>
                <li><strong>Validation:</strong> Iterating based on user feedback and testing.</li>
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
                Our UI/UX design services enhance digital products across diverse industries, delivering tailored experiences that meet specific user demands.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ color: colors.gray }}>
                {[
                  'Mobile Apps and Tech',
                  'E-commerce and Retail',
                  'Healthcare and Wellness',
                  'Education and E-learning',
                  'Gaming and Entertainment',
                  'Enterprise Solutions',
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
                We use top-tier UI/UX design tools to create interfaces that are both visually stunning and user-friendly.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  'Figma',
                  'Adobe XD',
                  'Sketch',
                  'InVision',
                  'Zeplin',
                  'Miro',
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
      <CTA text="Ready to Elevate Your User Experience? Let’s Talk!" link="/contact" />
    </div>
  );
}