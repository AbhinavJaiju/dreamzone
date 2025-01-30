import React, { useEffect, useState } from "react";
import services from "../../assets/services-bg.jpg";
import p2 from "../../assets/p-2.jpg";
import p3 from "../../assets/p-3.jpg";
import p5 from "../../assets/p-5.jpg";

const Events = () => {
    const [isVisible, setIsVisible] = useState([false, false, false]);

    // Intersection Observer callback function
    const handleScroll = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(handleScroll, {
        threshold: 0.5, // Trigger when 50% of the element is in view
      });
  
      const images = document.querySelectorAll(".image-container");
      images.forEach((image) => observer.observe(image));
  
      return () => observer.disconnect();
    }, []);

  return (
    <>
      <div
        className="w-full h-[400px] flex justify-center items-center px-8 inset-0 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${services})` }}
      >
         <div className="text-center">
          <h2 className="text-white text-3xl md:text-5xl leading-tight">
          Infusing creativity with technology
          </h2>
          <span className="text-white text-2xl md:text-2xl leading-tight">
          DreamZone has it all! We offer professional courses for Fashion Design, Interior Design, Animation & Graphics that suits students' unique time and skill needs.
          </span>
        </div>

      </div>
      <div className="w-full -mt-16"></div>
      <div className="w-full px-4 mx-auto max-w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="flex flex-col items-start mb-5 image-container">
          <div
            className={`w-full relative overflow-hidden transition-opacity duration-1000 ${
              isVisible[0] ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={p2}
              alt="Fashion Design"
              className="w-full h-48 object-cover border-2 border-white"
            />
          </div>
          <span className="mt-2 text-grey-700 text-lg font-semibold ">
            FASHION DESIGN
          </span>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-start mb-5 image-container">
          <div
            className={`w-full relative overflow-hidden transition-opacity duration-1000 ${
              isVisible[1] ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={p3}
              alt="Interior Design"
              className="w-full h-48 object-cover border-2 border-white"
            />
          </div>
          <span className="mt-2 text-grey-700 text-lg font-semibold">
            INTERIOR DESIGN
          </span>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-start mb-5 image-container">
          <div
            className={`w-full relative overflow-hidden transition-opacity duration-1000 ${
              isVisible[2] ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={p5}
              alt="Animation & Graphics"
              className="w-full h-48 object-cover border-2 border-white"
            />
          </div>
          <span className="mt-2 text-grey-700 text-lg font-semibold">
            ANIMATION & GRAPHICS
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Events;
