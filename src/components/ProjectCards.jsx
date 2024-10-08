import React from "react";
import { Card, Divider } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const ProjectCard = ({ project }) => {
  return (
    <Card isBlurred className="bg-blue-800 w-full m-0">
      <CardHeader className="flex gap-3">
        <a href={project.link}>
          <h1 className="text-[24px] font-sans font-bold text-white drop-shadow-lg">
            {project.name}
          </h1>
        </a>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-xl text-white">{project.description}</p>
        <div className="flex flex-row items-center justify-center">
          {project.link ? (
            <a href={project.link}>
              <p className="text-lg font-bold text-white underline font-sans px-4">
                Project Code
              </p>
            </a>
          ) : (
            <div></div>
          )}
          {project.link2 ? (
            <a href={project.link2}>
              <p className="text-lg font-bold text-white underline font-sans px-4">
                Try It Live
              </p>
            </a>
          ) : (
            <div></div>
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
