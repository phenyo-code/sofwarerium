import Hero from '../components/Hero';
import Link from 'next/link'; // Added for breadcrumbs
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
  title: 'Contact Us | Softwarerium',
  description: 'Get in touch with Softwarerium for expert software solutions. Reach out via phone, email, or our contact form.',
  keywords: 'contact Softwarerium, software solutions, web development, mobile apps, SEO, UI/UX design',
  openGraph: {
    title: 'Contact Us | Softwarerium',
    description: 'Contact Softwarerium to discuss your next project. We’re here to help with web, mobile, and more.',
    url: 'https://www.softwarerium.com/contact',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
  },
  twitter: {
    title: 'Contact Us | Softwarerium',
    description: 'Reach out to Softwarerium for custom software solutions tailored to your needs.',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function Contact() {
  // JSON-LD Structured Data for Organization, Breadcrumbs, and Contact Page
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
        'contactPoint': [
          {
            '@type': 'ContactPoint',
            'telephone': '+1-555-123-4567', // Replace with actual phone number
            'contactType': 'Customer Service',
            'email': 'info@softwarerium.com', // Replace with actual email
            'contactOption': 'TollFree',
            'areaServed': 'Worldwide',
          },
          {
            '@type': 'ContactPoint',
            'email': 'info@softwarerium.com', // Replace with actual email
            'contactType': 'Sales',
            'areaServed': 'Worldwide',
          },
        ],
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
            'name': 'Contact',
            'item': 'https://www.softwarerium.com/contact',
          },
        ],
      },
      {
        '@type': 'ContactPage',
        'name': 'Contact Softwarerium',
        'description': 'Get in touch with Softwarerium for expert software solutions. Reach out via phone, email, or our contact form.',
        'url': 'https://www.softwarerium.com/contact',
        'publisher': {
          '@type': 'Organization',
          'name': 'Softwarerium',
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
        title="Contact Softwarerium"
        description="Ready to bring your vision to life? Get in touch with us today to discuss your project and discover how we can help."
        ctaText="Send Us a Message"
        ctaLink="#contact-form"
        bgImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1450&auto=format&fit=crop"
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
              <span>Contact</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
            style={{ color: colors.black }}
          >
            How to Reach Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { icon: <FaEnvelope size={32} />, title: 'Email Us', desc: 'info@softwarerium.com', href: 'mailto:info@softwarerium.com' },
              { icon: <FaPhone size={32} />, title: 'Call Us', desc: '+1 (555) 123-4567', href: 'tel:+15551234567' },
              { icon: <FaMapMarkerAlt size={32} />, title: 'Visit Us', desc: '123 Innovation Drive, Tech City, TC 45678', href: '#' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                style={{ background: colors.white }}
              >
                <div
                  className="mb-4 mx-auto w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ color: colors.primary }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ color: colors.black }}
                >
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: colors.gray }}>
                  {item.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.white }} id="contact-form">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
            style={{ color: colors.black }}
          >
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                  style={{ borderColor: colors.gray }}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                  style={{ borderColor: colors.gray }}
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                style={{ borderColor: colors.gray }}
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                style={{ borderColor: colors.gray }}
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-opacity-90"
                style={{ background: colors.primary, color: colors.white }}
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}