import React, { useState } from 'react';
import Image from 'next/image';

const PortfolioFilter = () => {
  const [activeFilter, setActiveFilter] = useState('Posts & Branded Images');

  const filters = [
    'Posts & Branded Images',
    'Profile Optimization',
    'Appointment Setting & Sales Calls'
  ];

  // Update imageUrl paths to include a leading slash to reference the public folder
  const portfolioItems = [
    {
      id: 1,
      category: 'Posts & Branded Images',
      imageUrl: '/b1.png', // Assuming these images are in the public folder
    },
    {
      id: 2,
      category: 'Posts & Branded Images',
      imageUrl: '/b2.png',
    },
    {
      id: 3,
      category: 'Posts & Branded Images',
      imageUrl: '/b3.png',
    },
    {
      id: 4,
      category: 'Posts & Branded Images',
      imageUrl: '/b4.png',
    },
    {
      id: 5,
      category: 'Posts & Branded Images',
      imageUrl: '/b5.png',
    },
    {
      id: 6,
      category: 'Posts & Branded Images',
      imageUrl: '/b6.png',
    },
    {
      id: 7,
      category: 'Profile Optimization',
      imageUrl: '/o1.png',
    },
    {
      id: 8,
      category: 'Profile Optimization',
      imageUrl: '/o2.png',
    },
    {
      id: 9,
      category: 'Profile Optimization',
      imageUrl: '/o3.png',
    },
    {
      id: 10,
      category: 'Appointment Setting & Sales Calls',
      imageUrl: '/a1.png',
    },
    {
      id: 11,
      category: 'Appointment Setting & Sales Calls',
      imageUrl: '/a2.png',
    },
    {
      id: 12,
      category: 'Appointment Setting & Sales Calls',
      imageUrl: '/a3.png',
    },
    {
      id: 13,
      category: 'Appointment Setting & Sales Calls',
      imageUrl: '/a4.png',
    }
  ];

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeFilter
  );

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeFilter === filter 
                  ? 'bg-blue-400 text-white' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mb-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="rounded-[18px] overflow-hidden shadow-md h-96 transition-all duration-300 hover:shadow-xl"
          >
            <Image 
              src={item.imageUrl} 
              alt={`Portfolio item ${item.id}`} 
              className="w-full h-full object-fit"
              width={424} 
              height={530}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilter;
