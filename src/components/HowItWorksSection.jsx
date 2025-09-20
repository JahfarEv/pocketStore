import React from 'react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple steps to get started with Pocket Store</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Register Your Account</h3>
            <p className="text-gray-600">Sign up as a customer, shop owner, salesman, or sales manager based on your needs.</p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Up Your Profile</h3>
            <p className="text-gray-600">Complete your profile, add products if you're a shop, or set preferences if you're a customer.</p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Start Exploring</h3>
            <p className="text-gray-600">Browse products, make purchases, or manage your shop inventory based on your user type.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;