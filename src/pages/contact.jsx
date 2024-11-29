import * as React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import GlowingText from "../components/GlowingText";

const Contact = () => {
  return (
    <Layout>
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <GlowingText text="Contact Jason Balayev" />
          <p className="text-lg sm:text-xl text-gray-300 mt-4">
              Sophomore @ Northeastern University actively seeking part-time internships in the Bay Area, California.  
              <br />  
              Open to opportunities for January–June or May–August of the 2025 season.
            </p>
          <p className="text-sm sm:text-md text-gray-400 mt-2">
            (You can move "Contact Jason Balayev" around!)
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
  );
};

export default Contact;
