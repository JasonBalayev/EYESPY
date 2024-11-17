import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import TypewriterText from "../components/TypewriterText";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import profileImage from "../images/Jason.jpg";

import { FaArrowDown } from "react-icons/fa";


import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ParticleBackground from "../components/ParticleBackground"; 
import skillsData from "../data/skillsData.js";

const IndexPage = () => {
  return (
    <Layout>
      <div className="relative min-h-screen w-full overflow-hidden">
        <ParticleBackground />
        <main className="flex flex-col items-center justify-center min-h-screen w-full relative z-10 px-4">
          <section className="flex flex-col items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              src={profileImage}
              alt="Jason Balayev"
              className="h-32 w-32 sm:h-48 sm:w-48 rounded-full shadow-xl border-4 border-indigo-500 mb-6"
            />

            <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4">
              <TypewriterText text="Jason Balayev" delay={0} />
            </h1>

            <h2 className="text-2xl sm:text-3xl mt-2 text-center text-gray-300">
              <TypewriterText
                text="Computer Science Student @ Northeastern University '27"
                delay={800}
                speed={50}
              />
            </h2>

            <p className="text-lg sm:text-xl mt-6 text-center text-gray-300 max-w-2xl">
              Passionate about developing innovative software solutions and exploring the depths of
              computer science.
            </p>

            <div className="flex space-x-6 mt-8">
              <a
                href="https://github.com/JasonBalayev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://linkedin.com/in/JasonBalayev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 animate-bounce"
          >
            <FaArrowDown className="text-indigo-500 text-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4"
          >
            <Link to="/projects">
              <Button
                size="lg"
                variant="ghost"
                radius="full"
                className="text-white border-2 border-indigo-500 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all duration-300"
              >
                View My Projects
              </Button>
            </Link>
          </motion.div>

          {/* Skills Section */}
          <section className="mt-16 w-full px-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-8">
              Technical Skills
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {skillsData.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  image={skill.image}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

const SkillCard = ({ name, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center group"
    >
      <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transform transition-transform duration-300 group-hover:scale-105 mb-3">
        <img src={image} alt={name} className="h-10 w-10 sm:h-14 sm:w-14" />
      </div>
      <p className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-indigo-400 transition-colors duration-300">
        {name}
      </p>
    </motion.div>
  );
};

export default IndexPage;

export const Head = () => <title>Jason Balayev - Portfolio</title>;
