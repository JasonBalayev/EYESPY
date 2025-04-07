import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import TypewriterText from "../components/TypewriterText";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import profileImage from "../images/professional/JasonFinal.png";
import { FaArrowDown, FaGithub, FaLinkedin, FaCode, FaLaptopCode, FaServer, FaTerminal } from "react-icons/fa";
import AnimatedStars from "../components/AnimatedStars";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { 
    opacity: 0,
    y: 20  // Reduced from 30 to make it more subtle
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const IndexPage = () => {
  return (
    <Layout>
      <div className="relative min-h-screen w-full overflow-y-auto pb-20">
        <AnimatedStars />
       
        <motion.main
          className="flex flex-col items-center justify-center min-h-screen w-full relative z-10 px-4 max-w-7xl mx-auto pt-12 sm:pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section className="flex flex-col items-center w-full mt-2 sm:mt-4">
            <motion.div
              className="relative mb-6 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Rainbow rotating ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow" />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-md animate-pulse-slow" />
              
              <img
                src={profileImage}
                alt="Jason Balayev"
                className="relative w-full h-full rounded-full shadow-xl p-[3px]"
              />
            </motion.div>

            <div className="relative w-full text-center">
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-spaceGrotesk tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 [text-shadow:_0_0_30px_rgb(99_102_241_/_0.3)] animate-pulse">
                  <TypewriterText text="Jason Balayev" delay={0} speed={100} />
                </span>
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 text-center text-gray-300 flex items-center justify-center gap-3 font-spaceGrotesk">
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <FaTerminal className="text-indigo-400" />
              </motion.div>
              <TypewriterText
                text="Computer Science Student @ Northeastern University '27"
                delay={1500}
                speed={50}
              />
            </h2>

            <motion.div 
              className="text-base sm:text-lg md:text-xl mt-6 text-center text-gray-300 max-w-2xl relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 4 }}
            >
              <TypewriterText
                text="Developing projects one commit at a time."
                delay={4000}
                speed={30}
              />
            </motion.div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 w-full max-w-5xl">
            <FeatureBox
                icon={<FaCode />}
                title="Software Development & Quality Assurance"
                description="Building robust applications with quality standards."
              />
              <FeatureBox
                icon={<FaLaptopCode />}
                title="Full Stack"
                description="End-to-end solutions for both Web2 and Web3 technologies."
              />
              <FeatureBox
                icon={<FaServer />}
                title="System Design"
                description="Creating scalable architectures optimizing performance."
              />            
            </div>

            {/* Rest of the content */}
            <div className="flex space-x-6 mt-8">
              <a
                href="https://github.com/JasonBalayev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="https://linkedin.com/in/JasonBalayev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
            </div>

            {/* Arrow and Buttons */}
            <motion.div className="mt-8 animate-bounce" variants={childVariants}>
              <FaArrowDown className="text-indigo-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </motion.div> 

            <motion.div className="mt-4 flex gap-4" variants={childVariants}>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="ghost"
                  radius="full"
                  className="text-white border-2 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all duration-300 text-base sm:text-lg md:text-xl px-6 py-2 sm:px-8 sm:py-3"
                >
                  View My Projects
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="ghost"
                  radius="full"
                  className="text-white border-2 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all duration-300 text-base sm:text-lg md:text-xl px-6 py-2 sm:px-8 sm:py-3"
                >
                  About Me
                </Button>
              </Link>
            </motion.div>
          </motion.section>
        </motion.main>
      </div>
    </Layout>
  );
};

const FeatureBox = ({ icon, title, description }) => (
  <motion.div
    className="relative p-6 bg-black bg-opacity-40 rounded-xl border border-white border-opacity-10 hover:border-indigo-500 transition-all duration-300"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-indigo-400 text-2xl sm:text-3xl mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-400">{description}</p>
  </motion.div>
);



export default IndexPage;

export const Head = () => <title>Jason Balayev - Portfolio</title>;
