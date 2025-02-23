import React, { useState } from 'react';
import BlurText from "../block/TextAnimations/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center">
           
            <BlurText
              text="INOVX"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl font-bold ml-3"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/locations" className="text-gray-700 hover:text-black">Events</a>
            <a href="/about-us" className="text-gray-700 hover:text-black">About</a>
            <a href="/contact" className="text-gray-700 hover:text-black">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-8 h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="/locations" className="text-gray-700 hover:text-black">Locations</a>
              <a href="/fitness" className="text-gray-700 hover:text-black">Fitness</a>
              <a href="/about-us" className="text-gray-700 hover:text-black">About</a>
              <a href="/contact" className="text-gray-700 hover:text-black">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
