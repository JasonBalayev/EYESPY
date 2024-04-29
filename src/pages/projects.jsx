import * as React from "react";
import Layout from "./layout";
import ProjectCards from "../components/ProjectCards";
import { projects } from "../components/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 right-0 text-white text-arial p-4"
      >
        © {new Date().getFullYear()} Jason Balayev. All rights reserved.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectCards projects={projects} />
      </motion.div>
    </Layout>
  );
};

export default Projects;
