import React from 'react';
import { FaCheckCircle, FaUser, FaStore } from 'react-icons/fa';

const UserTypesSection = () => {
  return (
    <section id="user-types" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Designed For Everyone</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Pocket Store caters to different types of users with specific needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Customers */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                <FaUser />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">For Customers</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-emerald-600 mt-1 mr-3" />
                <span>Browse products from multiple shops</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-emerald-600 mt-1 mr-3" />
                <span>Filter by location, price, and category</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-emerald-600 mt-1 mr-3" />
                <span>Secure payment options</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-emerald-600 mt-1 mr-3" />
                <span>Order tracking and history</span>
              </li>
            </ul>
          </div>
          
          {/* Shops & Sales */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                <FaStore />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">For Shops & Sales Teams</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-indigo-600 mt-1 mr-3" />
                <span>Direct registration or through sales teams</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-indigo-600 mt-1 mr-3" />
                <span>Product listing and inventory management</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-indigo-600 mt-1 mr-3" />
                <span>Sales performance analytics</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-indigo-600 mt-1 mr-3" />
                <span>Customer management tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;