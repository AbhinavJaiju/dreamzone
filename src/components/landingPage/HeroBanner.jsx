import React from "react";
import bg2 from "../../assets/bg4.jpg";

const HeroBanner = () => {
  return (
    <div
      className="w-full h-[700px] flex flex-col justify-end items-center px-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      {/* Content Container with Overlay */}
      <div className="relative z-10 pb-10 w-full flex flex-col justify-center items-center text-center">
        {/* Overlay for Text and Button Area */}
        {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black bg-opacity-30"></div> */}

        {/* Text */}
        <div className="max-w-lg z-20">
          <h2 className="text-gray-100 text-4xl md:text-5xl font-extrabold leading-tight mb-2">
            DREAM ZONE School Of Creative Studies
          </h2>
          <p className="text-white font-bold text-xl">
            DreamZone is a creative skill development initiative of CADD Centre
            Training Services Private Limited, a diversified global network of
            creative, engineering and management skill development institutes.
            Founded in 2005.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default HeroBanner;
