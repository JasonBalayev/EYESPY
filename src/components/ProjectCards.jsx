import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 bg-black bg-opacity-40 rounded-xl border border-white border-opacity-10 hover:border-indigo-500 transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Title */}
      <a href={project.link} className="no-underline">
        <motion.h1 
          className="text-2xl font-bold text-gray-200 mb-4"
          whileHover={{ scale: 1.01 }}
        >
          {project.name}
        </motion.h1>
      </a>

      {/* Description */}
      <p className="text-base text-gray-400 flex-grow">
        {project.description}
      </p>

      {/* Bottom Section */}
      <div className="mt-6">
        {/* Live Demo Button */}
        {project.liveLink && (
          <div className="flex justify-center mb-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
            >
              <button className="px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 transition-all duration-300">
                View Live Demo
              </button>
            </motion.a>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <motion.div 
              key={badge}
              className="px-3 py-1 text-sm text-gray-200 bg-black bg-opacity-40 rounded-full border border-white border-opacity-10 hover:border-indigo-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {badge}
            </motion.div>
          ))}
          
          {project.hackathon && (
            <motion.a
              href={project.hackathon.link}
              aria-label={`Link to ${project.hackathon.name}`}
              className="no-underline"
              whileHover={{ scale: 1.05 }}
            >
              <div className="px-3 py-1 text-sm text-gray-200 bg-black bg-opacity-40 rounded-full border border-indigo-500 hover:bg-indigo-500/20 transition-all duration-300">
                {project.hackathon.name}
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid gap-6 w-full mt-20 px-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.name}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
