// components/CTA.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the props interface
interface CTAProps {
  text: string;
  link: string;
}

const CTA = ({ text, link }: CTAProps) => {
  return (
    <section className="bg-primary text-white py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Ready to Transform Your Online Presence?
      </h2>
      <Link href={link}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-accent text-white px-6 py-3 rounded-md text-lg"
        >
          {text}
        </motion.button>
      </Link>
    </section>
  );
};

export default CTA;