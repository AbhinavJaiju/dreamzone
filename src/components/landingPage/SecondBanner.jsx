import { motion } from "framer-motion";
import left1 from "../../assets/leftimg.jpg";
import left2 from "../../assets/leftimg1.jpg";
import icon1 from "../../assets/fasion.png"; // Import your icons
import icon2 from "../../assets/grphics.png";
import icon3 from "../../assets/interior.webp";
import bg from "../../assets/about-bg2.jpg";

const SecondBanner = () => {
  return (
    <div
      className="min-h-screen flex p-8 overflow-y-auto bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-1/3 flex flex-col space-y-8">
        <motion.div
          className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${left1})` }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${left2})` }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>

      {/* Second Column: Heading, Subtext, and Cards */}
      <div className="w-2/3 pl-8">
        {/* Heading and Subtext */}
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About DreamZone®
        </motion.h1>
        <motion.p
          className="text-red-600 mb-8 font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Infusing creativity with technology
        </motion.p>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          DreamZone is a creative skill development initiative of CADD Centre
          Training Services Private Limited, a diversified global network of
          creative, engineering and management skill development institutes.
          Founded in 2005..
        </motion.p>

        {/* Cards */}
        <div className="space-y-8">
          {/* First Row: Two Cards */}
          <div className="flex space-x-8">
            <motion.div
              className="w-1/2 bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Icon 1 */}
              <div className="flex justify-center mb-4">
                <img src={icon3} alt="Icon 1" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Interior Design
              </h3>
              <p className="text-gray-600 text-center">
                Interior designers make interior spaces functional, safe, and
                beautiful for almost every type of building: offices, homes,
                airport terminals, shopping malls, and restaurants. They select
                and specify colors, finishes, fabrics, furniture, flooring and
                wall coverings, lighting,
              </p>
            </motion.div>
            <motion.div
              className="w-1/2 bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Icon 2 */}
              <div className="flex justify-center mb-4">
                <img src={icon1} alt="Icon 2" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Fashion Design
              </h3>
              <p className="text-gray-600 text-center">
                SCOPE CAREER COURSEWARE CREATE ART THAT PEOPLE LIVE THEIR LIVES
                IN! Fashion and appearance help people present themselves to the
                world, get hired, impress their partner, and ultimately feel
                great about themselves. From workout wear to haute couture,
              </p>
            </motion.div>
          </div>

          {/* Second Row: One Wider Card */}
          <motion.div
            className="w-full bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Icon 3 */}
            <div className="flex justify-center mb-4">
              <img src={icon2} alt="Icon 3" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Animation & Graphics Design
            </h3>
            <p className="text-gray-600 text-center">
              SCOPE The Computer Graphics and Animation industry is full of
              promise. Every year the animated movies tend to score the biggest
              box office success. Not only movies, computer graphics and
              animation are used in broadcasting, games, theme parks, industrial
              animation,
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
