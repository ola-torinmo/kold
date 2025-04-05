import React from 'react';
import Image from 'next/image';
import x from '../assets/x.svg';
import linkedinIcon from '../assets/in.svg';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 mb-8">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <a href="#" className="p-2">
            <Image src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a href="#" className="p-2">
            <Image src={x} alt="x" className="w-5 h-5" />
          </a>
        </div>
        
        <div>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-100">
            KOLDOUTREACH
          </h1>
        </div>
      </div>
      
      <div className="flex items-center justify-center text-sm text-gray-600">
        <span>© 2025 KoldOutreach. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
