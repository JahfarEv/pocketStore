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
  onClick={() => navigateTo("services")}
  className="group relative w-full sm:w-auto px-5 sm:px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 rounded-xl shadow-2xl hover:shadow-purple-500/30 hover:shadow-3xl transition-all duration-400 transform hover:scale-[1.03] min-w-[300px] border border-white/20"
>
  {/* Enhanced glow effect */}
  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
  
  {/* Pulsing ring effect */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>

  <div className="relative flex items-center justify-center space-x-3 sm:space-x-4">
    {/* Animated icon */}
    <div className="relative">
      <div className="absolute -inset-2 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
      <FaCode className="relative text-white text-lg sm:text-xl animate-[bounce_2s_ease-in-out_infinite]" />
    </div>
    
    <div className="text-center sm:text-left cursor-pointer">
      {/* Main text with stronger emphasis */}
      <div className="text-white font-extrabold text-sm sm:text-base tracking-wide whitespace-nowrap drop-shadow-lg">
        <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
          CUSTOM SOFTWARE
        </span>
      </div>
      
      {/* Subtext with animated arrow */}
      <div className="text-white/95 text-xs sm:text-sm font-semibold flex items-center justify-center sm:justify-start mt-1">
        <span className="hidden sm:inline bg-gradient-to-r from-blue-100 to-purple-300 bg-clip-text text-transparent">
          Premium Websites & Mobile Apps
        </span>
        <span className="inline sm:hidden bg-gradient-to-r from-blue-100 to-purple-300 bg-clip-text text-transparent">
          Websites & Mobile Apps
        </span>
        <FaArrowRight className="ml-2 sm:ml-3 text-sm sm:text-base transform group-hover:translate-x-2 transition-transform duration-300 ease-out animate-[slide_1.5s_ease-in-out_infinite]" />
      </div>
      
     
    </div>
  </div>
  
  {/* Shimmer effect */}
  <div className="absolute inset-0 rounded-xl overflow-hidden">
    <div className="absolute -inset-y-full -left-20 w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-1000 ease-out"></div>
  </div>
</button>
            </div>

            {/* Services Link - Subtle and Minimal */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row items-center  gap-4">
                {/* Services Button */}
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
