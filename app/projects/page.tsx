import Link from 'next/link';
import Image from 'next/image';


// Define interfaces for data
interface FeaturedProject {
  title: string;
  description: string;
  link: string;
  image: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: 'E-Commerce Platform for FLARE',
    description: 'A fully responsive e-commerce site with admin dashboard, payment gayeway etc...',
    link: '/projects/flare',
    image: '/Flare.png',
  },
  {
    title: 'Portfolio Site for DesignCraft',
    description: 'A visually stunning portfolio showcasing the client’s creative work.',
    link: '/projects/design-craft',
    image: '/DesignCraftImg.png',
  },
  {
    title: 'Corporate Website for Morph',
    description: 'A professional Content Management System website.',
    link: '/projects/morph',
    image: '/MorphBuilder.png',
  },
  {
    title: 'Educational Platform for ReactLab',
    description: 'An interactive and scalable e-learning platform with course management features.',
    link: '/projects/reactlab',
    image: '/ReactLab.png',
  },
  {
    title: 'Real Estate Portal for Roomify',
    description: 'A sleek, user-friendly real estate platform for buying,renting and selling properties.',
    link: '/projects/roomify',
    image: '/Roomify.png',
  },
  {
    title: 'Productivity App for LightDocs',
    description: 'A productivity app with document management and collaboration features.',
    link: '/projects/light-docs',
    image: '/LightDocs.jpg',
  },
];

const colors = {
  primary: '#6393FF',    // Vibrant Blue
  black: '#1A1A1A',      // Deep Black
  gray: '#4A4A4A',       // Medium Gray
  lightGray: '#E5E7EB',  // Light Gray
  white: '#FFFFFF',      // Pure White
};

// Metadata for this page
export const metadata = {
  title: 'Projects | Softwarerium',
  description: 'Explore Softwarerium’s signature projects showcasing expertise in web design, development, and innovative digital solutions.',
  keywords: 'projects, portfolio, web design, development, Softwarerium work',
  openGraph: {
    title: 'Projects | Softwarerium',
    description: 'Discover our featured projects that highlight creativity, functionality, and cutting-edge technology.',
    url: 'https://sofwarerium.vercel.app/projects',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
  },
  twitter: {
    title: 'Projects | Softwarerium',
    description: 'Check out Softwarerium’s portfolio of innovative and impactful digital projects.',
    image: 'URL_TO_IMAGE', // Replace with an actual image URL
    card: 'summary_large_image',
  },
};

export default function Projects() {
  // JSON-LD Structured Data for Organization, Breadcrumbs, and CreativeWork
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'Softwarerium',
        'url': 'https://sofwarerium.vercel.app',
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
            'item': 'https://sofwarerium.vercel.app',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Projects',
            'item': 'https://sofwarerium.vercel.app/projects',
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        'name': 'Projects by Softwarerium',
        'description': 'Explore Softwarerium’s signature projects showcasing expertise in web design, development, and innovative digital solutions.',
        'url': 'https://sofwarerium.vercel.app/projects',
        'publisher': {
          '@type': 'Organization',
          'name': 'Softwarerium',
        },
        'hasPart': featuredProjects.map((project) => ({
          '@type': 'CreativeWork',
          'name': project.title,
          'description': project.description,
          'url': `https://sofwarerium.vercel.app${project.link}`,
          'image': `https://sofwarerium.vercel.app${project.image}`,
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
              <span>Projects</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="py-12 sm:py-20" style={{ background: colors.white }}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8" style={{ color: colors.black }}>
            Our Signature Work
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-8 sm:mb-12" style={{ color: colors.gray }}>
            Explore the projects that showcase our expertise and innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="p-4 sm:p-6 border transition-all duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: colors.black }}>
                  {project.title}
                </h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: colors.gray }}>
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="font-semibold transition-colors duration-300 hover:text-white"
                  style={{ color: colors.primary }}
                >
                  Read More 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}