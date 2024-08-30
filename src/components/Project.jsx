import { useEffect, useState } from "react";
import "../App.css";
const Project = (props) => {
  const {
    projectImage,
    projectTitle,
    projectKategori,
    projectTeknologi,
  } = props;
  const [image, setImage] = useState("");

  const validClasses = [
  "Vue",
  "React",
  "React_Native",
  "Next",
  "Laravel",
  "Hapi",
  "Express",
  "Vuetify",
  "Tailwind",
  "Nativewind",
  "Bootstrap",
  "MySQL",
  "Godot",
  "Unity",
  "MongoDb"
];

  useEffect(() => {
    import("../assets/project/" + projectImage).then((i) => {
      setImage(i.default);
    });
  }, [projectImage]);
  return (
    <div className="pb-10 flex justify-center mx-2">
      <div className="max-w-md bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl duration-200 ease-out grid place-content-center relative group cursor-pointer ">
        <div>
          <img className="rounded border-b-2" src={image} alt="" />
        </div>
        <div className="px-6 py-4 ">
          <p className="font-bold text-xl mb-1">{projectTitle}</p>
          <p className="text-base mb-2 text-gray-400">{projectKategori}</p>
          {}
          <div className="space-x-1">
            {projectTeknologi.map((item) => {
              return (
                <span
                  className={`py-1 px-2 rounded-xl text-white text-xs ${
                    validClasses.includes(item) ? item : "bg-gray-400"
                  }`}
                >
                  {item.replace(/_/g, ' ')}
                </span>
              );
            })}
          </div>

          {/* <div className="space-x-1">
            {projectFrontend !== "-" && (
              <span
                className={`py-1 px-2 rounded-xl text-white text-xs ${
                  projectFrontend === "React.js" ||
                  projectFrontend === "Next.js"
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
                className={`py-1 px-2 rounded-xl text-white text-xs ${
                  projectBackend === "Laravel" || projectBackend === "Hapi"
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
                className={`py-1 px-2 rounded-xl text-white text-xs ${
                  projectCss === "Tailwind" || "Vuetify"
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
                className={`py-1 px-2 rounded-xl text-white text-xs ${
                  projectDb === "MySQL"
                    ? "bg-orange-400"
                    : projectDb === "MongoDb"
                    ? "bg-blue-600"
                    : "bg-gray-400"
                }`}
              >
                {projectDb}
              </span>
            )}

            {projectKategori === "Game" && (
              <span
                className={`py-1 px-2 rounded-xl text-white text-xs ${
                  projectSoftware === "Godot" 
                    ? "bg-blue-500"
                    : projectSoftware === "Unity"
                    ? "bg-black"
                    : "bg-gray-400"
                }`}
              >
                {projectSoftware}
              </span>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Project;
