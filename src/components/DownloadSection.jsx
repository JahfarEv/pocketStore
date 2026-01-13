import React from 'react';
import { FaGooglePlay, FaShoppingCart } from 'react-icons/fa';

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Get Pocket Store Now
        </h2>

        <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-10">
          Available on Google Play Store. Download now and start your seamless shopping experience!
        </p>

        {/* Play Store Button */}
        <div className="flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.poketstor.platform&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition flex items-center"
          >
            <FaGooglePlay className="text-3xl mr-3" />
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl">Google Play</div>
            </div>
          </a>
        </div>

        {/* App Preview Card */}
       <div className="mt-12 max-w-4xl mx-auto">
  <div className="relative group">
    {/* Glow effect behind card */}
    {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div> */}
    
    {/* <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-2 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"> */}
      <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black h-64 w-48 rounded-xl mx-auto overflow-hidden relative">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                             linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Shiny top edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6">
          
          {/* Icon with glow */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-40"></div>
            <div className="relative bg-gradient-to-br from-cyan-600 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
              <FaShoppingCart className="text-2xl" />
            </div>
          </div>
          
          {/* App name with subtle gradient */}
          <p className="font-bold text-xl mb-1 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Pocket Store
          </p>
          
          {/* Tagline */}
          <p className="text-xs text-gray-300 mb-6">Shopping Made Easy</p>
          
          {/* Decorative line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          
          {/* Download button with shine effect */}
          <div className="relative group/btn">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 group-hover/btn:opacity-50 transition"></div>
            <a
              href="https://play.google.com/store/apps/details?id=com.poketstor.platform&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-cyan-700 to-purple-700 hover:from-cyan-600 hover:to-purple-600 text-white text-xs py-2.5 px-6 rounded-lg inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              Install Now
            </a>
          </div>
          
          {/* Rating stars - subtle */}
          {/* <div className="mt-6 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs text-yellow-400">★</span>
            ))}
            <span className="text-xs text-gray-400 ml-1">4.8</span>
          </div> */}
        </div>
      </div>
    {/* </div> */}
  </div>
</div>

      </div>
    </section>
  );
};

export default DownloadSection;
