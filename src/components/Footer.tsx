import React from 'react';
import { Youtube, Instagram, Linkedin } from 'lucide-react';
import FlowingMenu from '../block/Components/FlowingMenu/FlowingMenu';

const Footer = () => {
  const demoItems = [
    {
      link: 'https://instagram.com',
      text: 'INSTAGRAM',
      image: 'https://picsum.photos/600/400?random=1',
      icon: <Instagram size={40} className="text-black" />,
    },
    {
      link: 'https://youtube.com',
      text: 'YOUTUBE',
      image: 'https://picsum.photos/600/400?random=2',
      icon: <Youtube size={40} className="text-white" />,
    },
    {
      link: 'https://linkedin.com',
      text: 'LINKEDIN',
      image: 'https://picsum.photos/600/400?random=3',
      icon: <Linkedin size={40} className="text-white" />,
    },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Flowing Menu Section */}
        <div style={{ height: '300px', position: 'relative', marginTop: '-50px' }}>
          <FlowingMenu items={demoItems} textColor="black" borderRadius="10px" />
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
