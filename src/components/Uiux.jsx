import { useEffect, useState } from "react";

const Uiux = (props) => {
  const { uiuxAsset, uiuxTitle } = props;

  const [image, setImage] = useState("");

  useEffect(() => {
    import("../assets/uiux/" + uiuxAsset).then((i) => {
      setImage(i.default);
    });
  }, [uiuxAsset]);

  return (
    <div className="pb-10 flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl duration-200 ease-out grid place-content-center relative group cursor-pointer">
        <img
          className="group-hover:blur[2px] transition-all duration-200 ease-out"
          src={image}
          alt=""
        />
        <div className="inset-0 absolute p-5 flex flex-col justify-end bg-black/60 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
          <p className="text-2xl text-white font-bold">{uiuxTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Uiux;
