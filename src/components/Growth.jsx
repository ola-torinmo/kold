import React from 'react'
import Image from 'next/image'
import consult from '../assets/consult.svg'
import content from '../assets/content.svg'
import profile from '../assets/optimization.svg'
import appointment from '../assets/appoint.svg'

const Growth = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-[48px] lg:text-[48px] font-medium mb-4">LinkedIn Growth, Done For You</h2>
        <p className="text-[#5D5D5DCC] opacity-80 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          Your LinkedIn presence should work for you, not against you. We provide everything you need to attract leads, build relationships, and close deals through LinkedIn.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mb-16 mx-auto justify-items-center">
        <div className="w-[250px] h-[250px] px-6 py-12 bg-gray-50 rounded-lg text-center">
          <div className="flex items-center justify-center mx-auto mb-4">
            <Image src={consult} alt="Consulting" width={32} height={32} />
          </div>
          <h3 className="font-medium mb-2">Consulting</h3>
          <p className="text-[#5D5D5DCC] opacity-80 text-sm">
            High-level LinkedIn strategy, including content planning, audience targeting, and engagement best practices.
          </p>
        </div>

        <div className="w-[250px] h-[250px] px-6 py-12 bg-gray-50 rounded-lg text-center">
          <div className="flex items-center justify-center mx-auto mb-4">
            <Image src={content} alt="Content Creation" width={32} height={32} />
          </div>
          <h3 className="font-medium mb-2">Content Creation</h3>
          <p className="text-[#5D5D5DCC] opacity-80 text-sm">
            Copywriting, editing, and multimedia content designed to grow your online influence on LinkedIn.
          </p>
        </div>

        <div className="w-[250px] h-[250px] px-6 py-12 bg-gray-50 rounded-lg text-center">
          <div className="flex items-center justify-center mx-auto mb-4">
            <Image src={profile} alt="Profile Optimization" width={32} height={32} />
          </div>
          <h3 className="font-medium mb-2">Profile Optimization</h3>
          <p className="text-[#5D5D5DCC] opacity-80 text-sm">
            Enhancing LinkedIn profiles for senior leaders, stakeholders to attract the right connections and boost credibility.
          </p>
        </div>

        <div className="w-[250px] h-[250px] px-6 py-12 bg-gray-50 rounded-lg text-center">
          <div className="flex items-center justify-center mx-auto mb-4">
            <Image src={appointment} alt="Appointment Setting" width={32} height={32} />
          </div>
          <h3 className="font-medium mb-2">Appointment Setting</h3>
          <p className="text-[#5D5D5DCC] opacity-80 text-sm">
            We don't just grow your brand - we book meetings for you. Our targeted outreach ensures consistent sales calls from LinkedIn.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Growth