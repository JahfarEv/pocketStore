import React from 'react';
import { FaStar, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

const AppPreviewSection = () => {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Pocket Store</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">See how our app makes shopping and selling easier for everyone</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Easy Shopping Experience</h3>
            <p className="text-gray-600 mb-6">Browse through thousands of products from local shops and businesses. Filter by category, price range, or location to find exactly what you need.</p>
            
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                <FaStar />
              </div>
              <p className="text-gray-800">Personalized recommendations based on your preferences</p>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                <FaMapMarkerAlt />
              </div>
              <p className="text-gray-800">Find products available near your location</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                <FaShoppingCart />
              </div>
              <p className="text-gray-800">Secure checkout with multiple payment options</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <img src="/aaa2.png" alt="Pocket Store App" className="rounded-xl object-cover mx-auto" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full opacity-50 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;