import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Link from 'next/link';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'; // Added icons for values section

// Color Palette (consistent with your other pages)
const colors = {
  primary: '#6393FF',    // Vibrant Blue
  black: '#1A1A1A',      // Deep Black
  gray: '#4A4A4A',       // Medium Gray
  lightGray: '#E5E7EB',  // Light Gray
  white: '#FFFFFF',      // Pure White
};

// Metadata for this page
export const metadata = {
  title: 'About Us | Softwarerium',
  description: 'Discover Softwarerium’s journey, mission, and values. We’re a team dedicated to crafting innovative software and web solutions since 2025.',
  keywords: 'about Softwarerium, web development, software solutions, company story, mission, values',
  openGraph: {
    title: 'About Us | Softwarerium',
    description: 'Learn about Softwarerium’s passion for empowering businesses with cutting-edge web and software solutions.',
    url: 'https://sofwarerium.vercel.app/about',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
  },
  twitter: {
    title: 'About Us | Softwarerium',
    description: 'Meet Softwarerium, a team innovating web and software solutions since 2025.',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function About() {
  // JSON-LD Structured Data for Organization and Breadcrumbs
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'Softwarerium',
        'url': 'https://sofwarerium.vercel.app',
        'logo': 'URL_TO_LOGO', // Replace with actual logo URL
        'description': 'Expert software solutions designed to propel your business forward through innovation, scalability, and excellence.',
        'foundingDate': '2025',
        'sameAs': [
          'https://twitter.com/softwarerium',
          'https://linkedin.com/company/softwarerium',
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+1-555-123-4567', // Replace with actual phone number
          'contactType': 'Customer Service',
          'email': 'info@softwarerium.com', // Replace with actual email
          'areaServed': 'Worldwide',
        },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://sofwarerium.vercel.app',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'About',
            'item': 'https://sofwarerium.vercel.app/about',
          },
        ],
      },
      {
        '@type': 'AboutPage',
        'name': 'About Softwarerium',
        'description': 'Discover Softwarerium’s journey, mission, and values. We’re a team dedicated to crafting innovative software and web solutions since 2025.',
        'url': 'https://sofwarerium.vercel.app/about',
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
        title="About Softwarerium"
        description="We’re a passionate team dedicated to crafting innovative websites and software solutions that empower businesses to thrive in the digital age."
        ctaText="Get in Touch"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1450&auto=format&fit=crop"
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
              <span>About</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Our Story Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.white }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
            style={{ color: colors.black }}
          >
            Our Story
          </h2>
          <div className="space-y-6 text-base sm:text-lg" style={{ color: colors.gray }}>
            <p>
              Founded in 2025, Softwarerium emerged from a shared vision to transform how businesses connect with their audiences online. What began as a small group of web enthusiasts has grown into a dynamic team of designers, developers, and strategists committed to excellence. Based in Tech City, we’ve quickly established ourselves as a trusted partner for businesses worldwide.
            </p>
            <p>
              Our journey started with a simple goal: to create websites that don’t just look good but perform exceptionally. Over the years, we’ve expanded our expertise to include custom software solutions, mobile apps, and SEO optimization, helping startups and established brands alike achieve their digital ambitions. Each project is a testament to our dedication to blending creativity with cutting-edge technology.
            </p>
            <p>
              At Softwarerium, we believe that every business deserves a digital presence that reflects its unique identity. Whether it’s crafting a sleek e-commerce platform or designing a robust enterprise application, we approach every challenge with curiosity, precision, and a passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
            style={{ color: colors.black }}
          >
            Our Mission
          </h2>
          <div className="space-y-6 text-base sm:text-lg" style={{ color: colors.gray }}>
            <p>
              Our mission at Softwarerium is to empower businesses with transformative web and software solutions that drive engagement, efficiency, and growth. We aim to bridge the gap between vision and reality by delivering tools that are not only functional but also intuitive and delightful to use.
            </p>
            <p>
              We’re committed to staying at the forefront of technology—whether it’s leveraging AI for personalization, optimizing for the latest SEO standards, or building scalable cloud-based applications. Our goal is to provide our clients with a competitive edge in an ever-evolving digital landscape, ensuring their success today and tomorrow.
            </p>
            <p>
              Beyond technical expertise, we prioritize collaboration and transparency. We work closely with our clients, treating every project as a partnership. By understanding their goals and challenges, we deliver tailored solutions that align with their long-term vision and make a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.white }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
            style={{ color: colors.black }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <FaRocket size={32} />,
                title: 'Innovation',
                desc: 'We embrace the latest technologies to deliver forward-thinking solutions.',
              },
              {
                icon: <FaUsers size={32} />,
                title: 'Collaboration',
                desc: 'We build strong partnerships with our clients to achieve shared success.',
              },
              {
                icon: <FaLightbulb size={32} />,
                title: 'Excellence',
                desc: 'We strive for perfection in every design, line of code, and strategy.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.lightGray }}
              >
                <div
                  className="mb-4 mx-auto w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ color: colors.primary }}
                >
                  {value.icon}
                </div>
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2 text-center"
                  style={{ color: colors.black }}
                >
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-center" style={{ color: colors.gray }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA text="Ready to Collaborate? Let’s Build Something Amazing!" link="/contact" />
    </div>
  );
}