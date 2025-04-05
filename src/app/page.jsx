"use client"
import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Growth from '../components/Growth';
import HowItWorks from '../components/HowItWorks';
import WhatYouGet from '../components/WhatYouGet';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import PortfolioGrid from '../components/PortfolioGrid';
import Testimonials from '../components/Testimonials';

const page = () => {
  

  

  return (
    <>
      <Navbar />
      <Hero />
      <Growth />
      <WhatYouGet />
      <PortfolioGrid />
      <Pricing/>
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />

     
      

     
    </>
  );
};

export default page;