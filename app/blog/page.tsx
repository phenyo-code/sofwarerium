import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Link from 'next/link';
import { FaSearch, FaRocket, FaHandshake } from 'react-icons/fa';
import { IoIosDesktop } from 'react-icons/io';
import { CiMobile3 } from 'react-icons/ci';
import { RiCodeSSlashLine, RiPaintFill } from 'react-icons/ri';
import { SiMaterialdesignicons } from 'react-icons/si';
import { MdMobileFriendly } from 'react-icons/md';

// Color Palette
const colors = {
  primary: '#6393FF',    // Vibrant Blue
  black: '#1A1A1A',      // Deep Black
  gray: '#4A4A4A',       // Medium Gray
  lightGray: '#E5E7EB',  // Light Gray
  white: '#FFFFFF',      // Pure White
};

// Blog post previews tied to services
const blogPosts = [
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
  {
    title: 'SEO Strategies to Skyrocket Your Rankings',
    excerpt: 'Proven tactics to enhance your site’s visibility and organic traffic.',
    date: 'April 04, 2025',
    service: 'SEO Optimization',
    icon: <FaSearch size={24} />,
    link: '/blog/seo-strategies',
  },
  {
    title: 'Crafting Stunning Web Designs That Convert',
    excerpt: 'How user-friendly designs can reflect your brand and captivate audiences.',
    date: 'April 02, 2025',
    service: 'Web Design',
    icon: <RiPaintFill size={24} />,
    link: '/blog/web-design-conversion',
  },
  {
    title: 'UI/UX Design: The Key to User Engagement',
    excerpt: 'Why intuitive design is critical for usability and customer satisfaction.',
    date: 'March 31, 2025',
    service: 'UI/UX Design',
    icon: <SiMaterialdesignicons size={24} />,
    link: '/blog/ui-ux-engagement',
  },
  {
    title: 'Best IT Solutions in the South',
    excerpt: 'Top software and web solutions tailored for businesses in the Southern region.',
    date: 'March 29, 2025',
    service: 'IT Solutions',
    icon: <FaRocket size={24} />,
    link: '/blog/best-it-solutions-south',
  },
  {
    title: 'How to Choose the Right Software Development Partner',
    excerpt: 'Key factors to consider when selecting a tech partner for your next project.',
    date: 'March 27, 2025',
    service: 'IT Solutions',
    icon: <FaHandshake size={24} />, // Icon for partnership
    link: '/blog/choose-software-partner',
  },
  {
    title: 'Why Your Business Needs a Mobile-Friendly Website in 2025',
    excerpt: 'The importance of mobile optimization for SEO and user experience.',
    date: 'March 25, 2025',
    service: 'Web Design',
    icon: <MdMobileFriendly size={24} />, // Icon for mobile-friendly
    link: '/blog/mobile-friendly-website-2025',
  },
];

// Metadata for SEO
export const metadata = {
  title: 'Blog | Softwarerium',
  description: 'Stay updated with Softwarerium’s insights on web development, mobile apps, desktop applications, SEO, web design, UI/UX design, and IT solutions.',
  keywords: 'Softwarerium blog, web development, mobile apps, desktop applications, SEO optimization, web design, UI/UX design, IT solutions south, software development partner, mobile-friendly website',
  openGraph: {
    title: 'Blog | Softwarerium',
    description: 'Explore expert articles on software solutions, digital trends, and IT innovations from Softwarerium.',
    url: 'https://www.softwarerium.com/blog',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
  },
  twitter: {
    title: 'Blog | Softwarerium',
    description: 'Read the latest from Softwarerium on web, mobile, SEO, design, and IT solutions.',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function Blog() {
  // JSON-LD Structured Data for Organization, Breadcrumbs, and Blog
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'Softwarerium',
        'url': 'https://www.softwarerium.com',
        'logo': 'URL_TO_LOGO', // Replace with your logo URL
        'description': 'Expert software solutions designed to propel your business forward through innovation, scalability, and excellence.',
        'sameAs': [
          'https://twitter.com/softwarerium',
          'https://linkedin.com/company/softwarerium',
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+1-555-123-4567', // Replace with your phone number
          'contactType': 'Customer Service',
          'email': 'info@softwarerium.com', // Replace with your email
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
            'name': 'Blog',
            'item': 'https://www.softwarerium.com/blog',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'Softwarerium Blog',
        'description': 'Stay updated with Softwarerium’s insights on web development, mobile apps, desktop applications, SEO, web design, UI/UX design, and IT solutions.',
        'url': 'https://www.softwarerium.com/blog',
        'publisher': {
          '@type': 'Organization',
          'name': 'Softwarerium',
        },
        'hasPart': blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          'headline': post.title,
          'description': post.excerpt,
          'datePublished': post.date,
          'url': `https://www.softwarerium.com${post.link}`,
        })),
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
        title="Softwarerium Blog"
        description="Dive into expert insights on web development, mobile apps, SEO, design, IT solutions, and more to keep your business ahead of the curve."
        ctaText="Contact Us"
        ctaLink="/contact"
        bgImage="https://images.unsplash.com/photo-1509228622760-1b2f2ebafd2b?q=80&w=1450&auto=format&fit=crop"
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
              <span>Blog</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Blog Overview Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: colors.black }}
          >
            Latest Insights
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12"
            style={{ color: colors.gray }}
          >
            Explore our blog for tips, trends, and strategies across our core services, designed to help you succeed in the digital world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.title}
                className="p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                style={{ background: colors.white }}
              >
                <div className="text-center">
                  <div
                    className="mb-4 sm:mb-6 mx-auto w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                    style={{ color: colors.primary, background: `${colors.primary}15` }}
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
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA text="Inspired? Let’s Discuss Your Next Project!" link="/contact" />
    </div>
  );
}