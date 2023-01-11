import { motion } from "framer-motion";
import {
  basicContent,
  designContent,
  frontendContent,
  backendContent,
} from "../data/skillContent";
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

                <div className="pt-5 ">
                  <h1 className="text-xl">Education</h1>
                  <div className="grid grid-cols-2">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nGNgGAVowLp0YoOeb/wfLafA/8g45MBrsnHwgddfgve/7mUgBuj6JWBYTqkDYDhw/xsLgg7QwmI5tRwQcuBV6KgDGHAGvWNgp5ZT4CpCUZB29PX/XQ8//N/78D1eDFKTduwNDRxw7A1tHAADo4lQa6DSgLajv5WWU2DogKUBLafAG7gsHy2ItOiRBmBg5JYDWo6BNwc0EWoTmQ1Hq+OQYdsg0SKyOh6+DoCBUQdoDXQU6NKwYxK87405QQdYl02oxeYIiiw+8PpzyIFX3QQtZxiJAABs9Cdo0Is2rQAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">SMA Negeri 1 Sukorejo</p>
                      <p className="text-slate-400">IPA</p>
                      <div className="flex space-x-2">
                        <img
                          className="w-6"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWUlEQVR4nO1b30sUURTe/yAtqufE9+wfaMN7Z1vvmXXXvXdw9SEpyqIkzRKtfPAlKKIXgwzWSMGi6EFUMvqJaVZ/gvkj01SCLDVzgwRPzMS4o7E6O224M90PDvuw9879ztl7754PvvH5MoRASMsnqlarf2bqmVuxhmNQ4KMUBBImht28hmPoxMxw8xqOIQsAcgegPAIg7wD09CVIIpEdpIirBLRKCrx+bSTJ/fldpiL1GgYnpkEgoG3PeOKFajRCQbygIJbXksjKWCbAnxPGw3+deCCk5VMQg1mQlLNgfIBANM9R8gT4AcrErPWBB4tLsaauEZtvxDF+uyOrQudUXddocFxbBDFLVc2fXvJBvo8A/24+pChShrfa7+L8/AJmO+bm5rG1rQOD4dhqEfRcFKYV2EoeoDyXMD5pTi6rOI6jY+PoNoyMvje4W47DhD8czrGx9cVVcxIvP4LTM5/QrZiansFo7LBlJ4jLGyZfGIrtpsB/mBMGBt+i2/Fy4LV1FyQUpWRXygJQlZ8wB1edaUCv4GRNvbV/OJa6ACB6zIE9vU/QK+h++Dh5DBjv2qAA/J058HpLK9570OmJ0HOx7ICh1AVgfHHLm5d/3xwtbnQE8H8IWwWIZ0F3l8lIuwBegywAyB2A8giAvANQXoIg/wVQ/g2mApV9gJCNEJWdoJCtMJVaQKDXILUASC2AUguA1AIotQBILYBSC6QClVpASC1ApRYQUgtQqQUEeg1SC4DUAii1AGymBZj4Zg5aSiTQK1haSqz++gT4gi2LzMTkFHoF4xOTNi0ykDRJdfU8Qq+gs7vXnkmKGDb43wOras+jF7CysoKnahqSO6BIHLVtlOx/9Qbdjr7+QatBKhEMajtTFkAHZfyKOSFSWmHYTd2Kj1MzRg7J7S8u+TaDPxzO0Y3F5iTdcDw8MoZuw9DwCMYOVVo7wA+Uatt8dqAwrWC9Xf5mvA2/fJ3DbIfOsSXeZnC2egMDULLXlw6oqvnXvzChqBpWn7uI15pbsP3O/S13gJqhc9E5nT57weC4zhj5WWHR/T4nIBDNo0z0b7Wx0WkQxvuUkLbHUfJWUNCKCRPP3PHSFP9JQTxV1GjIl2kAlOdSiDLdck6AN+kvIGRH8Cadk85N55hOUr8AuBdVXy0B/BUAAAAASUVORK5CYII="
                          alt=""
                        />
                        <p className="text-slate-400">2016 - 2018</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nGNgGAVowLp0YoOeb/wfLafA/8g45MBrsnHwgddfgve/7mUgBuj6JWBYTqkDYDhw/xsLgg7QwmI5tRwQcuBV6KgDGHAGvWNgp5ZT4CpCUZB29PX/XQ8//N/78D1eDFKTduwNDRxw7A1tHAADo4lQa6DSgLajv5WWU2DogKUBLafAG7gsHy2ItOiRBmBg5JYDWo6BNwc0EWoTmQ1Hq+OQYdsg0SKyOh6+DoCBUQdoDXQU6NKwYxK87405QQdYl02oxeYIiiw+8PpzyIFX3QQtZxiJAABs9Cdo0Is2rQAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">Universitas Atma Jaya Yogyakarta</p>
                      <p className="text-slate-400">Informatika</p>
                      <div className="flex space-x-2">
                        <img
                          className="w-6"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWUlEQVR4nO1b30sUURTe/yAtqufE9+wfaMN7Z1vvmXXXvXdw9SEpyqIkzRKtfPAlKKIXgwzWSMGi6EFUMvqJaVZ/gvkj01SCLDVzgwRPzMS4o7E6O224M90PDvuw9879ztl7754PvvH5MoRASMsnqlarf2bqmVuxhmNQ4KMUBBImht28hmPoxMxw8xqOIQsAcgegPAIg7wD09CVIIpEdpIirBLRKCrx+bSTJ/fldpiL1GgYnpkEgoG3PeOKFajRCQbygIJbXksjKWCbAnxPGw3+deCCk5VMQg1mQlLNgfIBANM9R8gT4AcrErPWBB4tLsaauEZtvxDF+uyOrQudUXddocFxbBDFLVc2fXvJBvo8A/24+pChShrfa7+L8/AJmO+bm5rG1rQOD4dhqEfRcFKYV2EoeoDyXMD5pTi6rOI6jY+PoNoyMvje4W47DhD8czrGx9cVVcxIvP4LTM5/QrZiansFo7LBlJ4jLGyZfGIrtpsB/mBMGBt+i2/Fy4LV1FyQUpWRXygJQlZ8wB1edaUCv4GRNvbV/OJa6ACB6zIE9vU/QK+h++Dh5DBjv2qAA/J058HpLK9570OmJ0HOx7ICh1AVgfHHLm5d/3xwtbnQE8H8IWwWIZ0F3l8lIuwBegywAyB2A8giAvANQXoIg/wVQ/g2mApV9gJCNEJWdoJCtMJVaQKDXILUASC2AUguA1AIotQBILYBSC6QClVpASC1ApRYQUgtQqQUEeg1SC4DUAii1AGymBZj4Zg5aSiTQK1haSqz++gT4gi2LzMTkFHoF4xOTNi0ykDRJdfU8Qq+gs7vXnkmKGDb43wOras+jF7CysoKnahqSO6BIHLVtlOx/9Qbdjr7+QatBKhEMajtTFkAHZfyKOSFSWmHYTd2Kj1MzRg7J7S8u+TaDPxzO0Y3F5iTdcDw8MoZuw9DwCMYOVVo7wA+Uatt8dqAwrWC9Xf5mvA2/fJ3DbIfOsSXeZnC2egMDULLXlw6oqvnXvzChqBpWn7uI15pbsP3O/S13gJqhc9E5nT57weC4zhj5WWHR/T4nIBDNo0z0b7Wx0WkQxvuUkLbHUfJWUNCKCRPP3PHSFP9JQTxV1GjIl2kAlOdSiDLdck6AN+kvIGRH8Cadk85N55hOUr8AuBdVXy0B/BUAAAAASUVORK5CYII="
                          alt=""
                        />
                        <p className="text-slate-400">2018 - 2022</p>
                      </div>
                    </div>
                  </div>
                  </div>

                 
                </div>
                <div className="pt-5">
                  <h1 className="text-2xl ">Skill</h1>
                  <div className="grid grid-cols-2">
                    <div className="py-2">
                      <p className="text-xl">Basic Website</p>
                      {basicContent.map((item) => {
                        return (
                          <div key={item.id}>
                            <div className="flex space-x-3 py-2">
                              <div>
                                <img
                                  className="w-8"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2az08TQRTHN+hR/QNM9ODVqAcvBk3ovBZ/HMATEcXon2CigvFUj+AN8aAJmEjnlYSTnk3UgzcjnozExKghUVQOwr63tQqseWyBWrtlpu2sVHnJO3R3uvP5zryZNzuznrdl/7ApTVdB+1e8VjSVD84qpCXQtJzO0UWvlUzlfVCavgNyGDn9SCGd8DaDZe4HexXSW0AaTqOf6XgSbi+/r5APA/LCOnzkCok7cnykvGw2G7ZJeYV8QyG/Oj4R7HEuADDo/R2MPwPyWErz6Yz2DyjNs5Xwa2U1z0oZKSv/UdF/y8oEvc4FKKTbcYCNutI04lwAIL90J4CnnMK3j37dqTQtOuyBxZO5uV3OBEDe73QFDyWXicFJy0fw9MC1AJA68n6n1Fk3cCbPuwG5SyEPAtIzpanoHpz/CCeZWgH5rkK6oPL+fmMBgDydNDBs5JpfGwtQyENJA55/WKjdI8iDxgJSOjiaJPzlR4Xw3bel8M5UMV7ARNBuLEBSPGj+lCT8zELk1URIxu6ZDLd5Niap3jV8/+NC+L4MXlx+91WEk0Ie9WxN5bg7yZafKcGLqCrlu6wFyKLLFfxATMv3V4cPhcWu9WWJW2NVmSQ8lFaxwmT+MoI8v1ngYW0cEIGmUzXh0+j32WTdjeZukwHbbwC/3hNUVNo/VxUekC+tvMMaPmzkedEYoJGWh0rXtAxI1xoSIPCmIE2FxxoCTENI5mhToGbDq1ohZDOIq83hH+aXwutPC+7g0WAQ20yjtUQ0v+XZfBq1SWRxM0u1awP1xjzWkcjESlsfGz68Wk80bcBiqQdy3G0tADTfM60gTkQz4CHyMSv4lR0zy6VEpYgmwofWy+kMBsfqqWhVRDPhoeTykmUTPjfrrUgGayMDFuJ7YailX+qVpjctva2SxsI+77/Z2Ioz2fZzLSCV89OeK+uYDHeApp8uw6bdRcuXm2yBOxOA/MIpfCSARpyFkKZbf+OIaQ6QxwGDHjVOh2puiGn+Ann/YDSWaBiQP5bfT+vgjHMBchAneUISi2RHWXaYHPLJtcolcTYbtskzSnux04kc8pkYaF9t2mNWm1Br2YPuVZPPDFr2U4Mt88zsF/L7hiBlV3/sAAAAAElFTkSuQmCC"
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <p className="text-lg">{item.skill}</p>
                                <p className="text-slate-400">{item.level}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="py-2">
                      <p className="text-xl">Design</p>
                      {designContent.map((item) => {
                        return (
                          <div key={item.id}>
                            <div className="flex space-x-3 py-2">
                              <div>
                                <img
                                  className="w-8"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2az08TQRTHN+hR/QNM9ODVqAcvBk3ovBZ/HMATEcXon2CigvFUj+AN8aAJmEjnlYSTnk3UgzcjnozExKghUVQOwr63tQqseWyBWrtlpu2sVHnJO3R3uvP5zryZNzuznrdl/7ApTVdB+1e8VjSVD84qpCXQtJzO0UWvlUzlfVCavgNyGDn9SCGd8DaDZe4HexXSW0AaTqOf6XgSbi+/r5APA/LCOnzkCok7cnykvGw2G7ZJeYV8QyG/Oj4R7HEuADDo/R2MPwPyWErz6Yz2DyjNs5Xwa2U1z0oZKSv/UdF/y8oEvc4FKKTbcYCNutI04lwAIL90J4CnnMK3j37dqTQtOuyBxZO5uV3OBEDe73QFDyWXicFJy0fw9MC1AJA68n6n1Fk3cCbPuwG5SyEPAtIzpanoHpz/CCeZWgH5rkK6oPL+fmMBgDydNDBs5JpfGwtQyENJA55/WKjdI8iDxgJSOjiaJPzlR4Xw3bel8M5UMV7ARNBuLEBSPGj+lCT8zELk1URIxu6ZDLd5Niap3jV8/+NC+L4MXlx+91WEk0Ie9WxN5bg7yZafKcGLqCrlu6wFyKLLFfxATMv3V4cPhcWu9WWJW2NVmSQ8lFaxwmT+MoI8v1ngYW0cEIGmUzXh0+j32WTdjeZukwHbbwC/3hNUVNo/VxUekC+tvMMaPmzkedEYoJGWh0rXtAxI1xoSIPCmIE2FxxoCTENI5mhToGbDq1ohZDOIq83hH+aXwutPC+7g0WAQ20yjtUQ0v+XZfBq1SWRxM0u1awP1xjzWkcjESlsfGz68Wk80bcBiqQdy3G0tADTfM60gTkQz4CHyMSv4lR0zy6VEpYgmwofWy+kMBsfqqWhVRDPhoeTykmUTPjfrrUgGayMDFuJ7YailX+qVpjctva2SxsI+77/Z2Ioz2fZzLSCV89OeK+uYDHeApp8uw6bdRcuXm2yBOxOA/MIpfCSARpyFkKZbf+OIaQ6QxwGDHjVOh2puiGn+Ann/YDSWaBiQP5bfT+vgjHMBchAneUISi2RHWXaYHPLJtcolcTYbtskzSnux04kc8pkYaF9t2mNWm1Br2YPuVZPPDFr2U4Mt88zsF/L7hiBlV3/sAAAAAElFTkSuQmCC"
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <p className="text-lg">{item.skill}</p>
                                <p className="text-slate-400">{item.level}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="py-2">
                      <p className="text-xl">Frontend</p>
                      {frontendContent.map((item) => {
                        return (
                          <div key={item.id}>
                            <div className="flex space-x-3 py-2">
                              <div>
                                <img
                                  className="w-8"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2az08TQRTHN+hR/QNM9ODVqAcvBk3ovBZ/HMATEcXon2CigvFUj+AN8aAJmEjnlYSTnk3UgzcjnozExKghUVQOwr63tQqseWyBWrtlpu2sVHnJO3R3uvP5zryZNzuznrdl/7ApTVdB+1e8VjSVD84qpCXQtJzO0UWvlUzlfVCavgNyGDn9SCGd8DaDZe4HexXSW0AaTqOf6XgSbi+/r5APA/LCOnzkCok7cnykvGw2G7ZJeYV8QyG/Oj4R7HEuADDo/R2MPwPyWErz6Yz2DyjNs5Xwa2U1z0oZKSv/UdF/y8oEvc4FKKTbcYCNutI04lwAIL90J4CnnMK3j37dqTQtOuyBxZO5uV3OBEDe73QFDyWXicFJy0fw9MC1AJA68n6n1Fk3cCbPuwG5SyEPAtIzpanoHpz/CCeZWgH5rkK6oPL+fmMBgDydNDBs5JpfGwtQyENJA55/WKjdI8iDxgJSOjiaJPzlR4Xw3bel8M5UMV7ARNBuLEBSPGj+lCT8zELk1URIxu6ZDLd5Niap3jV8/+NC+L4MXlx+91WEk0Ie9WxN5bg7yZafKcGLqCrlu6wFyKLLFfxATMv3V4cPhcWu9WWJW2NVmSQ8lFaxwmT+MoI8v1ngYW0cEIGmUzXh0+j32WTdjeZukwHbbwC/3hNUVNo/VxUekC+tvMMaPmzkedEYoJGWh0rXtAxI1xoSIPCmIE2FxxoCTENI5mhToGbDq1ohZDOIq83hH+aXwutPC+7g0WAQ20yjtUQ0v+XZfBq1SWRxM0u1awP1xjzWkcjESlsfGz68Wk80bcBiqQdy3G0tADTfM60gTkQz4CHyMSv4lR0zy6VEpYgmwofWy+kMBsfqqWhVRDPhoeTykmUTPjfrrUgGayMDFuJ7YailX+qVpjctva2SxsI+77/Z2Ioz2fZzLSCV89OeK+uYDHeApp8uw6bdRcuXm2yBOxOA/MIpfCSARpyFkKZbf+OIaQ6QxwGDHjVOh2puiGn+Ann/YDSWaBiQP5bfT+vgjHMBchAneUISi2RHWXaYHPLJtcolcTYbtskzSnux04kc8pkYaF9t2mNWm1Br2YPuVZPPDFr2U4Mt88zsF/L7hiBlV3/sAAAAAElFTkSuQmCC"
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <p className="text-lg">{item.skill}</p>
                                <p className="text-slate-400">{item.level}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="py-2">
                      <p className="text-xl">Backend</p>
                      {backendContent.map((item) => {
                        return (
                          <div key={item.id}>
                            <div className="flex space-x-3 py-2">
                              <div>
                                <img
                                  className="w-8"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2az08TQRTHN+hR/QNM9ODVqAcvBk3ovBZ/HMATEcXon2CigvFUj+AN8aAJmEjnlYSTnk3UgzcjnozExKghUVQOwr63tQqseWyBWrtlpu2sVHnJO3R3uvP5zryZNzuznrdl/7ApTVdB+1e8VjSVD84qpCXQtJzO0UWvlUzlfVCavgNyGDn9SCGd8DaDZe4HexXSW0AaTqOf6XgSbi+/r5APA/LCOnzkCok7cnykvGw2G7ZJeYV8QyG/Oj4R7HEuADDo/R2MPwPyWErz6Yz2DyjNs5Xwa2U1z0oZKSv/UdF/y8oEvc4FKKTbcYCNutI04lwAIL90J4CnnMK3j37dqTQtOuyBxZO5uV3OBEDe73QFDyWXicFJy0fw9MC1AJA68n6n1Fk3cCbPuwG5SyEPAtIzpanoHpz/CCeZWgH5rkK6oPL+fmMBgDydNDBs5JpfGwtQyENJA55/WKjdI8iDxgJSOjiaJPzlR4Xw3bel8M5UMV7ARNBuLEBSPGj+lCT8zELk1URIxu6ZDLd5Niap3jV8/+NC+L4MXlx+91WEk0Ie9WxN5bg7yZafKcGLqCrlu6wFyKLLFfxATMv3V4cPhcWu9WWJW2NVmSQ8lFaxwmT+MoI8v1ngYW0cEIGmUzXh0+j32WTdjeZukwHbbwC/3hNUVNo/VxUekC+tvMMaPmzkedEYoJGWh0rXtAxI1xoSIPCmIE2FxxoCTENI5mhToGbDq1ohZDOIq83hH+aXwutPC+7g0WAQ20yjtUQ0v+XZfBq1SWRxM0u1awP1xjzWkcjESlsfGz68Wk80bcBiqQdy3G0tADTfM60gTkQz4CHyMSv4lR0zy6VEpYgmwofWy+kMBsfqqWhVRDPhoeTykmUTPjfrrUgGayMDFuJ7YailX+qVpjctva2SxsI+77/Z2Ioz2fZzLSCV89OeK+uYDHeApp8uw6bdRcuXm2yBOxOA/MIpfCSARpyFkKZbf+OIaQ6QxwGDHjVOh2puiGn+Ann/YDSWaBiQP5bfT+vgjHMBchAneUISi2RHWXaYHPLJtcolcTYbtskzSnux04kc8pkYaF9t2mNWm1Br2YPuVZPPDFr2U4Mt88zsF/L7hiBlV3/sAAAAAElFTkSuQmCC"
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <p className="text-lg">{item.skill}</p>
                                <p className="text-slate-400">{item.level}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
