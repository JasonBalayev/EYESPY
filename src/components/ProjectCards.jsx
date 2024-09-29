import React from "react";
import { Card } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const CustomDivider = () => (
  <div style={{ height: '2px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></div> // Custom divider
);

const ProjectCard = ({ project }) => {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Card isBlurred className="w-full bg-gray-900 hover:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border-white border-2">
        <CardHeader className="flex gap-3 bg-gray-900 p-3">
          <a href={project.link}>
            <h1 className="text-2xl lg:text-3xl font-bold text-white hover:text-gray-300">
              {project.name}
            </h1>
          </a>
        </CardHeader>
        <CustomDivider />
        <CardBody className="p-4 bg-gray-900">
          <p className="text-base lg:text-lg text-gray-300">{project.description}</p>
        </CardBody>
        <CustomDivider />
        <CardFooter className="flex flex-wrap justify-center items-center w-full p-3 bg-gray-900">
          {project.badges.map((badge) => (
            <div key={badge} className="m-1">
              <Card className="bg-gray-900 hover:bg-gray-800 transition duration-300 ease-in-out w-auto min-w-min">
                <p className="text-sm lg:text-md font-bold text-gray-300 p-2">
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      {projects.map((project) => (
        <div key={project.name} className="w-full">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
