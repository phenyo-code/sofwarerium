/* eslint-disable react-hooks/exhaustive-deps */
// components/Stats.tsx
'use client'; // Required for client-side interactivity in Next.js

import { useEffect, useState, useRef } from 'react';

// Define interface for stats data
interface StatItem {
  label: string;
  value: number;
  suffix?: string; // Optional suffix like "+" or "%"
}

// Define interface for progress bar data
interface ProgressItem {
  label: string;
  percentage: number;
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

//  Progress bar data
const progressBars: ProgressItem[] = [
    { label: 'Customer Satisfaction', percentage: 100 },
    { label: 'On-Time Delivery', percentage: 100 },
    { label: 'Project Success Rate', percentage: 98 },
    { label: 'Code Quality Standards', percentage: 95 },
    { label: 'Client Retention Rate', percentage: 89 },
    { label: 'Bug-Free Releases', percentage: 95 },
    { label: 'Team Collaboration Efficiency', percentage: 98 },
  ];

// Easing function for smooth animation (quadratic ease-out)
const easeOutQuad = (t: number) => t * (2 - t);

const Stats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [currentProgressIndex, setCurrentProgressIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Counting animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate stats
          const duration = 2000; // Animation duration in ms
          const increments = stats.map((stat) => stat.value / (duration / 50));

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

          // Cleanup stats timers
          return () => timers.forEach((timer) => clearInterval(timer));
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  // Progress bar animation with requestAnimationFrame
  useEffect(() => {
    if (!hasAnimated) return;

    const animateProgress = () => {
      const currentProgress = progressBars[currentProgressIndex];
      const targetWidth = currentProgress.percentage;
      const duration = 1500; // 1.5s per bar
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0 to 1
        const easedProgress = easeOutQuad(progress); // Apply easing
        const newWidth = easedProgress * targetWidth;

        setProgressWidth(newWidth);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(step);
        } else {
          setTimeout(() => {
            setProgressWidth(0); // Reset width for next bar
            setCurrentProgressIndex((prev) => (prev + 1) % progressBars.length); // Cycle to next bar
          }, 1000); // Pause before next bar
        }
      };

      animationRef.current = requestAnimationFrame(step);
    };

    animateProgress();

    // Cleanup animation frame
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [hasAnimated, currentProgressIndex]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20" style={{ background: colors.white }}>
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

        {/* Progress Bars Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <p
              className="text-lg sm:text-xl font-semibold mb-2"
              style={{ color: colors.black }}
            >
              {progressBars[currentProgressIndex].label}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progressWidth}%`,
                  background: `linear-gradient(to right, ${colors.primary}, #3B82F6)`,
                  transition: 'width 0.1s linear', // Smooth micro-updates
                }}
              />
            </div>
            <p
              className="text-sm sm:text-base mt-2"
              style={{ color: colors.gray }}
            >
              {progressBars[currentProgressIndex].percentage}% Achievement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;