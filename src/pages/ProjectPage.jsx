import React,{useState} from "react";
import Project from "../components/Project";
import projectContent from "../data/projectContent";
import { motion } from "framer-motion";
import ModalProject from "../components/ModalProject";
const ProjectPage = () => {
  const [open, setOpen] = useState(false);

  const [detailContent, setDetailContent] = useState({});

  const handleClose = () => setOpen(false);

  const handleOpen = (item) => {
    setOpen(true);
    setDetailContent(item);
  };
  return (
    <div>
      <h1 className="text-center pb-10 text-2xl pt-5"> </h1>
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
                <div onClick={() => handleOpen(item)}>
                <Project
                  projectImage={item.image}
                  projectTitle={item.title}
                  projectType={item.type}
                />
                </div>
              
              </React.Fragment>
            </motion.section>
          );
        })}
      </div>
      {open && (
        <ModalProject 
        open={open}
        onClose={handleClose}
        detail={detailContent}

        />
      )}{" "}
    </div>
  );
};
export default ProjectPage;
