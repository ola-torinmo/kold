import React from 'react';

const HowItWorks = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "We assess your goals and LinkedIn presence"
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "We craft your LinkedIn content and outreach plan"
    },
    {
      number: 3,
      title: "Content Creation",
      description: "We create high-quality LinkedIn posts tailored to your audience"
    },
    {
      number: 4,
      title: "Targeted Outreach",
      description: "We initiate direct conversations with your ideal prospects"
    },
    {
      number: 5,
      title: "Appointment Setting",
      description: "We book sales meetings for you so you can focus on closing deals"
    },
    {
      number: 6,
      title: "Performance Tracking & Optimization",
      description: "We refine the strategy for continuous growth"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 " id="how-it-works">
      <h1 className="text-4xl font-bold text-center mb-12">How it works</h1>
      
      <div className="flex flex-col space-y-6">
        {/* Top row - container is wider/longer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-0">
          {processSteps.slice(0, 3).map((step) => (
            <div key={step.number} className="bg-white rounded-[18px] shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col h-full">
                <div className="w-8 h-8 rounded-full border border-[#007BFF] text-blue-500 flex items-center justify-center mb-4">
                  <span className="text-sm font-medium">{step.number}</span>
                </div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom row - container is narrower/shorter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-10 lg:px-14">
          {processSteps.slice(3).map((step) => (
            <div key={step.number} className="bg-white rounded-[18px] shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col h-full">
                <div className="w-8 h-8 rounded-full border border-[#007BFF] text-blue-500 flex items-center justify-center mb-4">
                  <span className="text-sm font-medium">{step.number}</span>
                </div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;