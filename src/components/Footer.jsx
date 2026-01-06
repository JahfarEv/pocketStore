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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pocket Store</h3>
            <p className="text-gray-400">
              The ultimate multi-user shopping platform connecting customers and
              shops.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo("home")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#user-types"
                  className="text-gray-400 hover:text-white transition"
                >
                  For Users
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("contact")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/terms-and-conditions")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms And Condition
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/privacypolicy")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </button>
              </li>{" "}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebookSquare />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaSquareXTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <BsInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin />
              </a>
            </div>
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
