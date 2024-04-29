import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import githubLogo from "../images/github-mark-white.svg";
import linkedInLogo from "../images/linkedIn.png";
import discordLogo from "../images/discord.png";
import { motion } from "framer-motion"; 

const Contact = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mt-10"
      >
        <h1 className="text-3xl text-white font-semibold font-sans mb-4">Contact Me</h1>
        <p className="font-semibold font-sans text-white mb-8">
          Feel free to get in touch with me for any inquiries or collaborations.</p>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com/in/jasonbalayev/">
              <Button
                className="rainbow-text bg-blue-600 text-white font-bold text-md h-14 w-35">
                @linkedIn
              </Button>
            </a>

            <a href="https://github.com/JasonBalayev">
              <Button
                className="rainbow-text bg-gray-950 text-white font-bold text-md h-14 w-35">
                @gitHub
              </Button>
            </a>

            <a href="https://discordapp.com/users/1149941204243464222">
              <Button
                className="rainbow-text bg-blue-600 text-white font-bold text-md h-14 w-35">
                @discordProfile
              </Button>
            </a>
          </div>

          <div className="text-lg text-white font-semibold font-sans">
            <p>Email: balayev.j@northeastern.edu</p>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com/in/jasonbalayev/">
              <img src={linkedInLogo} alt="LinkedIn" className="h-8 w-10" />
            </a>
            <a href="https://github.com/JasonBalayev">
              <img src={githubLogo} alt="GitHub" className="h-8 w-8" />
            </a>
            <a href="https://discordapp.com/users/1149941204243464222">
              <img src={discordLogo} alt="Discord" className="h-8 w-10" />
            </a>
          </div>
          
        </div>
      </motion.div>
    </Layout>
  );
};

export default Contact;
