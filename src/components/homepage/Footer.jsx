import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 pb-2 mb-4">
            DREAMZONE - SCHOOL OF CREATIVE STUDIES
          </h3>
          <p className="text-sm mb-4">
            DreamZone is a creative skill development initiative of CADD Centre Training Services Private Limited, a diversified global network of creative, engineering, and management skill development institutes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 pb-2 mb-4">CONTACT US</h3>
          <p className="text-sm mb-2">
            Door No: 32/1190, 1st Floor, K K Tower, Civil Lane Road, Palarivattom, Ernakulam, Kerala 682025
          </p>
          <p className="text-sm mb-2">Phone: +91 96053 49393</p>
          <p className="text-sm">Email: <a href="mailto:info@dreamzonekochi.com" className="hover:text-red-500 transition duration-300">info@dreamzonekochi.com</a></p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dreamzone School of Creative Studies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
