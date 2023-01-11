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
                  <p>I am Yeremia Adiel Yoga Sasongko</p>
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
                      <div className="flex space-x-3 py-2">
                        <div className="text-blue-400">
                          {/* <ion-icon
                            size="large"
                            name="checkmark-done-outline"
                          ></ion-icon> */}
                         <img className="w-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2az08TQRTHN+hR/QNM9ODVqAcvBk3ovBZ/HMATEcXon2CigvFUj+AN8aAJmEjnlYSTnk3UgzcjnozExKghUVQOwr63tQqseWyBWrtlpu2sVHnJO3R3uvP5zryZNzuznrdl/7ApTVdB+1e8VjSVD84qpCXQtJzO0UWvlUzlfVCavgNyGDn9SCGd8DaDZe4HexXSW0AaTqOf6XgSbi+/r5APA/LCOnzkCok7cnykvGw2G7ZJeYV8QyG/Oj4R7HEuADDo/R2MPwPyWErz6Yz2DyjNs5Xwa2U1z0oZKSv/UdF/y8oEvc4FKKTbcYCNutI04lwAIL90J4CnnMK3j37dqTQtOuyBxZO5uV3OBEDe73QFDyWXicFJy0fw9MC1AJA68n6n1Fk3cCbPuwG5SyEPAtIzpanoHpz/CCeZWgH5rkK6oPL+fmMBgDydNDBs5JpfGwtQyENJA55/WKjdI8iDxgJSOjiaJPzlR4Xw3bel8M5UMV7ARNBuLEBSPGj+lCT8zELk1URIxu6ZDLd5Niap3jV8/+NC+L4MXlx+91WEk0Ie9WxN5bg7yZafKcGLqCrlu6wFyKLLFfxATMv3V4cPhcWu9WWJW2NVmSQ8lFaxwmT+MoI8v1ngYW0cEIGmUzXh0+j32WTdjeZukwHbbwC/3hNUVNo/VxUekC+tvMMaPmzkedEYoJGWh0rXtAxI1xoSIPCmIE2FxxoCTENI5mhToGbDq1ohZDOIq83hH+aXwutPC+7g0WAQ20yjtUQ0v+XZfBq1SWRxM0u1awP1xjzWkcjESlsfGz68Wk80bcBiqQdy3G0tADTfM60gTkQz4CHyMSv4lR0zy6VEpYgmwofWy+kMBsfqqWhVRDPhoeTykmUTPjfrrUgGayMDFuJ7YailX+qVpjctva2SxsI+77/Z2Ioz2fZzLSCV89OeK+uYDHeApp8uw6bdRcuXm2yBOxOA/MIpfCSARpyFkKZbf+OIaQ6QxwGDHjVOh2puiGn+Ann/YDSWaBiQP5bfT+vgjHMBchAneUISi2RHWXaYHPLJtcolcTYbtskzSnux04kc8pkYaF9t2mNWm1Br2YPuVZPPDFr2U4Mt88zsF/L7hiBlV3/sAAAAAElFTkSuQmCC" alt=""/>
                        </div>
                        <div className="">
                          <p className="text-lg">HTML</p>
                          <p className="text-slate-400">Advanced</p>
                        </div>
                      </div>

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
