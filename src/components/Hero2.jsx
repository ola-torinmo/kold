import React from 'react'
import Image from 'next/image'
import founder from '../assets/founder.png'

const Hero2 = () => {
  return (
    //    {/* Hero Section */}
       <section className="max-w-5xl mx-auto px-4 py-8 sm:py-12 text-center">
       <div className="flex justify-center mb-2">
         {/* Profile pictures */}
         <div className="mb-[17.5px]">
           <div className="w-[250px] h-[44px] "> <Image src={founder} alt='founders img' priority /> </div>
         </div>
       </div>
       <h1 className="text-[56px] sm:text-[52px] font-medium ">Our work: creative solutions that drive results</h1>
       <p className="text-[#5D5D5DCC] opacity-80  mb-8 max-w-2xl mx-auto">
       Discover how our tailored strategies have helped businesses transform challenges into opportunities for growth and success.
       </p>
       <div className="flex flex-col sm:flex-row justify-center gap-4 mb-[63px]">
         <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">
         Book a Free Strategy Session
         </button>
       </div>

     </section>
  )
}

export default Hero2