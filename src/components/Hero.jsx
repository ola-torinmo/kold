import React from 'react'
import Image from 'next/image'
import founder from '../assets/founder.png'
import dash from '../assets/dash.png'
import tes1 from '../assets/tes1.png'
import tes2 from '../assets/tes2.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png' 
import logo3 from '../assets/logo3.png'

const Hero = () => {
   return (
      //    {/* Hero Section */}
         <section className="max-w-5xl mx-auto px-4 py-8 sm:py-12 text-center">
         <div className="flex justify-center mb-2">
           {/* Profile pictures */}
           <div className="mb-[21px]">
             <div className="w-[250px] h-[44px] "> <Image src={founder} alt='founders img'/> </div>
           </div>
         </div>
         <h1 className="text-3xl sm:text-4xl font-bold mb-4">Turn LinkedIn into your #1 Sales Channel</h1>
         <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
           We help B2B brands grow their authority, engage with their audience, and boost consistent sales meetings. 
           All through advanced personalized LinkedIn marketing.
         </p>
         <div className="flex flex-col sm:flex-row justify-center gap-4 mb-[63px]">
           <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">
           Book a Free Strategy Session
           </button>
         </div>
  
         {/* Testimonials with Dashboard Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 mb-16 flex items-end mt-[35px]">
            {/* Testimonial 1 - rounded top-left and bottom-left corners */}
            <div className="">
              <Image 
                src={tes1} 
                alt="Testimonial" 
                className="rounded-tl-lg rounded-bl-lg md:w-[366px] md:h-[400px]" 
              />
            </div>

            {/* Dashboard Preview */}
            <div className="col-span-1 md:col-span-1 relative order-first md:order-none mb-2 md:mb-0">
              <div className="md:w-[393px] md:h-[458px]">
                <Image 
                  src={dash} 
                  alt="Dashboard Preview" 
                  className="rounded-t-lg" 
                />
              </div>
            </div>

            {/* Testimonial 2 - rounded top-right and bottom-right corners */}
            <div className="md:ml-2">
              <Image 
                src={tes2} 
                alt="Testimonial2" 
                className="rounded-tr-lg rounded-br-lg md:w-[366px] md:h-[400px] md:ml-12" 
              />
            </div>
          </div>
  
         <p className='justify-center items-center my-10 text-[#5D5D5DCC]'>Trusted By</p>
  
         {/* Partner Logos */}
         <div className="flex md:flex-row flex-col items-baseline  justify-center items-center gap-12 ">
           <div className='pr-10 border-r py-4 border-[#E0E8E3]'><Image src={logo1} alt='logo1' className='h-[40px] w-[150px] '/></div>
           <div className='pr-10 border-r border-[#E0E8E3]'><Image src={logo2} alt='logo1' className='h-[74px] w-[74px] '/></div>
           <Image src={logo3} alt='logo1' className='h-[50px] w-[49px]'/>
         </div>
       </section>
    )
}

export default Hero