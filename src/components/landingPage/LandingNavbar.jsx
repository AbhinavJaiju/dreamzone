import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import firstLogo from "../../assets/logo.png";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false); // State for mobile courses dropdown

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex space-x-6 pl-4">
          <img src={firstLogo} alt="Logo 1" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-semibold">

          {/* Contact Us Button */}
          <li>
            <a href="/contact" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition whitespace-nowrap">
              Enquire Us
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
              

              {/* Contact Us Button */}
              <li>
                <a href="/contact" className="block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
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