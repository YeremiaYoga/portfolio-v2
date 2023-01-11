import { motion } from "framer-motion";

const ModalAbout = (props) => {
  const { open, onClose } = props;
  const handleClose = () => {
    onClose?.();
  };
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="section ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-1000"
      >
        <div
          className={`z-50 top-0 fixed right-0 ${
            open ? "block" : "hidden"
          }  w-screen`}
        >
          <div className="flex">
            <div
              id="overlay"
              className="flex-1 bg-black opacity-30"
              onClick={handleClose}
            ></div>
            <div
              className={`bg-white max-w-screen-md w-screen h-screen overflow-auto`}
            >
              <div className=" px-14 md:px-12 ">
                <div className="flex justify-between pt-12 pb-8">
                  <div>
                    <h1 className="text-3xl">About</h1>
                  </div>

                  <div className="cursor-pointer">
                    <ion-icon
                      size="large"
                      name={"close"}
                      onClick={handleClose}
                    ></ion-icon>
                  </div>
                </div>
                <div className="">
                  <p className="sm:w-7/12 text-xl">Hello</p>
                  <p>I am Yeremia ADiel Yoga Sasongko</p>
                </div>

                <div className="pt-5">
                  <h1 className="text-xl">Education</h1>
                  <p>SMA Negeri 1 Sukorejo</p>
                  <p>Universitas Atma Jaya Yogyakarta</p>
                </div>
                <div className="pt-5">
                  <h1 className="text-xl ">Skill</h1>
                  <div className="grid grid-cols-2">
                    <div className="py-2">
                      <p className="text-xl">Basic Website</p>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>Javascript</p>
                    </div>
                    <div className="py-2">
                      <p className="text-xl">Frontend</p>
                      <p>Vue</p>
                      <p>React</p>
                      <p>Vuetify</p>
                      <p>Tailwind</p>
                    </div>
                    <div className="py-2">
                      <p className="text-xl">Backend</p>
                      <p>Laravel</p>
                      <p>MySQL</p>
                    </div>
                    <div className="py-2">
                      <p className="text-xl">Design</p>
                      <p>Adobe Photoshop</p>
                      <p>Adobe Premiere Pro</p>
                      <p>Adobe After Effect</p>
                      <p>Figma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
export default ModalAbout;
