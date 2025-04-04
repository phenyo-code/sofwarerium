'use client'; // Make it a client component for form handling

import Hero from '../components/Hero';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSpinner } from 'react-icons/fa';
import { sendMail } from '../actions/sendMail'; // Adjust path
import { useRef, useState, useTransition } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Color Palette
const colors = {
  primary: '#6393FF',
  black: '#1A1A1A',
  gray: '#4A4A4A',
  lightGray: '#E5E7EB',
  white: '#FFFFFF',
};

export default function Contact() {
  const [status, setStatus] = useState<{ success: boolean; message?: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null); // Ref for form reset
  const [isPending, startTransition] = useTransition(); // Transition for async submission

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await sendMail(formData);
      setStatus(result);

      if (result.success) {
        formRef.current?.reset(); // Reset form on success
        setTimeout(() => setStatus(null), 5000); // Clear status after 5 seconds
      }
    });
  };

  // JSON-LD unchanged (omitted for brevity)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Softwarerium',
        url: 'https://sofwarerium.vercel.app',
        logo: 'URL_TO_LOGO',
        description: 'Expert software solutions designed to propel your business forward through innovation, scalability, and excellence.',
        sameAs: ['https://twitter.com/softwarerium', 'https://linkedin.com/company/softwarerium'],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+1-555-123-4567',
            contactType: 'Customer Service',
            email: 'info@softwarerium.com',
            contactOption: 'TollFree',
            areaServed: 'Worldwide',
          },
          {
            '@type': 'ContactPoint',
            email: 'info@softwarerium.com',
            contactType: 'Sales',
            areaServed: 'Worldwide',
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sofwarerium.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://sofwarerium.vercel.app/contact' },
        ],
      },
      {
        '@type': 'ContactPage',
        name: 'Contact Softwarerium',
        description: 'Get in touch with Softwarerium for expert software solutions. Reach out via phone, email, or our contact form.',
        url: 'https://sofwarerium.vercel.app/contact',
        publisher: { '@type': 'Organization', name: 'Softwarerium' },
      },
    ],
  };

  return (
    <div className="font-sans">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                <div className="mb-4 mx-auto w-12 h-12 flex items-center justify-center rounded-full" style={{ color: colors.primary }}>
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: colors.black }}>
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
          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                  style={{ borderColor: colors.gray }}
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                  style={{ borderColor: colors.gray }}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Services Dropdown (Replaces Subject) */}
            <div>
              <label htmlFor="services" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                Services Needed *
              </label>
              <select
                id="services"
                name="services"
                multiple
                required
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                style={{ borderColor: colors.gray }}
              >
                <option value="web-development">Web Development</option>
                <option value="desktop-applications">Desktop Applications</option>
                <option value="mobile-app-development">Mobile App Development</option>
                <option value="seo-optimization">SEO Optimization</option>
                <option value="web-design">Web Design</option>
                <option value="ui-ux-design">UI/UX Design</option>
              </select>
              <p className="text-xs mt-1" style={{ color: colors.gray }}>
                Hold Ctrl (Windows) or Cmd (Mac) to select multiple options.
              </p>
            </div>

            {/* Budget Dropdown (ZAR) */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                Project Budget (ZAR) *
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                style={{ borderColor: colors.gray }}
              >
                <option value="">Select a budget range</option>
                <option value="under-3500">Under R3,500</option>
                <option value="3500-10000">R3,500 - R10,000</option>
                <option value="10000-25000">R10,000 - R25,000</option>
                <option value="25000-50000">R25,000 - R50,000</option>
                <option value="50000+">R50,000+</option>
              </select>
            </div>

            {/* Continuous Support Dropdown */}
            <div>
              <label htmlFor="support" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                Continuous Support Needed? *
              </label>
              <select
                id="support"
                name="support"
                required
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                style={{ borderColor: colors.gray }}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes, I need ongoing support</option>
                <option value="no">No, one-time project only</option>
                <option value="maybe">Not sure, let’s discuss</option>
              </select>
            </div>

            {/* Optional Description (Replaces Message) */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2" style={{ color: colors.black }}>
                Project Description (Optional)
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 shadow-sm"
                style={{ borderColor: colors.gray }}
                placeholder="Tell us more about your project, goals, or specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                disabled={isPending}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-opacity-90 flex items-center justify-center mx-auto"
                style={{ background: colors.primary, color: colors.white }}
              >
                {isPending ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Sending
                  </>
                ) : (
                  'Submit Message'
                )}
              </button>
            </div>
            {status && (
              <p className={`text-center mt-4 ${status.success ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}