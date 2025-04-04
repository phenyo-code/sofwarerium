import { Poppins } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'Blogs | Softwarerium - Web Design & Development ',
  description: 'At Softwarerium, we design and develop tailored software solutions that empower businesses to thrive in the digital age. Whether you need a web platform, a mobile app, or a robust enterprise system, we craft scalable and efficient solutions that fit your unique needs.',
  keywords: 'web design, web development, software development, UI/UX, custom websites, Softwarerium, Next.js development, South Africa web agency',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={poppins.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      );
    }
