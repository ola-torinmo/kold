import React from 'react'
import Image from 'next/image'
import green from '../assets/green.png'
import raji from '../assets/raji.png'

const Testimonials = () => {
  return (
    //  {/* Testimonials Section */}
     <section className="py-10 px-4 sm:py-14">
     <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
       <h2 className="text-2xl sm:text-3xl font-bold mb-4">Real People, Real Results</h2>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 -space-x-1 max-w-5xl mx-auto">
       {/* Testimonial 1 */}
       <div className="bg-white rounded-lg p-6 shadow-sm flex-1 border border-gray-100">
         <div className="flex items-center mb-4">
           <div className="w-12 h-12 r mr-3"><Image src={green} alt='green'/></div>
           <div>
             <h3 className="font-medium">Brendan Green</h3>
             <p className="text-gray-500 text-sm">Founder, Building Flow Digital</p>
           </div>
         </div>
         <p className="text-gray-700">
           "“Working with KoldOutreach was a game changer for our LinkedIn strategy. Not only did we increase engagement, but we booked 8+ sales meetings in our first two months”"
         </p>
       </div>

       {/* Testimonial 2 */}
       <div className="bg-white rounded-lg p-6 shadow-sm flex-1 border border-gray-100 relative">
         <div className="flex items-center mb-4">
         <div className="w-12 h-12 r mr-3"><Image src={raji} alt='raji'/></div>
           <div>
             <h3 className="font-medium">Raji Oluwaniyi</h3>
             <p className="text-gray-500 text-sm">Co-founder, C-plus media</p>
           </div>
         </div>
         <p className="text-gray-700">
           "“Before working with KoldOutreach, LinkedIn felt like a time drain. Now we have a consistent content strategy, high engagement, and warm leads coming in every month”"
         </p>
       </div>
     </div>
   </section>
  )
}

export default Testimonials