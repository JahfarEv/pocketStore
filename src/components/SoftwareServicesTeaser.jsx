import React from 'react';
import { FaCode, FaPaintBrush, FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const SoftwareServicesTeaser = ({ navigateTo }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Also Build Amazing Websites
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Beyond Pocket Store, we create stunning digital solutions for your business
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Service Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCode className="text-blue-400 text-2xl" />
            </div>
            <h3 className="font-semibold">Web Development</h3>
          </div>

          <div className="text-center p-4">
            <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPaintBrush className="text-purple-400 text-2xl" />
            </div>
            <h3 className="font-semibold">Web Design</h3>
          </div>

          <div className="text-center p-4">
            <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShoppingCart className="text-green-400 text-2xl" />
            </div>
            <h3 className="font-semibold">E-commerce</h3>
          </div>

          <div className="text-center p-4">
            <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-xl font-bold">+3</div>
            </div>
            <h3 className="font-semibold">More Services</h3>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => navigateTo("services")}
            className="group bg-white text-gray-900 font-bold px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <span>Explore Our Software Services</span>
            <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <p className="mt-4 text-gray-400">
            Professional websites • Portfolio sites • Landing pages • Custom solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftwareServicesTeaser;