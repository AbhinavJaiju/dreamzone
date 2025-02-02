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
        {/* <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 pb-2 mb-4">USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="/" className="block border-b-2 border-gray-700 pb-2 hover:text-red-500 transition duration-300 mt-2">Home</a>
            </li>
            <li>
              <a href="#" className="block border-b-2 border-gray-700 pb-2 hover:text-red-500 transition duration-300 mt-2">About Us</a>
            </li>
            <li>
              <a href="#" className="block border-b-2 border-gray-700 pb-2 hover:text-red-500 transition duration-300 mt-2">Courses</a>
            </li>
            <li>
              <a href="#" className="block border-b-2 border-gray-700 pb-2 hover:text-red-500 transition duration-300 mt-2">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 pb-2 mb-4">MAIN COURSES</h3>
          <ul>
            <li>
              <a href="#" className="block border-b-2 border-gray-700 pb-2 hover:text-red-500 transition duration-300 mt-2">Fashion Design </a>
            </li>
            <li>
              <a href="#" className="block border-b-2 border-gray-700 pb-2 hover:text-red-500 transition duration-300 mt-2">Interior Design</a>
            </li>
            <li>
              <a href="#" className="block border-b-2 border-gray-700 pb-2 hover:text-red-500 transition duration-300 mt-2">Animation & Graphics</a>
            </li>
          </ul>
        </div> */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 pb-2 mb-4">CONTACT US</h3>
          <p className="text-sm mb-2">
          Near FAZYO, Lal Bahadur Shastri Rd, Kottayam, Kerala 686001
          </p>
          <p className="text-sm mb-2">Phone: +91 73069 69826</p>
          <p className="text-sm">Email: <a href="mailto:Dzkottayam@gmail.com" className="hover:text-red-500 transition duration-300">Dzkottayam@gmail.com</a></p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dreamzone School of Creative Studies Kottayam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
