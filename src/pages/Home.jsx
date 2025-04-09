import { useScroll, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProperties from '../components/home/FeaturedProperties';
import Categories from '../components/home/Categories';
import CTA from '../components/home/CTA';

export default function Home() {
  // Smooth scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Smooth scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      <Hero />
      <Features />
      <FeaturedProperties />
      <Categories />
      <CTA />
    </div>
  );
} 