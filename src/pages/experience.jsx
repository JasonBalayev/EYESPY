import * as React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import AnimatedStars from "../components/AnimatedStars";
import { FaBriefcase, FaCode, FaUniversity } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ExperienceCard = ({ 
  title, 
  company,
  date, 
  description, 
  technologies, 
  icon = <FaBriefcase className="text-blue-400" />
}) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-black/30 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden shadow-lg hover:border-blue-500/40 transition-all duration-300 w-full"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between mb-4">
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-blue-400 font-spaceGrotesk"
            whileHover={{ 
              color: "#60a5fa", 
              scale: 1.01,
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            {title}
          </motion.h3>
          
          <motion.div 
            className="flex items-center space-x-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full"
            whileHover={{ 
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              scale: 1.05
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {icon}
            </motion.div>
            <span className="text-white text-sm font-medium">{date}</span>
          </motion.div>
        </div>
        
        <div className="text-blue-300 font-medium mb-4">{company}</div>
        
        <p className="text-gray-300 mb-4 text-sm sm:text-base">{description}</p>
        
        {technologies && (
          <motion.div 
            className="bg-black/50 p-3 rounded-lg border border-blue-500/20 mt-4"
            whileHover={{ 
              backgroundColor: "rgba(20, 20, 20, 0.7)",
              borderColor: "rgba(59, 130, 246, 0.4)",
              y: -3
            }}
          >
            <div className="text-blue-400 font-semibold mb-1 text-sm">Technologies Used</div>
            <div className="text-gray-300 text-sm">{technologies}</div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <Layout>
      <div className="relative min-h-screen w-full overflow-y-auto pb-20">
        <AnimatedStars />
        
        <motion.main
          className="relative z-10 py-12 max-w-6xl mx-auto px-4 sm:px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 font-spaceGrotesk tracking-tight"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 [text-shadow:_0_0_30px_rgb(59_130_246_/_0.3)] animate-pulse">
              <TypewriterText 
                text="Experience" 
                delay={0}
                speed={100}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg"
            variants={itemVariants}
          >
            My professional journey in software engineering and finance
          </motion.p>
          
          <div className="grid grid-cols-1 gap-8 mb-16 max-w-5xl mx-auto">
            <ExperienceCard 
              title="Software Engineering Intern"
              company="Sixth Street"
              date="Summer 2024"
              description="Incoming software engineering intern at Sixth Street, a leading global investment firm with over $60 billion in assets under management. Will be working on developing and maintaining financial technology solutions."
              technologies="Python, JavaScript, React, SQL, AWS"
              icon={<FaBriefcase className="text-blue-400" />}
            />
            
            <ExperienceCard 
              title="Software Developer"
              company="Northeastern University"
              date="Jan 2023 - Present"
              description="Developed and maintained web applications for the university's financial systems. Collaborated with cross-functional teams to implement new features and improve existing functionality. Optimized database queries resulting in 30% faster load times."
              technologies="TypeScript, React, Node.js, Express, MongoDB"
              icon={<FaCode className="text-blue-400" />}
            />
            
            <ExperienceCard 
              title="Teaching Assistant - Data Structures"
              company="Northeastern University"
              date="Sep 2022 - Dec 2022"
              description="Assisted professor in teaching fundamental data structures and algorithms to a class of 60+ students. Held weekly office hours to help students with assignments and conceptual understanding. Graded assignments and provided detailed feedback to help students improve."
              technologies="Java, Git, JUnit"
              icon={<FaUniversity className="text-blue-400" />}
            />
          </div>
          
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
          </motion.div>
        </motion.main>
      </div>
    </Layout>
  );
};

export default Experience;

export const Head = () => <title>Experience | Caleb Bennett-Harper</title>; 