import React from "react";
import { Card } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const CustomDivider = () => (
  <div style={{ height: '2px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></div> // Custom divider
);

const ProjectCard = ({ project }) => {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Card isBlurred className="w-full lg:h-full bg-gray-900 hover:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border-white border-2">
        <CardHeader className="flex gap-3 bg-gray-900 p-3">
          <a href={project.link}>
            <h1 className="text-3xl font-bold text-white hover:text-gray-300">
              {project.name}
            </h1>
          </a>
        </CardHeader>
        <CustomDivider />
        <CardBody className="p-4 bg-gray-900">
          <p className="text-lg text-gray-300">{project.description}</p>
          <div className="flex flex-row items-center justify-center mt-4">
            {project.link && (
              <a href={project.link} className="mr-4">
                <p className="text-lg font-bold text-white underline hover:text-gray-200">
                </p>
              </a>
            )}
            {project.link2 && (
              <a href={project.link2}>
                <p className="text-lg font-bold text-white underline hover:text-gray-200">
                </p>
              </a>
            )}
          </div>
        </CardBody>
        <CustomDivider />
        <CardFooter className="flex flex-wrap justify-center items-center w-full p-3 bg-gray-900">
          {project.badges.map((badge) => (
            <div key={badge} className="m-1">
              <Card className="bg-gray-900 hover:bg-gray-800 transition duration-300 ease-in-out w-auto min-w-min">
                <p className="text-md font-bold text-gray-300 p-2">
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
      {projects.map((project) => (
        <div key={project.name}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
