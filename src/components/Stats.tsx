import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      number: '164+',
      title: 'Players transformed',
      description: 'Elevating athletic skills and performance.'
    },
    {
      number: '92+',
      title: 'Tournaments won',
      description: 'Guiding players to success with expert coaching and fitness.'
    },
    {
      number: '18+',
      title: 'Tennis clubs partnered',
      description: 'Expanding our reach by collaboration.'
    },
    {
      number: '12+',
      title: 'Countries represented',
      description: 'Helping athletes from different nations achieve their tennis goals and reach new heights.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59c4_tennis-image-10.avif"
              alt="Tennis player"
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          </motion.div>
          <div className="lg:w-1/2">
            <motion.div 
              className="mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Turning players into champions
              </h2>
              <motion.a 
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start today
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="p-6 bg-white rounded-lg shadow-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.p 
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.p>
                  <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;