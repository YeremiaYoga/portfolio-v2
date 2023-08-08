import foto from "../assets/home/foto.webp";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-1000"
    >
      <div>
        <div className="flex justify-center pt-20 pb-10"></div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="relative  w-48 h-48
            bg-gradient-to-b  from-sky-500  mx-auto max-w-full rounded-full shadow-lg overflow-hidden"
        >
          <motion.div whileHover={{ scale: 1.3 }}>
            <img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              layout="fill"
              objectFit="cover"
              className="hover:z-50 "
              src={foto}
              alt=""
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          className="section ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-200"
        >
          <h1 className="text-center text-6xl font-extrabold animate-changetext py-5">
            Yeremia Yoga
          </h1>
          <p className="text-center text-2xl text-thin py-5">
            Web Developer & Design
          </p>
          <div className="flex justify-center space-x-5">
            <button className="text-base  py-3 px-8  hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 rounded">
              Contact Me
            </button>
            <a href="https://drive.google.com/file/d/1p_FaBIr8R5vgYKsaNGH9PsBv0vFpUwVR/view?usp=sharing" target="_blank" rel="noreferrer">
              <button className="text-base py-3 px-8  hover:bg-sky-500 text-sky-500 font-semibold hover:text-white border border-sky-500 rounded">
                Download Resume
              </button>
            </a>

           
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default HomePage;
