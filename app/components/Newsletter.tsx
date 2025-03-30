// components/Newsletter.tsx
'use client';

import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-12 bg-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">Stay updated with the latest trends in web design and development.</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-accent text-white px-4 py-2 rounded-r-md"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;