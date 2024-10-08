import React from "react";
import { Card, Divider } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <Card isBlurred className="bg-blue-800 w-full m-0 relative flex flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="absolute top-3 right-3 z-20"
      ></motion.div>

      <CardHeader className="flex gap-3">
        <a href={project.link}>
          <h1 className="text-[24px] font-sans font-bold text-white drop-shadow-lg">
            {project.name}
          </h1>
        </a>
      </CardHeader>
      <Divider />
      {/* Added min-height and flex-grow to balance card height at zoom levels */}
      <CardBody className="min-h-[220px] flex flex-col justify-between">
        <p className="text-xl text-white">{project.description}</p>

        <div className="flex flex-row items-center justify-center mt-auto">
          {project.name === "AI-Convex 🤖 (Click here for gitHub)" && (
            <a href={"https://ai-convex-mu.vercel.app/"}>
              <p className="text-2xl font-bold text-yellow-400 font-sans px-6 py-2 bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 mt-2">
                Check it Out Live
              </p>
            </a>
          )}
          {project.name === "jasonbalayev.dev 🔧 (Click here for gitHub)" && (
            <a href="https://jasonbalayev.dev">
              <p className="text-2xl font-bold text-yellow-400 font-sans px-6 py-2 bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 mt-2">
                Check it Out Live
              </p>
            </a>
          )}
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-wrap justify-center items-center w-full">
          {project.badges.map((badge) => (
            <div key={badge}>
              <Card className="bg-slate-800 m-1">
                <p className="text-[14px] font-bold text-white mx-2 my-1">
                  {badge}
                </p>
              </Card>
            </div>
          ))}
          {project.hackathon && (
            <a
              href={project.hackathon.link}
              aria-label={`Link to ${project.hackathon.name}`}
            >
              <Card className="bg-blue-900 m-1">
                <p className="text-[16px] text-white font-sans font-bold mx-2 my-1">
                  {project.hackathon.name}
                </p>
              </Card>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
