// components/Stats.tsx
'use client'; // Required for client-side interactivity in Next.js

import { useEffect, useState } from 'react';

// Define interface for stats data
interface StatItem {
  label: string;
  value: number;
  suffix?: string; // Optional suffix like "+" or "%"
}

// Color Palette (consistent with your app)
const colors = {
  primary: '#6393FF',
  black: '#1A1A1A',
  gray: '#4A4A4A',
  lightGray: '#E5E7EB',
  white: '#FFFFFF',
};

// Stats data
const stats: StatItem[] = [
  { label: 'Happy Clients', value: 150, suffix: '+' },
  { label: 'Projects Completed', value: 200, suffix: '+' },
  { label: 'Years of Experience', value: 7, suffix: '+' },
  { label: 'Team Members', value: 20, suffix: '+' },
];


const Stats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  // Counting animation logic
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const increments = stats.map((stat) => stat.value / (duration / 50)); // Steps for smooth counting

    const timers = stats.map((_, index) =>
      setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) => {
            if (i !== index) return count;
            const nextCount = count + increments[i];
            return nextCount >= stats[i].value ? stats[i].value : nextCount;
          })
        );
      }, 50)
    );

    // Cleanup intervals
    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <section className="py-12 sm:py-20" style={{ background: colors.white }}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8"
          style={{ color: colors.black }}
        >
          Our Achievements
        </h2>
        <p
          className="text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12"
          style={{ color: colors.gray }}
        >
          See how Softwarerium has impacted businesses with our custom software solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="p-4 sm:p-6">
              <div
                className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3 transition-all duration-300"
                style={{ color: colors.primary }}
              >
                {Math.floor(counts[index])}
                {stat.suffix}
              </div>
              <p
                className="text-lg sm:text-xl font-semibold"
                style={{ color: colors.black }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;