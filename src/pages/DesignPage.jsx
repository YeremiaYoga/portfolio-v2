import Design from "../components/Design";
import designContent from "../data/designContent";
import ModalDesign from "../components/ModalDesign";
import React, { useState } from "react";
import { motion } from "framer-motion";

const DesignPage = () => {
  const [open, setOpen] = useState(false);

  const [detailContent, setDetailContent] = useState({});

  const handleClose = () => setOpen(false);

  const handleOpen = (item) => {
    setOpen(true);
    setDetailContent(item);
  };

  return (
    <div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center ">
        {designContent
          .slice()
          .reverse()
          .map((item) => {
            return (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="section ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-1000"
              >
                <React.Fragment key={item.id}>
                  <div onClick={() => handleOpen(item)}>
                    <Design
                      designImage={item.image}
                      designCaption={item.caption}
                      designHover={item.hoverImage}
                    />
                  </div>
                </React.Fragment>
              </motion.section>
            );
          })}
      </div>
      {open && (
        <ModalDesign
          open={open}
          onClose={handleClose}
          detail={detailContent.detail}
        />
      )}{" "}
    </div>
  );
};
export default DesignPage;
