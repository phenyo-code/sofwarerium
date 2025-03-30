'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the props interface
interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  bgImage?: string; // Optional prop with a default value
}

const Hero = ({ title, description, ctaText, ctaLink, bgImage = '/hero-bg.jpg' }: HeroProps) => {
  return (
    <section
      className={`relative h-[60vh] flex items-center justify-center ${bgImage ? 'bg-cover bg-center' : 'bg-gray-900'}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
        <Link href={ctaLink}>
          <button
            className="bg-primary hover:bg-primaryHover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold transition-all duration-300"
          >
            {ctaText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

