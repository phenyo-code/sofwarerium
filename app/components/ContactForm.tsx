// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { sendMail } from '../actions/sendMail'; // Adjust path
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState<{ success: boolean; message?: string; error?: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await sendMail(formData);
    setStatus(result);
    if (result.success) {
      // Reset form
      (document.getElementById('contact-form') as HTMLFormElement)?.reset();
      setTimeout(() => setStatus(null), 5000); // Clear message after 5s
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Get in Touch
        </h2>
        <form
          id="contact-form"
          action={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </motion.button>
          {status && (
            <p
              className={`text-center ${status.success ? 'text-green-600' : 'text-red-600'}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;