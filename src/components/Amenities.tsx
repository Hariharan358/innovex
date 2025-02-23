import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from '../block/Components/CircularGallery/CircularGallery';

const Amenities = () => {
  const amenities = [
    {
      image: 'https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf5990_tennis-image-03%402x.avif',
      text: 'Cardio & Strength Gym'
    },
    {
      image: 'https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf5999_tennis-image-06%402x.avif',
      text: 'Spa & Relaxation Lounge'
    },
    {
      image: 'https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf5991_tennis-image-01%402x.avif',
      text: 'Pro Shop'
    },
    {
      image: 'https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf5997_tennis-image-02%402x.avif',
      text: 'Clubhouse Café'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <motion.div 
            className="md:w-1/3 mb-8 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">Premium Amenities</h2>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-600">
              Our tennis club offers a range of top-tier amenities designed to enhance your experience 
              on and off the court. From modern locker rooms to a fully equipped pro shop, we've created 
              the perfect environment for you to focus on your game and relax afterward.
            </p>
            <motion.div 
              className="mt-6 flex gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">World-Class Facilities</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">Comfort & Convenience</span>
            </motion.div>
          </motion.div>
        </div>

        <div className="h-[80vh] mb-16">
          <CircularGallery 
            items={amenities}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 24px DM Sans"
          />
        </div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6">Experience Excellence</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Every detail of our facilities has been carefully designed to provide you with 
            the ultimate tennis and fitness experience.
          </p>
          <motion.a
            href="/tour"
            className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Take a Virtual Tour
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;