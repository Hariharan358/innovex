import React from 'react';
import { X, Youtube, Facebook, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-wrapper">
        <Hero />
        <Gallery />
        <Amenities />
        <Stats />
        <section className="relative py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://cdn.prod.website-files.com/67b8832dcff643b4f9cf5929/67b8832dcff643b4f9cf59ae_tennis-image-08.avif"
                  alt="Tennis court"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <div className="relative py-24 text-center">
                <h2 className="text-5xl font-bold text-white mb-8">Ready to Rally?</h2>
                <a href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-colors">
                  Join a camp
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;