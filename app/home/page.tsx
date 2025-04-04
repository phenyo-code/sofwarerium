/* eslint-disable @typescript-eslint/no-unused-vars */
import Hero from '../components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaSearch } from 'react-icons/fa';
import { IoIosDesktop } from 'react-icons/io';
import { CiMobile3 } from 'react-icons/ci';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { JSX } from 'react';
import ChatBot from '../components/ChatBot';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stats from '../components/Stats';

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
  primary: '#6393FF',
  black: '#1A1A1A',
  gray: '#4A4A4A',
  lightGray: '#E5E7EB',
  white: '#FFFFFF',
};

// Data (unchanged structure, optimized descriptions for SEO)
const testimonials: TestimonialItem[] = [
  { quote: 'Softwarerium transformed our online presence with a website that perfectly captures our brand!', name: 'John Doe', role: 'CEO', company: 'TechCorp' },
  { quote: 'Their team delivered a stunning, responsive website on time and exceeded our expectations.', name: 'Jane Smith', role: 'Founder', company: 'StartUp' },
  { quote: 'Highly professional and creative! They helped us rank higher on Google with their SEO expertise.', name: 'Mike Brown', role: 'Marketing Head', company: 'BizGrow' },
];

const processSteps: ProcessStep[] = [
  { title: 'Discovery & Planning', description: 'We analyze your business needs to craft a custom software strategy for web, mobile, or desktop solutions.' },
  { title: 'Design & Development', description: 'Expert design and coding for high-performance websites, apps, and software tailored to your goals.' },
  { title: 'Testing & Launch', description: 'Rigorous testing ensures your software excels in usability and speed before going live.' },
  { title: 'Support & Growth', description: 'Ongoing optimization and support to keep your web, mobile, or desktop solutions competitive.' },
];

const featuredProjects: FeaturedProject[] = [
  { title: 'E-Commerce Platform for FLARE', description: 'A responsive e-commerce website with seamless payment integration built by Softwarerium.', link: '/projects/retailpro', image: '/Flare.png' },
  { title: 'Portfolio Site for DesignCraft', description: 'A stunning portfolio website showcasing creative work, designed by Softwarerium.', link: '/projects/creativestudio', image: '/DesignCraftImg.png' },
  { title: 'Corporate Website for Morph', description: 'A professional corporate site with advanced SEO features by Softwarerium.', link: '/projects/techcorp', image: '/MorphBuilder.png' },
];

const services: Service[] = [
  { name: 'Web Development', description: 'Custom web development services for scalable, SEO-optimized websites using cutting-edge technology.', icon: <RiCodeSSlashLine size={40} /> },
  { name: 'Desktop Applications', description: 'Tailored desktop application development to enhance business efficiency and performance.', icon: <IoIosDesktop size={40} /> },
  { name: 'Mobile Applications', description: 'High-quality mobile app development for iOS and Android to engage your audience.', icon: <CiMobile3 size={40} /> },
];

const blogPosts: BlogPost[] = [
  {
    title: 'Top Web Development Trends for 2025',
    excerpt: 'Discover the latest web development techniques to boost your site’s ranking and performance.',
    date: 'April 10, 2025',
    service: 'Web Development',
    icon: <RiCodeSSlashLine size={24} />,
    link: '/blog/web-development-trends',
  },
  {
    title: 'How Desktop Applications Streamline Operations',
    excerpt: 'Learn how custom desktop software can optimize your business processes in 2025.',
    date: 'April 08, 2025',
    service: 'Desktop Applications',
    icon: <IoIosDesktop size={24} />,
    link: '/blog/desktop-applications-efficiency',
  },
  {
    title: 'Mobile App Development: Trends to Watch in 2025',
    excerpt: 'Explore emerging mobile app development trends for superior user experiences.',
    date: 'April 06, 2025',
    service: 'Mobile App Development',
    icon: <CiMobile3 size={24} />,
    link: '/blog/mobile-app-trends-2025',
  },
];

// Enhanced Metadata for SEO (Optimized for Service Keywords)
export const metadata = {
  title: 'Softwarerium | Custom Web Development, Mobile Apps & Desktop Solutions',
  description: 'Softwarerium offers expert web development, mobile app development, and desktop application services. Boost your business with custom software solutions designed for 2025 success.',
  keywords: 'custom web development, mobile app development, desktop applications, software development services, Softwarerium, SEO-friendly websites, IT solutions 2025, South Africa software company',
  alternates: {
    canonical: 'https://softwarerium.co.za',
  },
  openGraph: {
    title: 'Softwarerium | Custom Web Development, Mobile Apps & Desktop Solutions',
    description: 'Elevate your business with Softwarerium’s custom web development, mobile apps, and desktop software services tailored for 2025.',
    url: 'https://softwarerium.co.za',
    siteName: 'Softwarerium',
    images: [
      {
        url: 'https://softwarerium.co.za/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Softwarerium Custom Software Development Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    title: 'Softwarerium | Custom Web Development, Mobile Apps & Desktop Solutions',
    description: 'Transform your business with Softwarerium’s expert software development services in 2025.',
    image: 'https://softwarerium.co.za/opengraph-image.png',
    card: 'summary_large_image',
    creator: '@softwarerium',
  },
  robots: 'index, follow',
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Softwarerium',
        url: 'https://softwarerium.co.za',
        logo: 'https://softwarerium.co.za/logo.png',
        description: 'Softwarerium provides custom web development, mobile app development, and desktop application services to empower businesses in 2025.',
        sameAs: ['https://twitter.com/softwarerium', 'https://linkedin.com/company/softwarerium'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+27 74 755 3247',
          contactType: 'Customer Service',
          email: 'info@softwarerium.co.za',
          areaServed: 'South Africa',
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
            item: 'https://softwarerium.co.za',
          },
        ],
      },
      {
        '@type': 'WebSite',
        url: 'https://softwarerium.co.za',
        name: 'Softwarerium',
        description: 'Softwarerium delivers expert software development services including custom websites, mobile apps, and desktop solutions.',
        inLanguage: 'en-US',
      },
      // Added Service Schema for SEO
      ...services.map((service, index) => ({
        '@type': 'Service',
        serviceType: service.name,
        provider: {
          '@type': 'Organization',
          name: 'Softwarerium',
          url: 'https://softwarerium.co.za',
        },
        description: service.description,
        areaServed: 'South Africa',
        url: 'https://softwarerium.co.za/services#' + service.name.toLowerCase().replace(/\s+/g, '-'),
      })),
      // Added Article Schema for Blog Posts
      ...blogPosts.map((post) => ({
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: {
          '@type': 'Organization',
          name: 'Softwarerium',
          url: 'https://softwarerium.co.za',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Softwarerium',
          logo: {
            '@type': 'ImageObject',
            url: 'https://softwarerium.co.za/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://softwarerium.co.za' + post.link,
        },
      })),
    ],
  };

  return (
    <div className="font-sans">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section aria-label="Softwarerium Home">
        <Hero
          title="Softwarerium Solutions"
          description="Custom web development, mobile app, and desktop application services to drive your business forward in 2025 with innovative, scalable solutions."
          ctaText="Explore Our Projects"
          ctaLink="/projects"
          bgImage="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>

      <section aria-label='Softwarerium Stats'>
        <Stats />
      </section>

      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8" style={{ color: colors.black }}>
            Our Software Development Services
          </h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12" style={{ color: colors.gray }}>
            Explore Softwarerium’s expert services in custom web development, mobile apps, and desktop applications for 2025.
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
                Discover Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20" style={{ background: colors.black }}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8" style={{ color: colors.white }}>
            Why Choose Softwarerium for Software Development?
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12" style={{ color: colors.lightGray }}>
            Softwarerium delivers top-tier web, mobile, and desktop solutions with precision and innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Custom Software Solutions', desc: 'Tailored web, mobile, and desktop development for your unique needs.' },
              { title: 'Rapid Delivery', desc: 'Fast, reliable web and app development without compromising quality.' },
              { title: 'SEO Optimization', desc: 'Boost your online visibility with our SEO-driven software services.' },
              { title: 'Cross-Platform Excellence', desc: 'Seamless performance across web, mobile, and desktop platforms.' },
              { title: 'Ongoing Support', desc: 'Continuous updates and maintenance for your software solutions.' },
              { title: 'Collaborative Expertise', desc: 'We turn your vision into reality with our development skills.' },
            ].map((item, index) => (
              <div key={index} className="p-4 sm:p-6 transition-all duration-300">
                <FaCheckCircle
                  className="mx-auto mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110"
                  size={32}
                  style={{ color: colors.primary }}
                  aria-hidden="true"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: colors.white }}>
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

      <section className="py-12 sm:py-20" style={{ background: colors.white }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8" style={{ color: colors.black }}>
            Featured Software Projects by Softwarerium
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12" style={{ color: colors.gray }}>
            Check out our successful web development, mobile app, and desktop projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <article key={project.title} className="rounded-lg border transition-all duration-300 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} - Softwarerium Software Project`}
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
                  <p className="text-sm sm:text-base mb-4" style={{ color: colors.gray }}>
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

      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8" style={{ color: colors.black }}>
            Latest Software Development Insights
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12" style={{ color: colors.gray }}>
            Read Softwarerium’s expert tips on web development, mobile apps, and desktop solutions.
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
                  <p className="text-sm sm:text-base mb-2 italic" style={{ color: colors.gray }}>
                    {post.date} | {post.service}
                  </p>
                  <p className="text-sm sm:text-base mb-4" style={{ color: colors.gray }}>
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
                className="px-6 sm:mx-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 border border-primary hover:bg-primary hover:text-white"
                style={{ color: colors.primary }}
              >
                More Blogs
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8" style={{ color: colors.black }}>
            Our Software Development Process
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12" style={{ color: colors.gray }}>
            Softwarerium’s proven process delivers top-quality web, mobile, and desktop solutions.
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
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: colors.black }}>
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
      <ChatBot />
      <Footer />
    </div>
  );
}