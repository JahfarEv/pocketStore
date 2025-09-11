// import React, { useState } from 'react';
// import { FaGooglePlay, FaStore, FaShoppingCart, FaFilter, FaMapMarkerAlt, FaUsers, FaChartLine, FaCheckCircle, FaUser, FaBars, FaTimes } from 'react-icons/fa';

// const PocketStoreLanding = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-lg fixed w-full z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between h-16">
//             <div className="flex space-x-7">
//               <div className="flex items-center">
//                 <span className="text-indigo-600 font-bold text-2xl">Pocket Store</span>
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-3">
//               <a href="#features" className="py-2 px-4 text-gray-700 hover:text-indigo-600">Features</a>
//               <a href="#how-it-works" className="py-2 px-4 text-gray-700 hover:text-indigo-600">How It Works</a>
//               <a href="#user-types" className="py-2 px-4 text-gray-700 hover:text-indigo-600">For Users</a>
//               <a href="#download" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Download Now</a>
//             </div>
//             <div className="md:hidden flex items-center">
//               <button onClick={toggleMenu} className="outline-none">
//                 {isMenuOpen ? <FaTimes className="w-6 h-6 text-gray-700" /> : <FaBars className="w-6 h-6 text-gray-700" />}
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white px-4 pt-2 pb-4">
//             <a href="#features" className="block py-2 text-gray-700 hover:text-indigo-600">Features</a>
//             <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-indigo-600">How It Works</a>
//             <a href="#user-types" className="block py-2 text-gray-700 hover:text-indigo-600">For Users</a>
//             <a href="#download" className="block bg-indigo-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-indigo-700 transition">Download Now</a>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-indigo-600 pt-32 pb-20 md:pt-40 md:pb-28" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Revolutionize Your Shopping Experience</h1>
//           <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-10">The ultimate multi-user platform connecting customers, shops, and sales teams in one seamless application.</p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <a href="#download" className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition flex items-center justify-center">
//               <FaGooglePlay className="text-2xl mr-3" />
//               Get on Play Store
//             </a>
//             <a href="#features" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition">Learn More</a>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">Pocket Store offers a comprehensive set of features for all types of users</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//               <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
//                 <FaStore className="text-indigo-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Shop Registration</h3>
//               <p className="text-gray-600">Shops can register directly or through sales managers to list their products on the platform.</p>
//             </div>
            
//             {/* Feature 2 */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//               <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
//                 <FaShoppingCart className="text-emerald-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Seamless Shopping</h3>
//               <p className="text-gray-600">Customers can browse, filter, and purchase products from various shops with ease.</p>
//             </div>
            
//             {/* Feature 3 */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//               <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
//                 <FaFilter className="text-indigo-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Filtering</h3>
//               <p className="text-gray-600">Find exactly what you need with powerful filtering options by location, price, and more.</p>
//             </div>
            
//             {/* Feature 4 */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//               <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
//                 <FaMapMarkerAlt className="text-emerald-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Location-Based</h3>
//               <p className="text-gray-600">View products from all places or focus on specific locations near you.</p>
//             </div>
            
//             {/* Feature 5 */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//               <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
//                 <FaUsers className="text-indigo-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-User Platform</h3>
//               <p className="text-gray-600">Designed for customers, shop owners, sales managers, and salesmen with tailored experiences.</p>
//             </div>
            
//             {/* Feature 6 */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//               <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
//                 <FaChartLine className="text-emerald-600 text-2xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Analytics</h3>
//               <p className="text-gray-600">Shop owners get insights into sales performance and customer behavior.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple steps to get started with Pocket Store</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Step 1 */}
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Register Your Account</h3>
//               <p className="text-gray-600">Sign up as a customer, shop owner, salesman, or sales manager based on your needs.</p>
//             </div>
            
//             {/* Step 2 */}
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Up Your Profile</h3>
//               <p className="text-gray-600">Complete your profile, add products if you're a shop, or set preferences if you're a customer.</p>
//             </div>
            
//             {/* Step 3 */}
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Start Exploring</h3>
//               <p className="text-gray-600">Browse products, make purchases, or manage your shop inventory based on your user type.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* User Types Section */}
//       <section id="user-types" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Designed For Everyone</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">Pocket Store caters to different types of users with specific needs</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Customers */}
//             <div className="bg-gray-50 p-8 rounded-lg shadow-md">
//               <div className="flex items-center mb-6">
//                 <div className="w-14 h-14 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
//                   <FaUser />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-800">For Customers</h3>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <FaCheckCircle className="text-emerald-600 mt-1 mr-3" />
//                   <span>Browse products from multiple shops</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FaCheckCircle className="text-emerald-600 mt-1 mr-3" />
//                   <span>Filter by location, price, and category</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FaCheckCircle className="text-emerald-600 mt-1 mr-3" />
//                   <span>Secure payment options</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FaCheckCircle className="text-emerald-600 mt-1 mr-3" />
//                   <span>Order tracking and history</span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Shops & Sales */}
//             <div className="bg-gray-50 p-8 rounded-lg shadow-md">
//               <div className="flex items-center mb-6">
//                 <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
//                   <FaStore />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-800">For Shops & Sales Teams</h3>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <FaCheckCircle className="text-indigo-600 mt-1 mr-3" />
//                   <span>Direct registration or through sales teams</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FaCheckCircle className="text-indigo-600 mt-1 mr-3" />
//                   <span>Product listing and inventory management</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FaCheckCircle className="text-indigo-600 mt-1 mr-3" />
//                   <span>Sales performance analytics</span>
//                 </li>
//                 <li className="flex items-start">
//                   <FaCheckCircle className="text-indigo-600 mt-1 mr-3" />
//                   <span>Customer management tools</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Download Section */}
//       <section id="download" className="py-20 bg-indigo-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Pocket Store Now</h2>
//           <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-10">Available on Google Play Store. Download now and start your seamless shopping experience!</p>
          
//           <div className="flex justify-center">
//             <a href="#" className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition flex items-center">
//               <FaGooglePlay className="text-3xl mr-3" />
//               <div className="text-left">
//                 <div className="text-xs">GET IT ON</div>
//                 <div className="text-xl">Google Play</div>
//               </div>
//             </a>
//           </div>
          
//           <div className="mt-12 max-w-4xl mx-auto">
//             <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center text-white">
//               App Screenshot Preview
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Pocket Store</h3>
//               <p className="text-gray-400">The ultimate multi-user shopping platform connecting customers and shops.</p>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
//                 <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
//                 <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
//                 <li><a href="#user-types" className="text-gray-400 hover:text-white transition">For Users</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Support</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition">FB</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">TW</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">IG</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition">LI</a>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 Pocket Store. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PocketStoreLanding;



import React, { useState } from 'react';
import { FaGooglePlay, FaStore, FaShoppingCart, FaFilter, FaMapMarkerAlt, FaUsers, FaChartLine, FaCheckCircle, FaUser, FaBars, FaTimes, FaStar, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const PocketStoreLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-7">
              <div className="flex items-center">
                <span className="text-indigo-600 font-bold text-2xl">Pocket Store</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <a href="#features" className="py-2 px-4 text-gray-700 hover:text-indigo-600">Features</a>
              <a href="#how-it-works" className="py-2 px-4 text-gray-700 hover:text-indigo-600">How It Works</a>
              <a href="#user-types" className="py-2 px-4 text-gray-700 hover:text-indigo-600">For Users</a>
              <a href="#download" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Download Now</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="outline-none">
                {isMenuOpen ? <FaTimes className="w-6 h-6 text-gray-700" /> : <FaBars className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4">
            <a href="#features" className="block py-2 text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-indigo-600">How It Works</a>
            <a href="#user-types" className="block py-2 text-gray-700 hover:text-indigo-600">For Users</a>
            <a href="#download" className="block bg-indigo-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-indigo-700 transition">Download Now</a>
          </div>
        )}
      </nav>

      {/* Hero Section with Image */}
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
                {/* Replace the div below with your actual image */}
                <div className="bg-gray-200 rounded-xl  flex items-center justify-center">
                  <span className="text-gray-500">
                    {/* Replace this with: <img src="/path/to/pocketStore.png" alt="Pocket Store App" className="rounded-xl" /> */}
                    <img src="/pocketStore.png" alt="Pocket Store App" className="rounded-xl  object-cover" />
                  </span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-400 rounded-full opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works Section */}
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

      {/* User Types Section */}
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

      {/* App Preview Section */}
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
              {/* Replace this with your actual image */}
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <img src="/pocketimage.png" alt="Pocket Store App" className="rounded-xl h-96 object-cover mx-auto" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full opacity-50 z-0"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full opacity-50 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pocket Store</h3>
              <p className="text-gray-400">The ultimate multi-user shopping platform connecting customers and shops.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
                <li><a href="#user-types" className="text-gray-400 hover:text-white transition">For Users</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookSquare />
</a>
                <a href="#" className="text-gray-400 hover:text-white transition"><FaSquareXTwitter />
</a>
                <a href="#" className="text-gray-400 hover:text-white transition"><BsInstagram />
</a>
                <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin />
</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Pocket Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PocketStoreLanding;