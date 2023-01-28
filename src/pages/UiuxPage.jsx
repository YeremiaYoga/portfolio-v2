import Uiux from "../components/Uiux";
import uiuxContent from "../data/uiuxContent";
import React from "react";
import { motion } from "framer-motion";

const UiuxPage = () => {
  return (
    <div>
      <h1 className="text-center pb-10 text-2xl pt-5"> </h1>
      <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center">
        {uiuxContent.slice().reverse().map((item) => {
          return (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="section ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-1000"
            >
              <React.Fragment key={item.id}>
                <div>
                  <Uiux uiuxAsset={item.image} uiuxTitle={item.title} />
                </div>
              </React.Fragment>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};
export default UiuxPage;
