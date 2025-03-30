// app/layout.tsx
import { Poppins } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'CodeSite Creations - Web Design & Development',
  description: 'We create stunning, functional websites tailored to your business needs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main style={{ paddingTop: '4rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}