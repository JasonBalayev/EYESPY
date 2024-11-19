import * as React from "react";
import Layout from "./layout";
import ProjectCards from "../components/ProjectCards";
import { projects } from "../components/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen">
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-0 text-white text-arial"
        >
          <ProjectCards projects={projects} />
        </motion.div>
      </Layout>
    </div>
  );
};

export default Projects;
