import React from 'react';

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
            <div className="bg-white rounded-full p-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="white"/>
                <path d="M6.5 10.5L4 8L3 9L6.5 12.5L13.5 5.5L12.5 4.5L6.5 10.5Z" fill="#2D8BFF"/>
              </svg>
            </div>
            <span className="text-sm md:text-base">Optimized LinkedIn Profiles</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="white"/>
                <path d="M6.5 10.5L4 8L3 9L6.5 12.5L13.5 5.5L12.5 4.5L6.5 10.5Z" fill="#2D8BFF"/>
              </svg>
            </div>
            <span className="text-sm md:text-base">Outreach Strategies</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="white"/>
                <path d="M6.5 10.5L4 8L3 9L6.5 12.5L13.5 5.5L12.5 4.5L6.5 10.5Z" fill="#2D8BFF"/>
              </svg>
            </div>
            <span className="text-sm md:text-base">Performance Insights</span>
          </div>
        </div>
        
        <button className="border border-white text-white hover:bg-blue-40 px-6 py-3 rounded-full font-medium transition-colors duration-300 text-sm md:text-base">
          Book a Free Strategy Session
        </button>
      </div>
    </div>
    </div>
  );
};

export default CTA;