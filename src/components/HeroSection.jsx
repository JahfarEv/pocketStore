import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Revolutionize Your Shopping Experience</h1>
            <p className="text-xl text-white opacity-90 mb-10">The ultimate multi-user platform connecting customers, shops, and sales teams in one seamless application.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#download" className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition flex items-center justify-center">
                <FaGooglePlay className="text-2xl mr-3" />
                Get on Play Store
              </a>
              <a href="#features" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition">Learn More</a>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-4 transform rotate-3">
              <div className="bg-gray-200 rounded-xl flex items-center justify-center">
                <img src="/pocketStore.png" alt="Pocket Store App" className="rounded-xl object-cover" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-400 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;