import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      front: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59c3_tennis-square-07.avif",
      back: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59be_tennis-square-04.avif"
    },
    {
      front: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59bc_tennis-square-01.avif",
      back: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59ba_tennis-square-05.avif"
    },
    {
      front: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59bb_tennis-square-08.avif",
      back: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59bd_tennis-square-10.avif"
    },
    {
      front: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59b6_tennis-square-06.avif",
      back: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59b7_tennis-square-02.avif"
    },
    {
      front: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59b8_tennis-square-09.avif",
      back: "https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59b9_tennis-square-03.avif"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          our fitness facilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <motion.img 
                  src={image.front}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-80 object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img 
                    src={image.back}
                    alt={`Gallery image back ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;