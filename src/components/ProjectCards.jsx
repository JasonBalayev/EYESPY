import React from "react";
import { Card, Divider } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex"
    >
      <Card
        isBlurred
        isHoverable
        isPressable
        className="w-full flex flex-col justify-between rounded-xl border border-indigo-500 transition-shadow duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{
          height: "100%",
          minHeight: "250px",
          overflow: "hidden",
        }}
      >
        <CardHeader className="flex gap-3">
          <a href={project.link} className="no-underline">
            <h1 className="text-3xl font-poppins font-bold text-gray-200 group-hover:text-white drop-shadow-lg">
              {project.name}
            </h1>
          </a>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col justify-between">
          <p className="text-lg font-poppins text-gray-300 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-row items-center justify-center mt-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4"
              ></a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4"
              >
                <button className="px-4 py-2 text-lg font-bold font-poppins text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-pink-500 transition-all duration-300">
                  Check it out live
                </button>
              </a>
            )}
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-wrap justify-center items-center">
          {project.badges.map((badge) => (
            <div key={badge}>
              <Card className="bg-indigo-600 m-1 hover:bg-pink-500">
                <p className="text-md font-bold font-poppins text-gray-200 mx-2 my-1">
                  {badge}
                </p>
              </Card>
            </div>
          ))}
          {project.hackathon && (
            <a
              href={project.hackathon.link}
              aria-label={`Link to ${project.hackathon.name}`}
              className="no-underline"
            >
              <Card className="bg-purple-700 m-1 hover:bg-indigo-500">
                <p className="text-lg text-gray-200 font-poppins font-bold mx-2 my-1">
                  {project.hackathon.name}
                </p>
              </Card>
            </a>
          )}
        </CardFooter>
      </Card>
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
