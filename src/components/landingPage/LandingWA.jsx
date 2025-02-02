import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const LandingWA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  
  // WhatsApp URL generator
  const generateWhatsAppUrl = () => {
    const message = encodeURIComponent('Hi!');
    return `https://wa.me/+917306969826/?text=${message}`;
  };

  return (
    <>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500 hover:bg-green-600 transition-colors duration-200 rounded-full p-3 shadow-lg"
        >
          <FaWhatsapp className="h-6 w-6 text-white" />
        </a>
      </div>
    </>
  );
};

export default LandingWA;