import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const LandingEvents = () => {
  return (
    <div className="w-full flex flex-col justify-center py-10 bg-gray-100">
      {/* Heading */}
      <div className="w-full text-center">
        <a
          href="#"
          className="text-red-700 font-bold text-lg transition-colors duration-300 hover:text-black"
        >
          EVENTS
        </a>
      </div>
      <div className="w-full text-center text-4xl font-extrabold py-5">
        Events on Highlight
      </div>

      {/* Cards Container */}
      <div className="w-full flex justify-center items-center px-10 gap-8 flex-wrap">
        {/* Event Card */}
        {[
          {
            title: "LIGHTZAP - ANNUAL DESIGN CONTEST",
            iFrame: "https://www.youtube.com/embed/8epkshMNDUw",
            link: "#lightzap",
            content:
              "DreamZone announces LightZap, a Facebook contest for students all over the country. The contest is a special opportunity for exceptional DreamZone students to showcase their design talent by sharing it on social media.",
          },
          {
            title: "Vibes 360°",
            iFrame: "https://www.youtube.com/embed/axJsyAgkvWM",
            link: "#vibes360",
            content:
              'A confluence of beauty, fashion and everything in between is another name for DreamZone\'s fashion show "Vibes 360°. After creating a trend setting runway magic to the glamorous style statements in every passing season.',
          },
          {
            title: "Anigra - Annual Film Festival",
            iFrame: "https://www.youtube.com/embed/XojZHZNl96o",
            link: "#anigra",
            content:
              "A Student Film Festival to Encourage Young Film Makers. Anigra is held annually towards the year-end for DreamZone students across India who have enrolled in Animation and Graphics courses.",
          },
        ].map((event, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* YouTube Video */}
            <div className="w-full aspect-video flex-shrink-0">
              <iframe
                className="w-full h-full"
                src={event.iFrame}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Write-up */}
            <div className="p-4 flex-grow">
              <motion.a
                href={event.link}
                className="text-red-600 font-bold text-lg transition-colors duration-300 hover:text-black block mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {event.title}
              </motion.a>
              <a
                href={event.link}
                className="text-gray-700 transition-colors duration-300 hover:text-red-600 block"
              >
                {event.content}
              </a>
            </div>
            {/* Read More Link */}
            <div className="p-4 flex-shrink-0">
              <a
                href={event.link}
                className="text-red-600 font-bold hover:underline transition-colors duration-300 hover:text-black"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingEvents;
