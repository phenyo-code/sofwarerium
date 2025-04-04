import { Poppins } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'Softwarerium - Web Design & Development',
  description: 'At Softwarerium, we design and develop tailored software solutions that empower businesses to thrive in the digital age. Whether you need a web platform, a mobile app, or a robust enterprise system, we craft scalable and efficient solutions that fit your unique needs.',
  keywords: 'web design, web development, software development, UI/UX, custom websites, Softwarerium, Next.js development, South Africa web agency',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="google-site-verification" content="JdE3z7wZOa95HAumRV1e8QtaDb6Y2qApfN5Uu4meVfw" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#6393FF" />
        <meta name="description" content="At Softwarerium, we design and develop tailored software solutions that empower businesses to thrive in the digital age. Whether you need a web platform, a mobile app, or a robust enterprise system, we craft scalable and efficient solutions that fit your unique needs." />
        <meta name="keywords" content="web design, web development, software development, UI/UX, custom websites, Softwarerium, Next.js development, South Africa web agency" />
        <meta name="author" content="Softwarerium" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Softwarerium - Web Design & Development" />
        <meta property="og:description" content="At Softwarerium, we design and develop tailored software solutions that empower businesses to thrive in the digital age. Whether you need a web platform, a mobile app, or a robust enterprise system, we craft scalable and efficient solutions that fit your unique needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softwarerium.co.za" />
        <meta property="og:image" content="https://softwarerium.co.za/opengraph-image.png" />
        <meta property="og:site_name" content="Softwarerium" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Softwarerium - Web Design & Development" />
        <meta name="twitter:description" content="At Softwarerium, we design and develop tailored software solutions that empower businesses to thrive in the digital age. Whether you need a web platform, a mobile app, or a robust enterprise system, we craft scalable and efficient solutions that fit your unique needs." />
        <meta name="twitter:image" content="https://softwarerium.co.za/opengraph-image.png" />
        <meta name="twitter:site" content="@Softwarerium" />
        <meta name="twitter:creator" content="@Softwarerium" />

        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={poppins.className}>


      <Suspense fallback={<div>Loading...</div>}>
          <main style={{ paddingTop: '4rem' }}>{children}</main>
        </Suspense>

      </body>
    </html>
  );
}
