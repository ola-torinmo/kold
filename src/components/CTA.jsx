import React from 'react';
import Image from 'next/image'
import check from '../assets/check.svg'

const CTA = () => {
  return (
    <div className="px-4 md:px-8 my-12">
    <div className=" bg-blue-500 text-white rounded-[48px] overflow-hidden relative">
      {/* First quadrant circle (quarter circle in bottom-right) */}
      <div className="absolute right-0 bottom-0">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-400 rounded-tl-full"></div>
      </div>
      
      <div className="relative z-10 px-6 py-12 md:py-16 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-medium mb-4">
          Take the First Step Toward LinkedIn Growth
        </h1>
        
        <span className="text-sm md:text-base lg:text-lg mb-8 max-w-3xl text-[#f7f8f9]">
          Let's build your authority, generate leads, and book consistent sales meetings- all through LinkedIn.
        </span>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap- mb-8">
          <div className="flex items-center gap-1 border-r border-[#f7f8f9] ">
           <div className=" flex-shrink-0 w-5 h-5">
              <Image src={check} alt='check' width={18} height={18} />
            </div>
            <span className="text-sm md:text-base mr-4">Optimized LinkedIn Profiles</span>
          </div>
          
          <div className="flex items-center gap-1 border-r border-[#f7f8f9]">
          <div className=" flex-shrink-0 w-5 h-5">
              <Image src={check} alt='check' width={18} height={18} />
            </div>
            <span className="text-sm md:text-base mr-4">Outreach Strategies</span>
          </div>
          
          <div className="flex items-center gap-1 ">
              <div className=" flex-shrink-0 w-5 h-5">
                <Image src={check} alt='check' width={18} height={18} />
              </div>
            <span className="text-sm md:text-base">Performance Insights</span>
          </div>
        </div>
        
        <a 
            href="https://calendly.com/micheal-koldoutreach/30min"
            target="_blank"
            rel="noopener noreferrer" className="border border-white text-white hover:bg-blue-40 px-6 py-3 rounded-md font-medium transition-colors duration-300 text-sm md:text-base text-center no-underline block">
          Book a Free Strategy Session
        </a>
      </div>
    </div>
    </div>
  );
};

export default CTA;