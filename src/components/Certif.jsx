import React from "react";
import { useState, useEffect } from "react";
const Certif = (props) => {
  const { certifImage, certifCaption, certifTitle, certifLink, certifPublisher } = props;
  const [image, setImage] = useState("");

  useEffect(() => {
    import("../assets/certif/" + certifImage).then((i) => {
      setImage(i.default);
    });
  }, [certifImage]);

  return (
    <div className="pb-10 px-5 xl:px-0 flex justify-center">
      <div
        className="w-[448px]  lg:h-[450px] bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl duration-200 ease-out grid  relative group cursor-pointer"
        onClick={() => window.open(certifLink, "_blank")}
      >
        <div className="text-white opacity-0 group-hover:opacity-100 absolute top-1/3 left-1/2 -translate-x-1/2 z-50 hover:ease-in duration-300 text-center">
          <span className="text-3xl">{certifCaption}</span>
        </div>
        <div className="bg-black w-fit h-fit">
          <div className="group-hover:opacity-30 ">
            <img className="object-contain border-b-2 border-slate-200" src={image} alt="" />
          </div>
        </div>

        <div className="px-6 py-4 ">
          <p className="">{certifPublisher}</p>
          <p className="font-bold text-xl mb-2">{certifTitle}</p>
          <div className="flex justify-between">
            <span className="text-slate-400">Click to open</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certif;
