import { useEffect, useState } from "react";

const Project = (props) => {
  const { projectImage, projectTitle, projectFrontend,
    projectBackend,
    projectCss,
    projectDb } = props;
  const [image, setImage] = useState("");

  useEffect(() => {
    import("../assets/project/" + projectImage).then((i) => {
      setImage(i.default);
    });
  }, [projectImage]);
  return (
    <div className="pb-10 flex justify-center ">
      <div className="max-w-md bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl duration-200 ease-out grid place-content-center relative group cursor-pointer ">
        <div>
          <img className="rounded border-b-2" src={image} alt="" />
        </div>
        <div className="px-6 py-4 ">
          <p className="font-bold text-xl mb-2">{projectTitle}</p>
          <div className="space-x-1">
            {projectFrontend !== "-" && (
              <span
                className={`py-1 px-2 rounded-xl text-white text-xs ${projectFrontend === "React.js" || projectFrontend === "Next.js"
                  ? "bg-blue-500"
                  : projectFrontend === "Vue.js"
                    ? "bg-green-500"
                    : "bg-gray-400"
                  }`}
              >
                {projectFrontend}
              </span>
            )}
            {projectBackend !== "-" && (
              <span
                className={`py-1 px-2 rounded-xl text-white text-xs ${projectBackend === "Laravel" || projectBackend === "Hapi"
                  ? "bg-orange-600"
                  : projectBackend === "Express.js"
                  ? "bg-blue-800"
                  : "bg-gray-400"
                  }`}
              >
                {projectBackend}
              </span>
            )}
            {projectCss !== "-" && (
              <span
                className={`py-1 px-2 rounded-xl text-white text-xs ${projectCss === "Tailwind" || "Vuetify"
                  ? "bg-blue-400"
                  : projectCss === "Bootstrap"
                    ? "bg-purple-600"
                    : "bg-gray-400"
                  }`}
              >
                {projectCss}
              </span>
            )}
            {projectDb !== "-" && (
              <span
                className={`py-1 px-2 rounded-xl text-white text-xs ${projectDb === "MySQL"
                  ? "bg-orange-400"
                  : projectDb === "MongoDb"
                    ? "bg-blue-600"
                    : "bg-gray-400"
                  }`}
              >
                {projectDb}
              </span>
            )}
          </div>

        </div>


      </div>
    </div>
  );
};

export default Project;
