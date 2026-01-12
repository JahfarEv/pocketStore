import React from "react";
import { FaGooglePlay, FaUsers, FaCode, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ navigateTo }) => {
    const navigate = useNavigate();

  return (
    <section className="pt-5 pb-20 md:pt-40 md:pb-28 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionize Your Shopping Experience
            </h1>
            <p className="text-xl text-white opacity-90 mb-10">
              The ultimate multi-user platform connecting customers, shops, and
              sales teams in one seamless application.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <a
                href="#download"
                className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition flex items-center justify-center"
              >
                <FaGooglePlay className="text-2xl mr-3" />
                Get on Play Store
              </a>
               {/* Join Our Team Button */}
            <button
              onClick={() => navigateTo("careers")}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition flex items-center justify-center w-full sm:w-auto cursor-pointer"
            >
              <FaUsers className="text-xl mr-3" />
              <div className="flex flex-col items-start">
                <span className="font-bold text-lg drop-shadow-md">
                  Start today,
                </span>
                <span className="text-sm font-medium">
                  build your opportunities
                </span>
              </div>
            </button>
            
            </div>

           

            {/* Services Link - Subtle and Minimal */}
<div className="pt-6">
  <div className="flex flex-col sm:flex-row items-center  gap-4">
    {/* Services Button */}
    <button
      onClick={() => navigateTo("services")}
      className="group relative w-full sm:w-auto px-4 sm:px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[280px] sm:min-w-[320px] md:min-w-[360px]"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
      
      <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
        <FaCode className="text-white text-sm sm:text-base animate-bounce" />
        <div className="text-center sm:text-left">
          <div className="text-white font-bold text-xs sm:text-sm whitespace-nowrap">
            CUSTOM SOFTWARE
          </div>
          <div className="text-white/90 text-xs font-medium flex items-center justify-center sm:justify-start">
            <span className="hidden sm:inline">Professional websites & apps</span>
            <span className="inline sm:hidden">Websites & Apps</span>
            <FaArrowRight className="ml-1 sm:ml-2 text-xs group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </button>

    {/* Learn More Button */}
    <a
      href="#features"
      className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition text-center"
    >
      <span className="text-sm sm:text-base">Learn More</span>
    </a>
  </div>
</div>

          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-4 transform rotate-3">
              <div className="bg-gray-200 rounded-xl flex items-center justify-center">
                <img
                  src="/aaa.png"
                  alt="Pocket Store App"
                  className="rounded-xl object-cover"
                />
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
