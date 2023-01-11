import { useState, useEffect } from "react";
const Design = (props) => {
  const { designImage, designCaption, designHover } = props;

  const [image, setImage] = useState("");
  const [hover, setHover] = useState("");

  useEffect(() => {
    import("../assets/design/" + designImage).then((i) => {
      setImage(i.default);
    });
  }, [designImage]);

  useEffect(() => {
    import("../assets/design/" + designHover).then((i) => {
      setHover(i.default);
    });
  }, [designHover]);

  return (
    <div className=" grid place-content-center relative group cursor-pointer">
      <div className="text-white opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 z-50 group-hover:ease-in duration-300 text-center">
        <span className="text-3xl">{designCaption}</span>
      </div>

      <div className="bg-black w-fit h-fit">
        <div className="group-hover:opacity-30">
          <img
            className="object-contain group-hover:hidden block"
            src={image}
            alt=""
          />
          <img
            className="object-contain group-hover:block hidden group-hover:ease-in duration-300"
            src={hover}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
