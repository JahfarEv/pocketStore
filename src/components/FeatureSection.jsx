import React from 'react';
import { FaStore, FaShoppingCart, FaFilter, FaMapMarkerAlt, FaUsers, FaChartLine } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Pocket Store offers a comprehensive set of features for all types of users</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <FaStore className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Shop Registration</h3>
            <p className="text-gray-600">Shops can register directly or through sales managers to list their products on the platform.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <FaShoppingCart className="text-emerald-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Seamless Shopping</h3>
            <p className="text-gray-600">Customers can browse, filter, and purchase products from various shops with ease.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <FaFilter className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Filtering</h3>
            <p className="text-gray-600">Find exactly what you need with powerful filtering options by location, price, and more.</p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-emerald-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Location-Based</h3>
            <p className="text-gray-600">View products from all places or focus on specific locations near you.</p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <FaUsers className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-User Platform</h3>
            <p className="text-gray-600">Designed for customers, shop owners, sales managers, and salesmen with tailored experiences.</p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <FaChartLine className="text-emerald-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Analytics</h3>
            <p className="text-gray-600">Shop owners get insights into sales performance and customer behavior.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;