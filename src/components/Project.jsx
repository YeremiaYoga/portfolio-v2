import { useEffect, useState } from "react";

const Project = (props) => {
  const { projectImage, projectTitle, projectLink,projectFramework,projectCss } = props;
  const [image, setImage] = useState("");

  useEffect(() => {
    import("../assets/project/" + projectImage).then((i) => {
      setImage(i.default);
    });
  }, [projectImage]);
  return (
    <div className="pb-10 flex justify-center ">
      <div className="max-w-md bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl duration-200 ease-out grid place-content-center relative group cursor-pointer " onClick={() => window.open(projectLink, "_blank")}>
        <div>
          <img className="rounded border-b-2" src={image} alt="" />
        </div>
        <div className="px-6 py-4 ">
          <p className="font-bold text-xl mb-2">{projectTitle}</p>
          <div className="space-x-1">
          <span className="py-1 px-2 bg-blue-400 rounded-xl text-white text-xs">{projectFramework}</span>
          <span className="py-1 px-2 bg-slate-400 rounded-xl text-white text-xs">{projectCss}</span>
          </div>
         
        </div>
        
        
      </div>
    </div>
  );
};

export default Project;