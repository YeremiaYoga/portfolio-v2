import Certif from "../components/Certif";
import certifContent from "../data/certificationContent";
import React from "react";
import { motion } from "framer-motion";
const CertificationPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-1000"
    >
      <div className="">
        <h1 className="text-center pb-10 text-2xl pt-5"> </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-content-center">
          {certifContent
            .slice()
            .reverse()
            .map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div>
                    <Certif
                      certifImage={item.image}
                      certifCaption={item.caption}
                      certifPublisher={item.publisher}
                      certifTitle={item.title}
                      certifLink={item.link}
                    />
                  </div>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationPage;
