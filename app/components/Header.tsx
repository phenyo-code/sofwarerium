/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
import { CgMenuLeft } from 'react-icons/cg';
import { useMenuState } from './HeaderContext'; // Adjust path

// Base navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' }, // Dropdown added
];

// Services submenu data
const serviceLinks = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Desktop Applications', href: '/services/desktop-applications' },
  { name: 'Mobile App Development', href: '/services/mobile-app-development' },
  { name: 'SEO Optimization', href: '/services/seo-optimization' },
  { name: 'Web Design', href: '/services/web-design' },
  { name: 'UI/UX Design', href: '/services/ui-ux-design' },
];

// Custom hook to expose menu state
const Header = () => {
  const { isOpen, toggleMenu } = useMenuState();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleMobileServices = () => setIsMobileServicesOpen(!isMobileServicesOpen);

  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0 },
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/">
          {/* Desktop Logo (Gradient Text) */}
          <span className="hidden md:block text-2xl font-bold bg-gradient-to-r from-black via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Softwarerium
          </span>

          {/* Mobile Logo (Next.js Image) */}
          <div className="block md:hidden">
            <Image
              src="/logo2.png" // Update with the actual path to your logo
              alt="Softwarerium Logo"
              width={50} // Adjust width as needed
              height={20} // Adjust height as needed
              priority // Ensures it loads faster
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link href={link.href} className="text-gray-700 hover:text-indigo-500 transition flex items-center">
                  {link.name}
                  {link.name === 'Services' && (
                    <FaChevronDown className="ml-2 text-sm transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
                {/* Services Dropdown for Desktop */}
                {link.name === 'Services' && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                    {serviceLinks.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-indigo-500 transition"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-600 transition"
            >
              <span>Get Started</span>
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Book A Call Button on Mobile */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-400 text-white font-semibold text-sm px-4 py-2 rounded-md flex items-center space-x-2 transition"
            >
              <span>Get Started</span>
            </motion.button>
          </Link>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <LiaTimesSolid size={24} /> : <CgMenuLeft size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - Slides in from the right, full screen */}
      <motion.nav
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`md:hidden fixed top-[72px] right-0 w-full h-[calc(100vh-72px)] bg-blue-500 z-40 shadow-lg overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col items-start py-6 px-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full border-b border-blue-400 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="block text-white hover:text-indigo-200 transition py-2 text-lg"
                >
                  {link.name}
                </Link>
                {/* Plus/Minus Icon for Mobile Services */}
                {link.name === 'Services' && (
                  <button
                    onClick={toggleMobileServices}
                    className="text-white hover:text-indigo-200 transition"
                  >
                    {isMobileServicesOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                  </button>
                )}
              </div>
              {/* Services Submenu for Mobile */}
              {link.name === 'Services' && isMobileServicesOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="pl-4 space-y-2 mt-2"
                >
                  {serviceLinks.map((service) => (
                    <li key={service.name} className="border-b border-blue-400 pb-2">
                      <Link
                        href={service.href}
                        onClick={toggleMenu}
                        className="block text-gray-200 hover:text-white transition py-1 text-base"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;