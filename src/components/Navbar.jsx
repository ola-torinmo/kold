
import React, { useState } from 'react';

const Navbar = () => {
  // {/* Navigation */}
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(prev => !prev);
    };
  return (
    <>
    <nav className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white border border-b border-[#ECECEC] relative">
    <a href="/"><div className="text-blue-600 font-bold text-xl">KOLDOUTREACH</div></a>
    
    {/* Mobile Menu Button */}
    <button 
      className="md:hidden block text-gray-600"
      onClick={toggleMobileMenu}
    >
      {mobileMenuOpen ? '✕' : '☰'}
    </button>
    
    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-6">
      <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
      <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
      <a href="#faqs" className="text-gray-600 hover:text-gray-900">FAQs</a>
    </div>
    
    {/* <button className="hidden md:block px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
      Get Started
    </button> */}
    <button 
      onClick={() => {
        document.getElementById('pricing')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
      className="hidden md:block px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
    >
      Get Started
    </button>
    
    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden py-4 px-6 flex flex-col space-y-4 border-b">
        <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
        <a href="#faqs" className="text-gray-600 hover:text-gray-900">FAQs</a>
        <button
          onClick={() => {
          document.getElementById('pricing')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
        className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
          Get Started
        </button>
      </div>
    )}
  </nav>
  </>
  )
}

export default Navbar