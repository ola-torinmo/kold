import React from 'react'
import Image from 'next/image'
import bcheck from '../assets/bcheck.svg'

const Pricing = () => {
  return (
    // {/* Pricing Section */}
    <section className="py-12 px-4 sm:py-12" id="pricing">
    <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-[44px] font-medium mb-2">Simple, Transparent Pricing</h2>
      <p className="text-[#5D5D5DCC] opacity-80">
        Get the flexible plans based on your unique growth and lead generation needs.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Starter Plan */}
      <div className="border border-[#E0E8E3] rounded-[22.5px] p-[14px]">
        <div className="mb-4 border border-[#E0E8E3] rounded-[10.5px] p-[14px]">
          <h3 className="font-medium">Starter Plan</h3>
          <div className="mt-4 mb-[14px] ">
            <span className="text-3xl font-bold">$799</span>
            <span className="text-[#5D5D5DCC] opacity-80">/month</span>
             
          </div>
          <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>For those getting started with LinkedIn growth (content creation only)</span>
          
          <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 mt-[14px]">
            Get Started
          </button>
        </div>
        <div className="space-y-3 mt-6">
            <div className='flex-shrink-0'>
              <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Starter Plan includes:</span>

            </div>

          <div className="flex items-start">
            
          
            <div className="h-5 w-5  mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">3 LinkedIn posts per week</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Monthly performance report</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Dedicated account manager</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Professional content creator</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Brand style guide alignment</span>
          </div>
        </div>
      </div>

      {/* Growth Plan */}
      <div className="border border-[#007BFF] rounded-[22.5px] p-[14px]  bg-white">
        <div className="mb-4 border border-white bg-[#F5F9FF] rounded-[10.5px] p-[14px]">
          <h3 className="font-medium">Growth Plan</h3>
          <div className="mt-4 mb-[14px]">
            <span className="text-3xl font-bold">$1,499</span>
            <span className="text-[#5D5D5DCC] opacity-80">/month</span>
          </div>
          <div className='w-[250px]'>
          <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Best for businesses ready to scale up their 
          presence</span>

          </div>
          
          <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-[14px]">
            Get Started
          </button>
        </div>
        <div className="space-y-3 mt-6">
            <div className='flex-shrink-0'>
              <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Growth Plan includes:</span>

            </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Everything in Starter plan</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">5 LinkedIn posts per week</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">LinkedIn newsletter setup</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Targeted engagement (prospect posts)</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Direct appointment setting (5-10 meetings)</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Lead list building (targeting ideal prospects)</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">LinkedIn DM outreach (conversation starters)</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Monthly strategy review call</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Dedicated account manager</span>
          </div>
        </div>
      </div>

      {/* Authority Plan */}
      <div className="border border-[#E0E8E3] rounded-[22.5px] p-[14px] h-[769px]">
        <div className="mb-4 border border-[#E0E8E3] rounded-[10.5px] p-[14px]">
          <h3 className="font-medium">Authority Plan</h3>
          <div className="mt-4 mb-[14px]">
            <span className="text-3xl font-bold">$2,499</span>
            <span className="text-[#5D5D5DCC] opacity-80">/month</span>
          </div>
          <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>For brands that want to generate leads & 
          book meetings</span>
          <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 mt-[14px]"  >
            Get Started
          </button>
        </div>
        <div className="space-y-3 mt-6">
            <div className='flex-shrink-0'>
              <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Authority Plan includes:</span>

            </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Everything in growth plan</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">7 LinkedIn posts per week</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Full content strategy & execution</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Personal brand positioning</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">LinkedIn Ads setup & management</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Direct appointment setting (10-20 meetings)</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Bi-weekly strategy calls</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Dedicated account manager</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pricing