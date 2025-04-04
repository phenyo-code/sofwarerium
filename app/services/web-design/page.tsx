import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import Link from 'next/link'; // Added for breadcrumbs
import { RiPaintFill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRocket, FaUsers, FaPaintBrush } from "react-icons/fa";


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
  title: 'Web Design | Softwarerium',
  description: 'Stunning, user-friendly web designs that captivate your audience and reflect your brand identity.',
  keywords: 'web design, website design, user-friendly design, brand identity, responsive design',
  openGraph: {
    title: 'Web Design | Softwarerium',
    description: 'Visually stunning and intuitive web designs tailored to enhance user experience and engagement.',
    url: 'https://www.softwarerium.com/services/web-design',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
  },
  twitter: {
    title: 'Web Design | Softwarerium',
    description: 'Custom web designs that blend aesthetics and functionality to elevate your online presence.',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function WebDesign() {
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
            'name': 'Web Design',
            'item': 'https://www.softwarerium.com/services/web-design',
          },
        ],
      },
      {
        '@type': 'Service',
        'serviceType': 'Web Design',
        'provider': {
          '@type': 'Organization',
          'name': 'Softwarerium',
        },
        'description': 'Stunning, user-friendly web designs that captivate your audience and reflect your brand identity.',
        'areaServed': 'Worldwide',
        'image': 'URL_TO_IMAGE', // Replace with actual image URL
        'offers': [
          {
            '@type': 'Offer',
            'name': 'Web Design Services',
            'description': 'Visually stunning and intuitive web designs tailored to enhance user experience and engagement.',
            'url': 'https://www.softwarerium.com/services/web-design',
          },
          {
            '@type': 'Offer',
            'name': 'Responsive Web Design',
            'description': 'Seamless experiences across all devices and screens.',
            'url': 'https://www.softwarerium.com/services/web-design',
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
        title="Web Design by Softwarerium"
        description="Create a captivating online presence with stunning, user-friendly designs that reflect your brand and engage your audience."
        ctaText="Get Started Now"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1450&auto=format&fit=crop"
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
              <span>Web Design</span>
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
              <RiPaintFill size={48} />
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: colors.black }}
            >
              Web Design
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12"
              style={{ color: colors.gray }}
            >
              At Softwarerium, we craft visually stunning, user-friendly websites that embody your brand identity and captivate your audience. Our designs prioritize intuitive layouts, seamless navigation, and responsive experiences to drive engagement and leave a lasting impression.
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
            Why Choose Softwarerium for Web Design?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <FaPaintBrush size={32} />, title: 'Creative Aesthetics', desc: 'Eye-catching designs that reflect your unique brand.' },
              { icon: <FaUsers size={32} />, title: 'User-Focused', desc: 'Layouts crafted to enhance usability and engagement.' },
              { icon: <FaRocket size={32} />, title: 'Responsive Design', desc: 'Seamless experiences across all devices and screens.' },
              { icon: <IoMdCheckmarkCircleOutline size={32} />, title: 'Brand Alignment', desc: 'Designs that embody your identity and vision.' },
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
                Our Web Design Process
              </h2>
              <p
                className="text-base sm:text-lg mb-6 leading-relaxed"
                style={{ color: colors.gray }}
              >
                Softwarerium follows a collaborative and creative process to design websites that are both beautiful and functional, ensuring your vision comes to life.
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-base sm:text-lg" style={{ color: colors.gray }}>
                <li><strong>Discovery:</strong> Understanding your brand, goals, and target audience.</li>
                <li><strong>Wireframing:</strong> Sketching layouts to plan the user journey.</li>
                <li><strong>Design:</strong> Crafting high-fidelity visuals with your feedback.</li>
                <li><strong>Refinement:</strong> Polishing the design for pixel-perfect results.</li>
                <li><strong>Handover:</strong> Delivering assets ready for development or integration.</li>
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
                Our web design expertise caters to a variety of industries, creating designs that resonate with specific audiences and purposes.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ color: colors.gray }}>
                {[
                  'E-commerce and Retail',
                  'Creative and Arts',
                  'Technology and Startups',
                  'Education and Nonprofits',
                  'Hospitality and Tourism',
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
                We leverage industry-leading design tools to create visually stunning and functional web designs.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  'Figma',
                  'Adobe XD',
                  'Sketch',
                  'Photoshop',
                  'Illustrator',
                  'Canva',
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
      <CTA text="Ready to Redesign Your Website? Let’s Talk!" link="/contact" />
    </div>
  );
}