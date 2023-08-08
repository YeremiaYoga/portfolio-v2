import React from "react";
import { motion } from "framer-motion";

const ModalProject = (props) => {
  const { open, onClose, detail = {} } = props;

  const { title, subTitle, language, frontend, css, backend, database, link } = detail;

  //   const [images, setImages] = useState([]);

  const handleClose = () => {
    onClose?.();
  };
  return (
    <div
      className={`z-50 top-0 fixed right-0 ${open ? "block" : "hidden"
        }  w-screen`}
    >
      <div className="flex">
        <div
          id="overlay"
          className="flex-1 bg-black opacity-30"
          onClick={handleClose}
        ></div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="section ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-1000"
        >
          <div
            className={`bg-white max-w-screen-md w-screen h-screen overflow-auto`}
          >
            <div className="flex justify-between px-12 pt-12 pb-8">
              <div>
                <p className="text-3xl">{title}</p>
                <button
                  className="mt-5 text-sm  py-1 px-3  bg-sky-500 hover:text-sky-500 font-semibold text-white border hover:bg-white border-sky-500 rounded"
                  onClick={() => window.open(link, "_blank")}
                >
                  Open
                </button>
              </div>

              <div className="cursor-pointer">
                <ion-icon
                  size="large"
                  name={"close"}
                  onClick={handleClose}
                ></ion-icon>
              </div>
            </div>
            <div className="sm:flex px-14 md:px-12  justify-between">
              <p className="sm:w-7/12">{subTitle}</p>
              <div className="sm:w-4/12 pt-5 sm:pt-0 space-y-1">
                <p className=" text-slate-500">Language: {language}</p>
                <p className=" text-slate-500">Frontend: {frontend}</p>
                <p className=" text-slate-500">Backend: {backend}</p>
                <p className=" text-slate-500">Css Framework: {css}</p>
                <p className=" text-slate-500">Database: {database}</p>
              </div>
            </div>
            {/* <div className="px-12 pt-12 pb-16">
              {images.map((item, idx) => {
                return (
                  <img className="py-4 w-full" src={item} key={idx} alt="" />
                );
              })}
            </div> */}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ModalProject;
