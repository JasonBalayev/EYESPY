import React from "react";
import { Card } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const CustomDivider = () => (
  <div
    style={{
      height: '2px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      width: '100%',
    }}
  ></div>
);

const ProjectCard = ({ project }) => {
  return (
    <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 w-full">
      <Card
        isBlurred
        className="bg-gray-900 hover:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border-white border-2 flex flex-col justify-between w-full h-full"
        style={{ minHeight: '360px' }}  
      >
        <CardHeader className="flex gap-3 bg-gray-900 p-3">
          <a href={project.link}>
            <h1 className="text-xl md:text-2xl font-bold text-white hover:text-gray-300 break-words">
              {project.name}
            </h1>
          </a>
        </CardHeader>
        <CustomDivider />
        <CardBody className="p-4 bg-gray-900 flex-grow">
          <p className="text-sm md:text-lg font-bold text-gray-300 font-inter break-words">
            {project.description}
          </p>
          {project.name.includes("AI-Convex") && (
            <a
              href="https://ai-convex-mu.vercel.app/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the live project
            </a>
          )}
          {project.name.includes("jasonbalayev.dev") && (
            <a
              href="https://jasonbalayev.dev"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the live project
            </a>
          )}
        </CardBody>
        <CustomDivider />
        <CardFooter className="flex flex-wrap justify-center items-center w-full p-3 bg-gray-900">
          {project.badges.map((badge) => (
            <div key={badge} className="m-2 text-center">
              <Card className="bg-gray-900 hover:bg-gray-800 transition duration-300 ease-in-out p-3">
                <p className="text-lg md:text-xl font-bold text-gray-300 break-words">
                  {badge}
                </p>
              </Card>
            </div>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {projects.map((project) => (
        <div key={project.name} className="w-full">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
