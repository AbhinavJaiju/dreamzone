import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const LandingEQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  // Phone number
  const phoneNumber = '+917306969826';

  return (
    <>
      {/* Phone Call Button */}
      <div className="fixed bottom-22 left-6 z-50">
        <a
          href={`tel:${phoneNumber}`}
          className="block bg-blue-500 hover:bg-blue-600 transition-colors duration-200 rounded-full p-3 shadow-lg"
        >
          <FaPhone className="h-6 w-6 text-white" />
        </a>
      </div>
    </>
  );
};

export default LandingEQ;