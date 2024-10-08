import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import githubLogo from "../images/github-mark-white.svg";
import linkedInLogo from "../images/in.png";
import discordLogo from "../images/disco.png";
import { motion } from "framer-motion";
import GlowingText from "../components/GlowingText";  
import logoNEU from "../images/logoneu.png"; 

const Contact = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20"
      >
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mt-10 px-4 min-h-screen"
      >
        {}
        <p className="text-xl text-gray-400 mb-10">
          Select and Drag 'Contact Me' around the page.
        </p>

        <GlowingText text="Contact Me " />

        {}
        <p className="text-3xl text-white mb-8 mt-4">
          Feel free to get in touch with me for any inquiries or collaborations.
        </p>

        <div className="flex flex-col items-center space-y-6 w-full">
          {}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com/in/jasonbalayev/"
              className="w-full sm:w-auto"
            >
              <Button
                className="glowing-button bg-blue-600 text-white text-md h-14 w-full sm:w-35 flex items-center justify-between"
              >
                @linkedIn
                <img
                  src={linkedInLogo}
                  alt="LinkedIn"
                  className="h-8 w-9 ml-2"
                />
              </Button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/JasonBalayev"
              className="w-full sm:w-auto"
            >
              <Button
                className="glowing-button bg-gray-950 text-white text-md h-14 w-full sm:w-35 flex items-center justify-between"
              >
                @gitHub
                <img
                  src={githubLogo}
                  alt="GitHub"
                  className="h-6 w-6 ml-2"
                />
              </Button>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://discordapp.com/users/1149941204243464222"
              className="w-full sm:w-auto"
            >
              <Button
                className="glowing-button bg-blue-600 text-white text-md h-14 w-full sm:w-35 flex items-center justify-between"
              >
                @discordProfile
                <img
                  src={discordLogo}
                  alt="Discord"
                  className="h-6 w-7 ml-2"
                />
              </Button>
            </motion.a>
          </div>

          {}
          <div className="text-xl text-white mt-4">
            <p>School Email 📧: balayev.j@northeastern.edu</p>
          </div>

          {}
          <div className="text-xl text-white mt-4">
            <p>Personal Email 📧: jasonbalayev@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
