import { Poppins } from 'next/font/google';
import Header from '../components/Header'; // Default export
import Footer from '../components/Footer';



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
    title: 'Contact Us | Softwarerium',
    description: 'Get in touch with Softwarerium for expert software solutions. Reach out via phone, email, or our contact form.',
    keywords: 'contact Softwarerium, software solutions, web development, mobile apps, SEO, UI/UX design',
    openGraph: {
      title: 'Contact Us | Softwarerium',
      description: 'Contact Softwarerium to discuss your next project. We’re here to help with web, mobile, and more.',
      url: 'https://sofwarerium.vercel.app/contact',
      image: 'URL_TO_IMAGE', // Replace with an actual image URL
    },
    twitter: {
      title: 'Contact Us | Softwarerium',
      description: 'Reach out to Softwarerium for custom software solutions tailored to your needs.',
      image: 'URL_TO_IMAGE', // Replace with an actual image URL
      card: 'summary_large_image',
    },
  };

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={poppins.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
