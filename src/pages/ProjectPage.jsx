import React from "react";
import Project from "../components/Project";
import projectContent from "../data/projectContent";
import { motion } from "framer-motion";
const ProjectPage = () => {
  return (
    <div>
      <h1 className="text-center pb-10 text-2xl pt-5">Project</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-content-center">
        {projectContent.slice().reverse().map((item) => {
          return (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="section ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-1000"
            >
              <React.Fragment key={item.id}>
                <Project
                  projectImage={item.image}
                  projectTitle={item.title}
                  projectLink={item.link}
                  projectFramework={item.framework}
                  projectCss={item.css}
                  projectType={item.type}
                />
              </React.Fragment>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectPage;
