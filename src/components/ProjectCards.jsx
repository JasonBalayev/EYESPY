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
    <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
      <Card
        isBlurred
        className="bg-gray-900 hover:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border-white border-2 flex flex-col justify-between h-64 w-full"
      >
        <CardHeader className="flex gap-3 bg-gray-900 p-3">
          <a href={project.link}>
            <h1 className="text-2xl font-bold text-white hover:text-gray-300 break-words">
              {project.name}
            </h1>
          </a>
        </CardHeader>
        <CustomDivider />
        <CardBody className="p-4 bg-gray-900 flex-grow overflow-auto">
  <p className="text-lg font-bold text-gray-300 font-inter">
    {project.description}
  </p>
</CardBody>
        <CustomDivider />
        <CardFooter className="flex justify-center items-center w-full p-3 bg-gray-900">
          {project.badges.map((badge) => (
            <div key={badge} className="m-1">
              <Card className="bg-gray-900 hover:bg-gray-800 transition duration-300 ease-in-out">
                <p className="text-sm font-bold text-gray-300 p-2">
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
