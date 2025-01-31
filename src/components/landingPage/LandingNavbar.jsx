import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import firstLogo from "../../assets/logo.png";
import nsdc from "../../assets/nsdc.png";
import skillIndia from "../../assets/skill-india.png";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false); // State for mobile courses dropdown

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex space-x-6 pl-4">
          <img src={firstLogo} alt="Logo 1" className="h-12 w-auto" />
          <img src={nsdc} alt="Logo 2" className="h-12 w-auto hidden md:block" />
          <img src={skillIndia} alt="Logo 3" className="h-12 w-auto hidden md:block" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-semibold">
          <li>
            <a href="#" className="px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
              Home
            </a>
          </li>

          {/* Courses Dropdown */}
          <li className="relative group">
            <a href="#" className="px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
              Courses
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 delay-100 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-red-500 hover:text-white rounded-t-md">
                Fashion Design
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-red-500 hover:text-white">
                Interior Design
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-red-500 hover:text-white">
                Animation & Graphics
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-red-500 hover:text-white rounded-b-md">
                Photography
              </a>
            </div>
          </li>

          <li>
            <a href="#" className="px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
              FAQ
            </a>
          </li>

          {/* Contact Us Button */}
          <li>
            <a href="/contact" className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition whitespace-nowrap">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(true)}>
          <Menu className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile Menu (Slide-in from Right) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6"
          >
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-gray-800" onClick={() => setIsOpen(false)}>
              <X className="h-8 w-8" />
            </button>

            {/* Mobile Nav Items */}
            <ul className="mt-12 space-y-6 text-lg font-semibold">
              <li>
                <a href="#" className="block px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition">
                  FAQ
                </a>
              </li>

              {/* Courses Dropdown in Mobile */}
              <li>
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="block px-3 py-2 hover:text-white hover:bg-red-500 rounded-md transition w-full text-left"
                >
                  Courses
                </button>
                {isCoursesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="#" className="block px-3 py-2 hover:bg-red-500 hover:text-white rounded-md">
                      Fashion Design
                    </a>
                    <a href="#" className="block px-3 py-2 hover:bg-red-500 hover:text-white rounded-md">
                      Interior Design
                    </a>
                    <a href="#" className="block px-3 py-2 hover:bg-red-500 hover:text-white rounded-md">
                      Animation & Graphics
                    </a>
                    <a href="#" className="block px-3 py-2 hover:bg-red-500 hover:text-white rounded-md">
                      Photography
                    </a>
                  </div>
                )}
              </li>

              {/* Contact Us Button */}
              <li>
                <a href="#" className="block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default LandingNavbar;