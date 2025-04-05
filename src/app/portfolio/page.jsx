"use client"
import React from 'react'
import Navbar from '../../components/Navbar';
import Hero2 from '../../components/Hero2';
import Testimonials from '../../components/Testimonials';
import HowItWorks from '../../components/HowItWorks'; 
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import PortfolioFilter from '../../components/PortfolioFilter';

const page = () => {
    return (
        <>
          <Navbar />
          <Hero2/>
          <PortfolioFilter/>
          <Testimonials />
          <HowItWorks />
          <CTA />
          <Footer />
    
         
          
    
         
        </>
      );
}

export default page