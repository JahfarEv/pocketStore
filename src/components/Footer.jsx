// import React from "react";
// import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
// import { BsInstagram } from "react-icons/bs";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// const Footer = ({ navigateTo }) => {
//   const navigate = useNavigate();

//   return (
//     <footer className="bg-gray-800 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Pocket Store</h3>
//             <p className="text-gray-400">
//               The ultimate multi-user shopping platform connecting customers and
//               shops.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <button
//                   onClick={() => navigateTo("home")}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Home
//                 </button>
//               </li>
//               <li>
//                 <a
//                   href="#features"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#how-it-works"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   How It Works
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#user-types"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   For Users
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">Support</h4>

//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Help Center
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   FAQs
//                 </a>
//               </li>

//               <li>
//                 <button
//                   onClick={() => navigateTo("contact")}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Contact Us
//                 </button>
//               </li>

//               <li>
//                 <button
//                   onClick={() => navigate("/terms-and-conditions")}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Terms & Conditions
//                 </button>
//               </li>

//               <li>
//                 <button
//                   onClick={() => navigate("/privacypolicy")}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Privacy Policy
//                 </button>
//               </li>

//               <li>
//                 <button
//                   onClick={() => navigate("/aboutUs")}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   About Us
//                 </button>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>

//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center space-x-3 text-gray-400 hover:text-white transition"
//                 >
//                   <FaFacebookSquare className="text-xl" />
//                   <span>Facebook</span>
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center space-x-3 text-gray-400 hover:text-white transition"
//                 >
//                   <FaSquareXTwitter className="text-xl" />
//                   <span>Twitter (X)</span>
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center space-x-3 text-gray-400 hover:text-white transition"
//                 >
//                   <BsInstagram className="text-xl" />
//                   <span>Instagram</span>
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center space-x-3 text-gray-400 hover:text-white transition"
//                 >
//                   <FaLinkedin className="text-xl" />
//                   <span>LinkedIn</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; 2025 PoketStor. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = ({ navigateTo }) => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Poket Store</h3>
            <p className="text-gray-400">
              The ultimate multi-user shopping platform connecting customers and shops.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo("home")} className="text-gray-400 hover:text-white transition">
                  Home
                </button>
              </li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
              <li><a href="#user-types" className="text-gray-400 hover:text-white transition">For Users</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
              <li>
                <button onClick={() => navigateTo("contact")} className="text-gray-400 hover:text-white transition">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/terms-and-conditions")} className="text-gray-400 hover:text-white transition">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/privacy-policy")} className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/aboutUs")} className="text-gray-400 hover:text-white transition">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition">
                  <FaFacebookSquare className="text-xl" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition">
                  <FaSquareXTwitter className="text-xl" />
                  <span>Twitter (X)</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition">
                  <BsInstagram className="text-xl" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition">
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PoketStor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
