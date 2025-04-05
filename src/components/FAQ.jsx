
import React, { useState } from 'react';

const FAQ = () => {
    const [faqOpen, setFaqOpen] = useState({});


    const toggleFaq = (id) => {
        setFaqOpen(prev => ({
        ...prev,
        [id]: !prev[id]
        }));
    };
  return (
    //  {/* FAQ Section */}
     <section className="py-12 px-4 sm:py-16">
     <div className="max-w-3xl mx-auto">
       <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
       
       <div className="space-y-4">
         {[
           { 
             id: 1, 
             question: "How long does it take to see results?", 
             answer: "Most clients see initial engagement improvements within 2 weeks and start getting qualified leads within 4-6 weeks."
           },
           { 
             id: 2, 
             question: "Do you guarantee booked sales meetings?", 
             answer: "Yes, depending on your plan we guarantee a minimum number of qualified meetings each month."
           },
           { 
             id: 3, 
             question: "What industries do you specialize in?", 
             answer: "We primarily work with B2B brands, SaaS companies, and service-based businesses looking to generate leads through LinkedIn."
           },
           { 
             id: 4, 
             question: "Do you work with individual LinkedIn creators?", 
             answer: "Yes! Our Growth and Authority plans work great for founders, consultants, and executives who want to build their personal brand."
           },
           { 
             id: 5, 
             question: "What's included in my content package?", 
             answer: "Each lan includes a set nember of LinkedIn posts, engagement, profile optimization, and lead generation services. See our pricing plans for full details."
           },
           { 
            id: 6, 
            question: "Can I upgrade or cancel anytime?", 
            answer: "Yes!, We offer month-to-month plans with no long-term contracts. You can upgrade, downgrade or cancel anytime."
          }

         ].map((faq) => (
           <div key={faq.id} className="bg-[#F5F9FF] rounded-lg pb-4 p-6">
             <button 
               className="flex justify-between items-center w-full text-left"
               onClick={() => toggleFaq(faq.id)}
             >
               <h3 className="font-medium">{faq.question}</h3>
               <span>{faqOpen[faq.id] ? '−' : '+'}</span>
             </button>
             {faqOpen[faq.id] && (
               <p className="mt-2 text-xs text-gray-500">{faq.answer}</p>
             )}
           </div>
         ))}
       </div>
       
       <p className="text-gray-500 text-sm mt-8 text-center">
       Yes!, We offer month-to-month plans with no long-term contracts. You can upgrade, downgrade or cancel anytime.
       </p>
     </div>
   </section>

  )
}

export default FAQ