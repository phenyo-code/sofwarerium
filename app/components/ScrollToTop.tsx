'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useMenuState } from './HeaderContext'; // Adjust path

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen } = useMenuState();

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isOpen) return null;

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-1 right-1 z-50 bg-blue-400 text-white p-1 rounded shadow-md hover:bg-blue-600 transition duration-300 md:bottom-3 md:right-3 md:p-2"
      aria-label="Scroll to top"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      <FaArrowUp size={10} className="md:size-12" />
    </motion.button>
  );
};

export default ScrollToTop;

