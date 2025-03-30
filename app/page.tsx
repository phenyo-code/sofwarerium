// app/page.tsx
import Hero from './components/Hero';
import CTA from './components/CTA';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosDesktop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { RiCodeSSlashLine } from "react-icons/ri";
import { JSX } from 'react';

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

// Color Palette
const colors = {
  primary: '#6393FF',    // Vibrant Blue
  black: '#1A1A1A',      // Deep Black
  gray: '#4A4A4A',       // Medium Gray
  lightGray: '#E5E7EB',  // Light Gray
  white: '#FFFFFF',      // Pure White
};

// Data (unchanged from your original)
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

// Metadata for SEO
export const metadata = {
  title: 'Softwarerium | Expert Software Solutions',
  description: 'Softwarerium delivers innovative web development, mobile apps, desktop applications, and more to propel your business forward.',
  keywords: 'Softwarerium, web development, mobile apps, desktop applications, software solutions',
  openGraph: {
    title: 'Softwarerium | Expert Software Solutions',
    description: 'Innovative software solutions for your business, from web development to mobile apps.',
    url: 'https://www.softwarerium.com',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
  },
  twitter: {
    title: 'Softwarerium | Expert Software Solutions',
    description: 'Discover how Softwarerium can transform your business with custom software solutions.',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function Home() {
  // JSON-LD Structured Data for Organization and Breadcrumbs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Softwarerium',
        url: 'https://www.softwarerium.com',
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
            item: 'https://www.softwarerium.com',
          },
        ],
      },
      {
        '@type': 'WebSite',
        url: 'https://www.softwarerium.com',
        name: 'Softwarerium',
        description: 'Softwarerium provides innovative software solutions including web development, mobile apps, and desktop applications.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.softwarerium.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
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
        title="Softwarerium"
        description="Expert software solutions designed to propel your business forward through innovation, scalability, and excellence."
        ctaText="Explore Our Projects"
        ctaLink="/projects"
        bgImage="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Cutting-edge solutions crafted to propel your business into the digital spotlight.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.white }}
              >
                <div
                  className="mb-4 sm:mb-6 mx-auto w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                  style={{ color: colors.primary, background: `${colors.primary}15` }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center transition-colors duration-300 hover:text-primary"
                  style={{ color: colors.black }}
                >
                  {service.name}
                </h3>
                <p className="text-sm sm:text-base text-center" style={{ color: colors.gray }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/services">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-opacity-90"
                style={{ background: colors.primary, color: colors.white }}
              >
                Discover More
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
            Why Choose Softwarerium?
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12"
            style={{ color: colors.lightGray }}
          >
            We fuse innovation and precision to deliver results that exceed expectations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Tailored Innovation', desc: 'Unique solutions designed for your brand’s DNA.' },
              { title: 'Lightning Delivery', desc: 'Fast, reliable execution without cutting corners.' },
              { title: 'SEO Dominance', desc: 'Skyrocketing your visibility with proven tactics.' },
              { title: 'Device Perfection', desc: 'Seamless experiences on every screen.' },
              { title: 'Unwavering Support', desc: 'Ongoing care to keep you ahead.' },
              { title: 'Your Vision, Our Mission', desc: 'Collaborating to bring your ideas to life.' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 transition-all duration-300"
              >
                <FaCheckCircle
                  className="mx-auto mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110"
                  size={32}
                  style={{ color: colors.primary }}
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
            Featured Projects
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            Explore the projects that showcase our expertise and innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-lg border   transition-all duration-300  overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-80 object-cover"
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
              </div>
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

      {/* Our Process Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: colors.black }}
          >
            Our Precision Process
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            A disciplined approach to turn your vision into a flawless reality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.white }}
              >
                <div
                  className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full font-bold transition-transform duration-300 hover:scale-110"
                  style={{ background: colors.primary, color: colors.white }}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials, CTA, and Newsletter Sections */}
      <Testimonial testimonials={testimonials} />
      <CTA text="Get Started Today" link="/contact" />
      <Newsletter />
    </div>
  );
}