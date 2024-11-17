import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import githubLogo from "../images/github-mark-white.svg";
import linkedInLogo from "../images/in.png";
import discordLogo from "../images/disco.png";
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
          <GlowingText text="Contact Me" />
          <p className="text-lg sm:text-xl text-gray-300 mt-4">
            Feel free to reach out for inquiries, collaborations, or just to say hello!
          </p>
          <p className="text-sm sm:text-md text-gray-400 mt-2">
            (You can move "Contact Me" around the page!)
          </p>
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col items-center space-y-6 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://linkedin.com/in/jasonbalayev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white text-md h-14 px-4 rounded-lg transition-all duration-300"
              >
                LinkedIn
                <img src={linkedInLogo} alt="LinkedIn" className="h-6 ml-3" />
              </Button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/JasonBalayev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 text-white text-md h-14 px-4 rounded-lg transition-all duration-300"
              >
                GitHub
                <img src={githubLogo} alt="GitHub" className="h-6 ml-3" />
              </Button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://discordapp.com/users/1149941204243464222"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white text-md h-14 px-4 rounded-lg transition-all duration-300"
              >
                Discord
                <img src={discordLogo} alt="Discord" className="h-6 ml-3" />
              </Button>
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
            <span className="font-bold text-indigo-400">School Email:</span> balayev.j@northeastern.edu
          </p>
          <p className="text-lg sm:text-xl mt-4">
            <span className="font-bold text-indigo-400">Personal Email:</span> jasonbalayev@gmail.com
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
         
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
