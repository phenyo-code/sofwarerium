import Hero from '../../components/Hero';
import CTA from '../../components/CTA';
import Link from 'next/link';
import Image from 'next/image';

const colors = {
  primary: '#6393FF',
  black: '#1A1A1A',
  gray: '#4A4A4A',
  lightGray: '#E5E7EB',
  white: '#FFFFFF',
};

export const metadata = {
  title: 'Educational Platform for ReactLab | Softwarerium',
  description: 'An interactive e-learning platform built by Softwarerium for ReactLab with course management features.',
  keywords: 'e-learning platform, ReactLab, Softwarerium, educational software, course management',
  openGraph: {
    title: 'Educational Platform for ReactLab | Softwarerium',
    description: 'Softwarerium’s interactive e-learning solution for ReactLab with scalable features.',
    url: 'https://softwarerium.vercel.app/projects/reactlab',
    image: 'https://softwarerium.vercel.app/ReactLab.png',
  },
};

export default function ReactLabProject() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Educational Platform for ReactLab',
    description: 'An interactive and scalable e-learning platform with course management features, built by Softwarerium.',
    url: 'https://softwarerium.vercel.app/projects/reactlab',
    image: 'https://softwarerium.vercel.app/ReactLab.png',
    author: { '@type': 'Organization', name: 'Softwarerium' },
    datePublished: '2025-04-02',
  };

  return (
    <div className="font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Educational Platform for ReactLab"
        description="An interactive e-learning experience."
        ctaText="Contact Us"
        ctaLink="/contact"
        bgImage="https://softwarerium.vercel.app/ReactLab.png"
      />
      <nav className="py-4 bg-white" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6">
          <ol className="flex space-x-2 text-sm sm:text-base" style={{ color: colors.gray }}>
            <li><Link href="/" style={{ color: colors.primary }}>Home</Link></li>
            <li><span className="mx-2">/</span><Link href="/projects" style={{ color: colors.primary }}>Projects</Link></li>
            <li><span className="mx-2">/</span><span>ReactLab</span></li>
          </ol>
        </div>
      </nav>
      <section className="py-12 sm:py-20" style={{ background: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.black }}>
            Educational Platform for ReactLab
          </h1>
          <Image src="/ReactLab.png" alt="ReactLab E-Learning Platform by Softwarerium" width={800} height={400} className="w-full mb-6 rounded-lg" />
          <p className="text-base sm:text-lg mb-6" style={{ color: colors.gray }}>
            Softwarerium created an interactive e-learning platform for ReactLab, designed to deliver scalable education solutions. With React and Firebase, this platform offers course management, user progress tracking, and a responsive design that engages learners on any device.
          </p>
          <p className="text-base sm:text-lg" style={{ color: colors.gray }}>
            From video lessons to quizzes, ReactLab’s platform empowers educators and students alike. Softwarerium’s focus on performance and usability ensures a seamless experience, making learning accessible and effective.
          </p>
        </div>
      </section>
      <CTA text="Build Your E-Learning Platform Today!" link="/contact" />
    </div>
  );
}