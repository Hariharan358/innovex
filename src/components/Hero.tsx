import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && contentRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
        const textOpacity = Math.min(0.1 + (scrolled / 500), 0.4);
        parallaxRef.current.style.opacity = textOpacity.toString();
        
        const contentOpacity = Math.max(1 - scrolled / 700, 0);
        contentRef.current.style.opacity = contentOpacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.video
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/fitness-poster.jpg" // Optional: add a poster image
        >
          <source src="/videos/0223.mp4" type="video/mp4" />
        </motion.video>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        />
      </div>

      <div 
        ref={parallaxRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none mix-blend-overlay"
        style={{ opacity: 0.1 }}
      >
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[25vw] font-bold text-white whitespace-nowrap transform -translate-y-1/4 tracking-tighter"
        >
          FITNESS
        </motion.h1>
      </div>

      <div 
        ref={contentRef}
        className="relative container mx-auto px-4 h-full flex items-center"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-2xl text-white">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-bold mb-6"
          >
            Fitness
          </motion.h2>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl mb-8"
          >
            Train like an athlete. Unlock your full potential with personalized fitness programs 
            designed to enhance your tennis skills and maintain peak performance.
          </motion.p>
          <motion.a 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            href="#explore"
            className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-colors"
          >
            Explore Academy
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </div>
      </div>

      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-white py-8"
        style={{ zIndex: 2 }}
      >
        <div className="container mx-auto px-4">
          <p className="text-2xl text-center italic">
            <span className="text-green-500">"</span>
            it's strength and agility that give every athlete a 
            <span className="bg-yellow-100 px-2">competitive edge</span>
            <span className="text-green-500">"</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
