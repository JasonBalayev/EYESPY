import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import TypewriterText from "../components/TypewriterText";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import pythonImage from "../images/python.png";
import javascriptImage from "../images/js.png";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import cImage from "../images/c.png";
import cppImage from "../images/cpp.png";
import kotlinImage from "../images/kotlin.png";
import javaImage from "../images/java.png";
import luaImage from "../images/lua.png";

const IndexPage = () => {
  return (
    <Layout>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="absolute bottom-0 right-0 text-white text-arial p-4"
        >
          © {new Date().getFullYear()} Jason Balayev. All rights reserved.
        </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center font-serif min-h-screen"
      >
        
        <h1 className="text-7xl md:text-8xl sm:text-7xl lg:text-9xl mt-13 md:mt-1 text-center">
          <TypewriterText text="jasonbalayev.dev" delay={0} />
        </h1>
        <h2 className="text-2xl my-6 text-center">
          <TypewriterText
            text="Hello, I am Jason Balayev and I am currently studying CS @ Northeastern University - c/o 27'"
            delay={800}
            speed={50}
          />
        </h2>
        <h2 className="text-xl font-sans text-white italic text-center mb-5">
          <TypewriterText text="Click the button below to access source code below within my projects" delay={1900} speed={100} />
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-5"
        >
          <Link to="/projects">
            <Button
              size="lg"
              variant="ghost"
              radius="small"
              className="text-gray-200 hover:text-black hover:bg-blue-700 lg:text-4xl md:text-3xl text-2xl p-8"
            >
              👆
            </Button>
          </Link>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center my-10">
          {[
            { name: "Python", image: pythonImage },
            { name: "JavaScript", image: javascriptImage },
            { name: "HTML", image: htmlImage },
            { name: "CSS", image: cssImage },
            { name: "C", image: cImage },
            { name: "C++", image: cppImage },
            { name: "Kotlin", image: kotlinImage },
            { name: "Java", image: javaImage },
            { name: "Lua", image: luaImage }
          ].map((skill, index) => (
            <SkillCard key={skill.name} name={skill.name} image={skill.image} delay={index * 0.1} />
          ))}
        </div>
      </motion.div>
    </Layout>

    //test
  );
};

const SkillCard = ({ name, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="m-4 text-center"
    >
      <img src={image} alt={name} className="h-16 w-16 mx-auto mb-2" />
      <p className="text-lg font-semibold text-white">{name}</p>
    </motion.div>
  );
};

export default IndexPage;

export const Head = () => <title>JasonDev</title>;
