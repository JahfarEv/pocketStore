import React from 'react';
import { FaGooglePlay, FaShoppingCart } from 'react-icons/fa';

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Pocket Store Now</h2>
        <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-10">Available on Google Play Store. Download now and start your seamless shopping experience!</p>
        
        <div className="flex justify-center">
          <a href="#" className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition flex items-center">
            <FaGooglePlay className="text-3xl mr-3" />
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl">Google Play</div>
            </div>
          </a>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-2 rounded-2xl shadow-xl inline-block">
            <div className="bg-gray-800 h-64 w-48 rounded-xl flex items-center justify-center text-white mx-auto">
              <div className="text-center p-4">
                <FaShoppingCart className="text-3xl mx-auto mb-4" />
                <p className="font-bold">Pocket Store</p>
                <p className="text-xs mt-2">Shopping Made Easy</p>
                <div className="mt-6">
                  <div className="bg-indigo-600 text-white text-xs py-2 px-4 rounded-lg">Install Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;