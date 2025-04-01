/* eslint-disable @typescript-eslint/no-unused-vars */
import Hero from './components/Hero';
import CTA from './components/CTA';
import Testimonial from './components/Testimonial';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaSearch } from 'react-icons/fa';
import { IoIosDesktop } from 'react-icons/io';
import { CiMobile3 } from 'react-icons/ci';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { JSX } from 'react';
import ScrollToTop from './components/ScrollToTop';

// Define interfaces for data
interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface FeaturedProject {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface Service {
  name: string;
  description: string;
  icon: JSX.Element;
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  service: string;
  icon: JSX.Element;
  link: string;
}

// Color Palette
const colors = {
  primary: '#6393FF',    // Vibrant Blue
  black: '#1A1A1A',      // Deep Black
  gray: '#4A4A4A',       // Medium Gray
  lightGray: '#E5E7EB',  // Light Gray
  white: '#FFFFFF',      // Pure White
};

// Data (unchanged from your original, abbreviated for brevity)
const testimonials: TestimonialItem[] = [
  { quote: 'Softwarerium transformed our online presence with a website that perfectly captures our brand!', name: 'John Doe', role: 'CEO', company: 'TechCorp' },
  { quote: 'Their team delivered a stunning, responsive website on time and exceeded our expectations.', name: 'Jane Smith', role: 'Founder', company: 'StartUp' },
  { quote: 'Highly professional and creative! They helped us rank higher on Google with their SEO expertise.', name: 'Mike Brown', role: 'Marketing Head', company: 'BizGrow' },
];

const processSteps: ProcessStep[] = [
  { title: 'Discovery & Planning', description: 'We start by understanding your goals, audience, and brand to create a tailored strategy.' },
  { title: 'Design & Development', description: 'Our team crafts a visually stunning and functional website, keeping you in the loop.' },
  { title: 'Testing & Launch', description: 'We rigorously test your site for performance and usability before launching it to the world.' },
  { title: 'Support & Growth', description: 'Post-launch, we provide ongoing support and optimization to ensure your site thrives.' },
];

const featuredProjects: FeaturedProject[] = [
  { title: 'E-Commerce Platform for FLARE', description: 'A fully responsive e-commerce site with seamless payment integration.', link: '/projects/retailpro', image: '/Flare.png' },
  { title: 'Portfolio Site for DesignCraft', description: 'A visually stunning portfolio showcasing the client’s creative work.', link: '/projects/creativestudio', image: '/DesignCraftImg.png' },
  { title: 'Corporate Website for Morph', description: 'A professional site with advanced SEO and lead generation features.', link: '/projects/techcorp', image: '/MorphBuilder.png' },
];

const services: Service[] = [
  { name: 'Web Development', description: 'Robust, scalable websites built with the latest technologies for optimal performance.', icon: <RiCodeSSlashLine size={40} /> },
  { name: 'Desktop Applications', description: 'Powerful desktop software tailored to streamline your business operations.', icon: <IoIosDesktop size={40} /> },
  { name: 'Mobile Applications', description: 'High-performance mobile apps for iOS and Android platforms.', icon: <CiMobile3 size={40} /> },
];

const blogPosts: BlogPost[] = [
  {
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore how modern technologies are shaping scalable and dynamic websites.',
    date: 'April 10, 2025',
    service: 'Web Development',
    icon: <RiCodeSSlashLine size={24} />,
    link: '/blog/web-development-trends',
  },
  {
    title: 'Streamlining Operations with Desktop Applications',
    excerpt: 'Learn how custom desktop software can boost your business efficiency.',
    date: 'April 08, 2025',
    service: 'Desktop Applications',
    icon: <IoIosDesktop size={24} />,
    link: '/blog/desktop-applications-efficiency',
  },
  {
    title: 'Mobile Apps in 2025: What’s Next for iOS and Android',
    excerpt: 'Discover emerging trends in mobile app development for engaging user experiences.',
    date: 'April 06, 2025',
    service: 'Mobile App Development',
    icon: <CiMobile3 size={24} />,
    link: '/blog/mobile-app-trends-2025',
  },
];

// Enhanced Metadata for SEO
export const metadata = {
  title: 'Softwarerium | Expert Software Solutions in Web, Mobile & Desktop',
  description: 'Softwarerium provides innovative web development, mobile apps, and desktop applications to boost your business in 2025. Contact us for custom software solutions.',
  keywords: 'Softwarerium, web development, mobile apps, desktop applications, custom software solutions, software development company, IT solutions 2025',
  alternates: {
    canonical: 'https://softwarerium.vercel.app',
  },
  openGraph: {
    title: 'Softwarerium | Expert Software Solutions in Web, Mobile & Desktop',
    description: 'Transform your business with Softwarerium’s custom web development, mobile apps, and desktop solutions tailored for 2025 success.',
    url: 'https://softwarerium.vercel.app',
    siteName: 'Softwarerium',
    images: [
      {
        url: 'URL_TO_IMAGE', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Softwarerium Software Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    title: 'Softwarerium | Expert Software Solutions',
    description: 'Discover how Softwarerium drives business success with innovative software solutions in 2025.',
    image: 'URL_TO_IMAGE', // Replace with actual image URL
    card: 'summary_large_image',
    creator: '@softwarerium', // Replace with your Twitter handle
  },
  robots: 'index, follow',
};

export default function Home() {
  // Enhanced JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Softwarerium',
        url: 'https://softwarerium.vercel.app',
        logo: 'URL_TO_LOGO', // Replace with your logo URL
        description: 'Softwarerium specializes in custom web development, mobile apps, and desktop applications, delivering innovative software solutions for businesses in 2025.',
        sameAs: [
          'https://twitter.com/softwarerium', // Replace with your social media URLs
          'https://linkedin.com/company/softwarerium',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567', // Replace with your phone number
          contactType: 'Customer Service',
          email: 'info@softwarerium.com', // Replace with your email
          areaServed: 'United States',
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
            item: 'https://softwarerium.vercel.app',
          },
        ],
      },
      {
        '@type': 'WebSite',
        url: 'https://softwarerium.vercel.app',
        name: 'Softwarerium',
        description: 'Softwarerium offers expert software solutions including custom web development, mobile apps, and desktop applications for businesses.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://softwarerium.vercel.app/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-US',
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
      <section aria-label="Softwarerium Home">
        <Hero
          title="Softwarerium: Your Software Solutions Partner"
          description="Expert web development, mobile apps, and desktop applications designed to propel your business forward in 2025 through innovation and scalability."
          ctaText="Explore Our Projects"
          ctaLink="/projects"
          bgImage="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: colors.black }}
          >
            Services
          </h1>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            Discover Softwarerium’s cutting-edge software solutions crafted to elevate your business in 2025.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <article
                key={service.name}
                className="p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.white }}
              >
                <div
                  className="mb-4 sm:mb-6 mx-auto w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                  style={{ color: colors.primary, background: `${colors.primary}15` }}
                  aria-label={`${service.name} icon`}
                >
                  {service.icon}
                </div>
                <h2
                  className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center transition-colors duration-300 hover:text-primary"
                  style={{ color: colors.black }}
                >
                  {service.name}
                </h2>
                <p className="text-sm sm:text-base text-center" style={{ color: colors.gray }}>
                  {service.description}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/services">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-opacity-90"
                style={{ background: colors.primary, color: colors.white }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.black }}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8"
            style={{ color: colors.white }}
          >
            Why Choose Softwarerium for Software Solutions?
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12"
            style={{ color: colors.lightGray }}
          >
            Softwarerium fuses innovation and precision to deliver custom software that exceeds expectations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Tailored Software Innovation', desc: 'Unique solutions designed for your brand’s DNA.' },
              { title: 'Fast Software Delivery', desc: 'Quick, reliable execution without cutting corners.' },
              { title: 'SEO Excellence', desc: 'Boost your visibility with Softwarerium’s proven tactics.' },
              { title: 'Cross-Device Compatibility', desc: 'Seamless experiences on every screen with Softwarerium.' },
              { title: 'Continuous Support', desc: 'Ongoing care to keep your software ahead.' },
              { title: 'Your Vision, Our Expertise', desc: 'Softwarerium collaborates to bring your ideas to life.' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 transition-all duration-300"
              >
                <FaCheckCircle
                  className="mx-auto mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110"
                  size={32}
                  style={{ color: colors.primary }}
                  aria-hidden="true"
                />
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
                  style={{ color: colors.white }}
                >
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: colors.lightGray }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.white }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: colors.black }}
          >
            Softwarerium’s Featured Software Projects
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            See how Softwarerium’s expertise in software development drives success for our clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border transition-all duration-300 overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} - Softwarerium Project`}
                  width={500}
                  height={300}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-4 sm:p-6">
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary"
                    style={{ color: colors.black }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base mb-4"
                    style={{ color: colors.gray }}
                  >
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="flex items-center text-sm sm:text-base font-medium transition-colors duration-300 hover:underline"
                    style={{ color: colors.primary }}
                  >
                    View Project
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center mt-8 sm:mt-12">
            <Link href="/projects">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 border border-primary hover:bg-primary hover:text-white"
                style={{ color: colors.primary }}
              >
                Explore More Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: colors.black }}
          >
            Latest Blog Posts
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            Stay updated with Softwarerium’s insights on software development trends and solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.title}
                className="p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.white }}
              >
                <div className="text-center">
                  <div
                    className="mb-4 sm:mb-6 mx-auto w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                    style={{ color: colors.primary, background: `${colors.primary}15` }}
                    aria-label={`${post.service} icon`}
                  >
                    {post.icon}
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 transition-colors duration-300 hover:text-primary"
                    style={{ color: colors.black }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base mb-2 italic"
                    style={{ color: colors.gray }}
                  >
                    {post.date} | {post.service}
                  </p>
                  <p
                    className="text-sm sm:text-base mb-4"
                    style={{ color: colors.gray }}
                  >
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.link}
                    className="flex items-center justify-center text-sm sm:text-base font-medium transition-colors duration-300 hover:underline"
                    style={{ color: colors.primary }}
                  >
                    Read Blog
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center mt-8 sm:mt-12">
            <Link href="/blog">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 border border-primary hover:bg-primary hover:text-white"
                style={{ color: colors.primary }}
              >
                More Blogs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: colors.black }}
          >
            Softwarerium’s Software Development Process
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            Softwarerium’s disciplined approach ensures your software vision becomes a reality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <article
                key={index}
                className="p-4 sm:p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.white }}
              >
                <div
                  className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full font-bold transition-transform duration-300 hover:scale-110"
                  style={{ background: colors.primary, color: colors.white }}
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
                  style={{ color: colors.black }}
                >
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: colors.gray }}>
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials, CTA, and Newsletter Sections */}
      <Testimonial testimonials={testimonials} />
      <CTA text="Start Your Softwarerium Project Today" link="/contact" />
    </div>
  );
}