import React from 'react';
import firstLogo from '../../assets/logo.png';
import nsdc from '../../assets/nsdc.png';
import skillIndia from '../../assets/skill-india.png';

const Navbar = () => {
  return (
    <nav className="bg-white-900 p-4">
      <div className="container mx-auto flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8 pl-4">
        <div className="w-1/3 sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
          <img
            src={firstLogo}
            alt="Logo 1"
            className="h-16 sm:h-20 w-auto"
          />
        </div>
        {/* <div className="w-1/3 sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
          <img
            src={nsdc}
            alt="Logo 2"
            className="h-16 sm:h-20 w-auto"
          />
        </div>
        <div className="w-1/3 sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
          <img
            src={skillIndia}
            alt="Logo 3"
            className="h-16 sm:h-20 w-auto"
          />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;