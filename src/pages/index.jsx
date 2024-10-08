import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import TypewriterText from "../components/TypewriterText";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import ThreeBackground from "../components/ThreeBackground"; // Import the ThreeBackground component
import pythonImage from "../images/python.png";
import javascriptImage from "../images/js.png";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import cImage from "../images/c.png";
import cppImage from "../images/cpp.png";
import kotlinImage from "../images/kotlin.png";
import javaImage from "../images/java.png";
import luaImage from "../images/lua.png";
import profileImage from "../images/Jason.jpg"; 

const IndexPage = () => {
  return (
    <Layout>
      <div className="overflow-auto min-h-screen w-full">
        {/*3js Background Not Working*/}
        <ThreeBackground /> 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-screen w-full relative z-10 px-4"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <img
              src={profileImage}
              alt="Jason Balayev"
              className="h-32 w-32 sm:h-40 sm:w-40 rounded-full shadow-lg border-2 border-gray-200"
            />
          </motion.div>

    
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-center">
            <TypewriterText text="jasonbalayev.dev🔧" delay={0} />
          </h1>
          <h2 className="text-xl sm:text-2xl my-4 text-center">
            <TypewriterText
              text="Hello, I am Jason Balayev and I am currently studying CS 💻 @ Northeastern University - c/o 27'"
              delay={800}
              speed={50}
            />
          </h2>
          <h2 className="text-xl sm:text-xl text-grey-800 text-center mb-4">
            <TypewriterText
              text="Click the button below to access source code below within my projects 🛠️"
              delay={1900}
              speed={100}
            />
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mx-auto mt-4"
          >
            <Link to="/projects">
              <Button
                size="lg"
                variant="ghost"
                radius="small"
                className="text-gray-200 hover:text-black hover:bg-blue-700 text-xl sm:text-2xl p-6 max-w-full"
              >
                👆
              </Button>
            </Link>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center my-8">
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
      </div>
    </Layout>
  );
};

const SkillCard = ({ name, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="m-2 text-center"
    >
      <img src={image} alt={name} className="h-14 w-14 mx-auto mb-1 sm:h-16 sm:w-16" />
      <p className="text-md sm:text-lg font-semibold text-white">{name}</p>
    </motion.div>
  );
};

export default IndexPage;

export const Head = () => <title>JasonDev</title>;
