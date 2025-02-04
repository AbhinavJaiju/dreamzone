import React from "react";
import bg2 from "../../assets/bg4.jpg";
import mobile from "../../assets/mobileBanner.jpg";

const HeroBanner = () => {
  const isMobile = window.innerWidth < 768;
  const backgroundImage = isMobile ? mobile : bg2;

  return (
    <div
      className="w-full h-[700px] flex flex-col justify-end items-center px-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10 pb-10 w-full flex flex-col justify-center items-center text-center">
        <div className="max-w-lg z-20">
          <h2 className="text-gray-100 text-4xl md:text-5xl font-extrabold leading-tight mb-2">
            DREAM ZONE School Of Creative Studies
          </h2>
          <p className="text-white font-bold text-xl">
            DreamZone is a creative skill development initiative of CADD Centre
            Training Services Private Limited, a diversified global network of
            creative, engineering, and management skill development institutes.
            Founded in 2005.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
