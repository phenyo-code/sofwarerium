// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Softwarerium Logo" width={150} height={40} />
          </Link>
          <p className="mt-4 text-gray-400">
            Softwarerium specializes in crafting stunning, functional websites tailored to your business needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {/* Updated Home link to "/" */}
            <li>
              <Link href="/" className="text-gray-400 hover:text-accent transition">
                Home
              </Link>
            </li>
            {['About', 'Services', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-accent transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {[
              'Web Development',
              'Desktop Applications',
              'Mobile-App Development',
              'SEO Optimization',
              'Web Design',
              'UI-UX Design',
            ].map((service) => (
              <li key={service}>
                <Link
                  href={`/services/${service.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-accent transition"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-400 hover:text-accent transition" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-accent transition" size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-accent transition" size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Softwarerium. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;