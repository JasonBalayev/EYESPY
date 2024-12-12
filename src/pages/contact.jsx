import * as React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import AnimatedStars from "../components/AnimatedStars";

const Contact = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      <AnimatedStars />
      <Layout>
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 [text-shadow:_0_0_30px_rgb(99_102_241_/_0.3)] animate-pulse">
                <TypewriterText 
                  text="Contact Jason Balayev"
                  delay={0}
                  speed={100}
                />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mt-4">
              Sophomore @ Northeastern University actively seeking part-time internships in the Bay Area, California.  
              <br />  
              Open to opportunities for January–June or May–August of the 2025 season.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-col items-center space-y-6 w-full"
          >
            <div className="flex gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://linkedin.com/in/jasonbalayev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-md h-14 px-10 flex justify-center items-center rounded-full shadow-lg transition-all duration-300">
                  LinkedIn
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/JasonBalayev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white text-md h-14 px-10 flex justify-center items-center rounded-full shadow-lg transition-all duration-300">
                  GitHub
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-lg sm:text-xl">
              <span className="font-bold text-indigo-400">School Email:</span>{" "}
              balayev.j@northeastern.edu
            </p>
            <p className="text-lg sm:text-xl mt-4">
              <span className="font-bold text-indigo-400">Personal Email:</span>{" "}
              jasonbalayev@gmail.com
                </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 text-center"
          >
          </motion.div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
