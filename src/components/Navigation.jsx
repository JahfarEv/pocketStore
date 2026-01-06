// // import React from 'react';
// // import { FaBars, FaTimes } from 'react-icons/fa';

// // const Navigation = ({ currentPage, navigateTo, isMenuOpen, toggleMenu }) => {
// //   return (
// //     <nav className="bg-white shadow-lg fixed w-full z-50">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="flex justify-between h-16">
// //           <div className="flex space-x-7">
// //             <div className="flex items-center">
// //               <button 
// //                 onClick={() => navigateTo('home')} 
// //                 className="text-indigo-600 font-bold text-2xl font-aparajita"
// //               >
// //                 PoketStor
// //               </button>
// //             </div>
// //           </div>
// //           <div className="hidden md:flex items-center space-x-3">
// //             <button 
// //               onClick={() => navigateTo('home')} 
// //               className={`py-2 px-4 ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
// //             >
// //               Home
// //             </button>
// //             {currentPage === 'home' && (
// //               <>
// //                 <a href="#features" className="py-2 px-4 text-gray-700 hover:text-indigo-600">Features</a>
// //                 <a href="#how-it-works" className="py-2 px-4 text-gray-700 hover:text-indigo-600">How It Works</a>
// //                 <a href="#user-types" className="py-2 px-4 text-gray-700 hover:text-indigo-600">For Users</a>
// //               </>
// //             )}
// //             <button 
// //               onClick={() => navigateTo('contact')} 
// //               className={`py-2 px-4 ${currentPage === 'contact' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
// //             >
// //               Contact Us
// //             </button>
// //             <a href="#download" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Download Now</a>
// //           </div>
// //           <div className="md:hidden flex items-center">
// //             <button onClick={toggleMenu} className="outline-none">
// //               {isMenuOpen ? <FaTimes className="w-6 h-6 text-gray-700" /> : <FaBars className="w-6 h-6 text-gray-700" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
      
// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden bg-white px-4 pt-2 pb-4">
// //           <button 
// //             onClick={() => navigateTo('home')} 
// //             className={`block py-2 w-full text-left ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
// //           >
// //             Home
// //           </button>
// //           {currentPage === 'home' && (
// //             <>
// //               <a href="#features" className="block py-2 text-gray-700 hover:text-indigo-600">Features</a>
// //               <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-indigo-600">How It Works</a>
// //               <a href="#user-types" className="block py-2 text-gray-700 hover:text-indigo-600">For Users</a>
// //             </>
// //           )}
// //           <button 
// //             onClick={() => navigateTo('contact')} 
// //             className={`block py-2 w-full text-left ${currentPage === 'contact' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
// //           >
// //             Contact Us
// //           </button>
// //           <a href="#download" className="block bg-indigo-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-indigo-700 transition">Download Now</a>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navigation;  


// import React from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navigation = ({ currentPage, navigateTo, isMenuOpen, toggleMenu }) => {
//   return (
//     <nav className="bg-indigo-700 shadow-lg fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-16">
//           <div className="flex space-x-7">
//             <div className="flex items-center">
//               <div 
//                 onClick={() => navigateTo('home')} 
//                 className="text-white font-bold text-4xl font-aparajita"
//               >
//                 Poket<span className='text-yellow-400'>Stor</span>
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-3">
//             <button 
//               onClick={() => navigateTo('home')} 
//               className={`py-2 px-4 ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
//             >
//               Home
//             </button>
//             {currentPage === 'home' && (
//               <>
//                 <a href="#features" className="py-2 px-4 text-white hover:text-gray-300">Features</a>
//                 <a href="#how-it-works" className="py-2 px-4 text-white hover:text-gray-300">How It Works</a>
//                 <a href="#user-types" className="py-2 px-4 text-white hover:text-gray-300">For Users</a>
//               </>
//             )}
//             <button 
//               onClick={() => navigateTo('careers')} 
//               className={`py-2 px-4 ${currentPage === 'careers' ? 'text-white' : 'text-gray-700 hover:text-gray-300'}`}
//             >
//               Careers
//             </button>
//             <button 
//               onClick={() => navigateTo('contact')} 
//               className={`py-2 px-4 ${currentPage === 'contact' ? 'text-white' : 'text-gray-700 hover:text-gray-300'}`}
//             >
//               Contact Us
//             </button>
//             {/* <a href="#download" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Download Now</a> */}
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="outline-none">
//               {isMenuOpen ? <FaTimes className="w-6 h-6 text-gray-700" /> : <FaBars className="w-6 h-6 text-gray-700" />}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white px-4 pt-2 pb-4">
//           <button 
//             onClick={() => navigateTo('home')} 
//             className={`block py-2 w-full text-left ${currentPage === 'home' ? 'text-white' : 'text-gray-700 hover:text-indigo-600'}`}
//           >
//             Home
//           </button>
//           {currentPage === 'home' && (
//             <>
//               <a href="#features" className="block py-2 text-gray-700 hover:text-indigo-600">Features</a>
//               <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-indigo-600">How It Works</a>
//               <a href="#user-types" className="block py-2 text-gray-700 hover:text-indigo-600">For Users</a>
//             </>
//           )}
//           <button 
//             onClick={() => navigateTo('careers')} 
//             className={`block py-2 w-full text-left ${currentPage === 'careers' ? 'text-white' : 'text-gray-700 hover:text-indigo-600'}`}
//           >
//             Careers
//           </button>
//           <button 
//             onClick={() => navigateTo('contact')} 
//             className={`block py-2 w-full text-left ${currentPage === 'contact' ? 'text-white' : 'text-gray-700 hover:text-indigo-600'}`}
//           >
//             Contact Us
//           </button>
//           <a href="#download" className="block bg-indigo-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-indigo-700 transition">Download Now</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;

import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = ({ currentPage, navigateTo, isMenuOpen, toggleMenu }) => {
  return (
    <nav className="bg-indigo-700 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-7">
            <div className="flex items-center">
              <div 
                onClick={() => navigateTo('home')} 
                className="text-white font-bold text-4xl font-aparajita cursor-pointer"
              >
                Poket<span className='text-yellow-400'>Stor</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => navigateTo('home')} 
              className={`py-2 px-4 font-medium ${currentPage === 'home' ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`}
            >
              Home
            </button>
            
            {currentPage === 'home' && (
              <>
                <a href="#features" className="py-2 px-4 font-medium text-white hover:text-yellow-300">Features</a>
                <a href="#how-it-works" className="py-2 px-4 font-medium text-white hover:text-yellow-300">How It Works</a>
                <a href="#user-types" className="py-2 px-4 font-medium text-white hover:text-yellow-300">For Users</a>
              </>
            )}
            
            <button 
              onClick={() => navigateTo('careers')} 
              className={`py-2 px-4 font-medium ${currentPage === 'careers' ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`}
            >
              Careers
            </button>
            
            <button 
              onClick={() => navigateTo('contact')} 
              className={`py-2 px-4 font-medium ${currentPage === 'contact' ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`}
            >
              Contact Us
            </button>
            
            {/* Download Now button if needed */}
            {/* <button className="bg-yellow-400 text-indigo-700 font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition duration-300">
              Download Now
            </button> */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="outline-none p-2"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 px-4 pt-2 pb-4">
          <button 
            onClick={() => {
              navigateTo('home');
              toggleMenu();
            }} 
            className={`block py-3 w-full text-left font-medium ${currentPage === 'home' ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`}
          >
            Home
          </button>
          
          {currentPage === 'home' && (
            <>
              <a 
                href="#features" 
                onClick={toggleMenu}
                className="block py-3 font-medium text-white hover:text-yellow-300"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                onClick={toggleMenu}
                className="block py-3 font-medium text-white hover:text-yellow-300"
              >
                How It Works
              </a>
              <a 
                href="#user-types" 
                onClick={toggleMenu}
                className="block py-3 font-medium text-white hover:text-yellow-300"
              >
                For Users
              </a>
            </>
          )}
          
          <button 
            onClick={() => {
              navigateTo('careers');
              toggleMenu();
            }} 
            className={`block py-3 w-full text-left font-medium ${currentPage === 'careers' ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`}
          >
            Careers
          </button>
          
          <button 
            onClick={() => {
              navigateTo('contact');
              toggleMenu();
            }} 
            className={`block py-3 w-full text-left font-medium ${currentPage === 'contact' ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}`}
          >
            Contact Us
          </button>
          
          {/* Optional Download button for mobile */}
          {/* <button className="block w-full bg-yellow-400 text-indigo-700 font-bold px-4 py-3 rounded-lg mt-2 hover:bg-yellow-300 transition duration-300">
            Download Now
          </button> */}
        </div>
      )}
    </nav>
  );
};

export default Navigation;