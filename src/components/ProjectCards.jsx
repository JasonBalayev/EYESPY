import React from "react";
import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card
        isHoverable
        isPressable
        className="bg-[#1e1e2f] w-full h-full flex flex-col justify-between p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        style={{
          background: "#1e1e2f",
        }}
      >
        <div className="mb-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center no-underline hover:no-underline"
          >
            <h2 className="text-2xl font-bold text-white">{project.name}</h2>
            <FaExternalLinkAlt className="ml-2 text-indigo-400" size={18} />
          </a>
        </div>

        <p className="text-base text-gray-300 flex-grow">{project.description}</p>

        {["AI-Convex 🤖", "jasonbalayev.dev 🔧", "Jason's AI Space 🤖", "AI SaaS FlashSet 🤖"].includes(
          project.name
        ) && (
          <div className="mt-6 flex justify-center">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Check it Out Live
            </a>
          </div>
        )}

        <div className="flex flex-wrap mt-6">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="text-sm font-medium text-gray-200 bg-gray-800 px-2 py-1 rounded-full mr-2 mb-2"
            >
              {badge}
            </span>
          ))}
          {project.hackathon && (
            <a
              href={project.hackathon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white bg-blue-800 px-2 py-1 rounded-full mr-2 mb-2 hover:bg-blue-700 transition-colors duration-300"
            >
              {project.hackathon.name}
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
