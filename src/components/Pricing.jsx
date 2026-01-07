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
            <span className="text-3xl font-bold">$2,055 </span>
            <span className="text-[#5D5D5DCC] opacity-80">/month</span>
             
          </div>
          <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>For those getting started with LinkedIn growth and content creation</span>
          
          <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 mt-[14px]">
            Get Started
          </button>
        </div>
        <div className="space-y-3 mt-6 mb-6">
            <div className='flex-shrink-0'>
              <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Starter Plan includes:</span>

            </div>

          <div className="flex items-start">
            
          
            <div className="h-5 w-5  mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Designated, world-class account manager</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Complete content package included</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">5 weekly posts created and published for you</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Posts written in your unique tone and voice</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Curated list of creators in your niche for engagement</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Customized outreach scripts for every sequence</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Creator engagement handled for you</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Full account management done for you</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Bi-weekly content interview calls</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Daily comment engagement</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">24/7 Slack support with your manager and CEO</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Unlimited revisions on all content</span>
          </div>
          <div className="flex items-start">
            {/* <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"></div> */}
            <span className="text-[#5D5D5DCC] text-[14px] opacity-80">Add-on: Side account management (team member or company page) - $300/month</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">2 posts per week for additional account</span>
          </div>
        </div>
      </div>

      {/* Growth Plan */}
      <div className="border border-[#007BFF] rounded-[22.5px] p-[14px]  bg-white">
        <div className="mb-4 border border-white bg-[#F5F9FF] rounded-[10.5px] p-[14px]">
          <h3 className="font-medium">Growth Plan</h3>
          <div className="mt-4 mb-[14px]">
            <span className="text-3xl font-bold">$3,055</span>
            <span className="text-[#5D5D5DCC] opacity-80">/month</span>
          </div>
          <div className='w-[250px]'>
          <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Best for businesses ready to scale up their presence with advanced features</span>
          

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
            <span className="text-sm mt-1">Everything in Starter Plan</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Active engagement in comments and with your audience</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Newsletter setup on Beehiiv</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Custom newsletter website design included</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Welcome email sequence built for you</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">1 newsletter post published weekly on Beehiiv</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Thought leadership ads on select posts</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Ad targeting by ICP job title (ad spend billed separately)</span>
          </div>
          {/* <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Dedicated account manager</span>
          </div> */}
        </div>
      </div>

      {/* Authority Plan */}
      <div className="border border-[#E0E8E3] rounded-[22.5px] p-[14px]">
        <div className="mb-4 border border-[#E0E8E3] rounded-[10.5px] p-[14px]">
          <h3 className="font-medium">Authority Plan</h3>
          <div className="mt-4 mb-[14px]">
            <span className="text-3xl font-bold">$4,500</span>
            <span className="text-[#5D5D5DCC] opacity-80">/month</span>
          </div>
          <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>For brands that want to generate leads and book meetings at scale</span>
          <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 mt-[14px]"  >
            Get Started
          </button>
        </div>
        <div className="space-y-3 mt-6 ">
            <div className='flex-shrink-0'>
              <span className='text-[#5D5D5DCC] text-[14px] opacity-80 '>Authority Plan includes:</span>

            </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Everything in Growth Plan</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Personalized outreach campaign to your ICP</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Custom-built list of your ideal customer profile</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Personalized LinkedIn DMs sent on your behalf</span>
          </div>
          <div className="flex items-start">
            <div className="h-5 w-5 mr-3 flex-shrink-0 mt-1"><Image src={bcheck} alt='check'/></div>
            <span className="text-sm mt-1">Full outreach management and follow-up sequences</span>
          </div>
          <div className="flex items-start">
            
            <span className="text-[#5D5D5DCC] text-[14px] opacity-80">Add-on: Side account management (team member or company page) - $300/month</span>
          </div>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pricing