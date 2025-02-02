import { useState } from 'react';

const LandingEQ = () => {

  return (
    <>

      {/* WhatsApp Button */}
      <div className="fixed text-ver top-1/2 -translate-y-1/2 right-0 z-50">
        <a href="/contact"
          className="block bg-red-500 hover:bg-red-600 transition-colors duration-200  p-2 shadow-lg"
        >
          <span className="h-6 w-6 text-white" > 
            Enquiry 
          </span>
        </a>
      </div>
    </>
  );
};

export default LandingEQ;