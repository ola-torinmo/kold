import React from 'react';
import Image from 'next/image'
import check from '../assets/check.svg'

const CTA = () => {
  return (
    <div className="px-4 md:px-8">
    <div className=" bg-blue-500 text-white rounded-[48px] overflow-hidden relative">
      {/* First quadrant circle (quarter circle in bottom-right) */}
      <div className="absolute right-0 bottom-0">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-400 rounded-tl-full"></div>
      </div>
      
      <div className="relative z-10 px-6 py-12 md:py-16 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Take the First Step Toward LinkedIn Growth
        </h1>
        
        <p className="text-sm md:text-base lg:text-lg mb-8 max-w-3xl">
          Let's build your authority, generate leads, and book consistent sales meetings- all through LinkedIn.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8">
          <div className="flex items-center gap-2">
           <div className=" flex-shrink-0 w-5 h-5">
              <Image src={check} alt='check' width={20} height={20} />
            </div>
            <span className="text-sm md:text-base">Optimized LinkedIn Profiles</span>
          </div>
          
          <div className="flex items-center gap-2">
          <div className=" flex-shrink-0 w-5 h-5">
              <Image src={check} alt='check' width={20} height={20} />
            </div>
            <span className="text-sm md:text-base">Outreach Strategies</span>
          </div>
          
          <div className="flex items-center gap-2">
              <div className=" flex-shrink-0 w-5 h-5">
                <Image src={check} alt='check' width={20} height={20} />
              </div>
            <span className="text-sm md:text-base">Performance Insights</span>
          </div>
        </div>
        
        <button className="border border-white text-white hover:bg-blue-40 px-6 py-3 rounded-md font-medium transition-colors duration-300 text-sm md:text-base">
          Book a Free Strategy Session
        </button>
      </div>
    </div>
    </div>
  );
};

export default CTA;