import React from 'react'
import Image from 'next/image'
import wyg from '../assets/wyg.png'
import check from '../assets/check.svg'

const WhatYouGet = () => {
  return (
    <div className="px-4 md:px-8 my-12">
    <section className="bg-black rounded-[48px] text-white py-12 px-4 h-full sm:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mt-6">
          <div className="order-last md:order-first">
            <div className="relative w-full h-auto max-w-full rounded-lg mb-4">
              <div className="relative w-full aspect-square sm:aspect-auto sm:h-[400px] md:h-[450px] lg:h-[504px]">
                <Image 
                  src={wyg} 
                  alt='what you get illustration' 
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-[40px] font-bold mb-6">What You Get in the First 30 Days</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-sm sm:text-base">Optimized LinkedIn profile to showcase authority and attract leads</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 flex-shrink-0 mt-0.5  w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-sm sm:text-base">First batch of high-quality LinkedIn posts tailored to your audience</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-sm sm:text-base">Initial engagement & outreach strategy to start building connections</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-sm sm:text-base">Lead list development (for Growth & Authority plans)</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-sm sm:text-base">DM outreach strategy & execution (for Growth & Authority plans)</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-sm sm:text-base">Booked sales meetings (for Authority & Custom plans)</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 flex-shrink-0 w-5 h-5">
                  <Image src={check} alt='check' width={18} height={18} />
                </div>
                <span className="text-sm sm:text-base">Performance insights & strategy adjustments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default WhatYouGet