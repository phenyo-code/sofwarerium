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
      <head>
      <meta name="google-site-verification" content="JdE3z7wZOa95HAumRV1e8QtaDb6Y2qApfN5Uu4meVfw" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6393FF" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={poppins.className}>
        <Header />
        <main style={{ paddingTop: '4rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}