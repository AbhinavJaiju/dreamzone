import { useState } from 'react';
import { FaInfo } from 'react-icons/fa';

const LandingEQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  
  // WhatsApp URL generator
  const generateWhatsAppUrl = () => {
    const message = encodeURIComponent('Hi!');
    return `https://wa.me/+917306969826/?text=${message}`;
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4">
        {/* Your existing navbar content */}
      </nav>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-10 z-50">
        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-red-500 hover:bg-red-600 transition-colors duration-200 rounded-full p-3 shadow-lg"
        >
          <FaInfo className="h-6 w-6 text-white" />
        </a>
      </div>
    </>
  );
};

export default LandingEQ;