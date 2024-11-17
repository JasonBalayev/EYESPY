import React from "react";
import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full no-underline"
      >
        <Card
          isHoverable
          isPressable
          className="bg-[#1e1e2f] flex flex-col justify-between p-6 rounded-xl border-2 border-indigo-500 transition-shadow duration-300"
          style={{
            background: "#1e1e2f",
            height: "100%",
            minHeight: "200px",
            overflow: "hidden",
          }}
        >
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">{project.name}</h2>
          </div>

          <p className="text-base text-gray-300 flex-grow">
            {project.description}
          </p>

          {project.liveLink && (
            <div className="mt-4 flex justify-center">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center text-indigo-400 font-semibold underline hover:text-indigo-300 transition-colors duration-300"
              >
                Check it Out Live
              </a>
            </div>
          )}

          <div className="flex flex-wrap mt-4">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="text-sm font-medium text-gray-200 bg-gray-800 px-2 py-1 rounded-full mr-2 mb-2"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-4 text-center">
            <span className="text-sm font-medium text-gray-400">
              Click the title on the card for GitHub
            </span>
          </div>
        </Card>
      </a>
    </motion.div>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <div
      className="grid gap-6 w-full"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gridAutoRows: "minmax(200px, auto)",
        marginTop: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
