import { motion } from "framer-motion";
import left1 from "../../assets/leftimg.jpg";
import left2 from "../../assets/leftimg1.jpg";
import icon1 from "../../assets/fasion.png";
import icon2 from "../../assets/grphics.png";
import icon3 from "../../assets/interior.webp";
import bg from "../../assets/about-bg2.jpg";

const SecondBanner = () => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row p-6 md:p-8 gap-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Left Images - Stacked on mobile, side-by-side on larger screens */}
      <div className="flex flex-col md:w-1/3 space-y-8">
        <motion.div
          className="w-full h-60 md:h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${left1})` }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="w-full h-60 md:h-full bg-contain bg-no-repeat bg-auto bg-center"
          style={{ backgroundImage: `url(${left2})` }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>

      {/* Right Content - Full width on mobile, 2/3 width on larger screens */}
      <div className="md:w-2/3">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About DreamZone®
        </motion.h1>
        <motion.p
          className="text-red-600 font-bold text-center md:text-left mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Infusing creativity with technology
        </motion.p>
        <motion.p
          className="text-gray-600 text-center md:text-left mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          DreamZone is a creative skill development initiative of CADD Centre
          Training Services Private Limited, a diversified global network of
          creative, engineering, and management skill development institutes.
          Founded in 2005...
        </motion.p>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Two Cards */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <img src={icon3} alt="Interior Design" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Interior Design
            </h3>
            <p className="text-gray-600 text-center">
              Interior designers make spaces functional, safe, and beautiful for
              various buildings like offices, homes, and shopping malls.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <img src={icon1} alt="Fashion Design" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Fashion Design
            </h3>
            <p className="text-gray-600 text-center">
              Fashion design helps people express themselves, from workout wear
              to haute couture.
            </p>
          </motion.div>

          {/* Full Width Card */}
          <motion.div
            className="md:col-span-2 bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex justify-center mb-4">
              <img
                src={icon2}
                alt="Animation & Graphics"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Animation & Graphics Design
            </h3>
            <p className="text-gray-600 text-center">
              The Computer Graphics and Animation industry is thriving. From
              movies to games, it's a field of boundless creativity.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
