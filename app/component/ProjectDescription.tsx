import React from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import Back from "./Back";

interface ProjectDescriptionProps {
  project: {
    id: string | number;
    img: string | string[];
    title: string;
    des?: string;
 features?: string | string[];
  };
  moveback: () => void;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  project,
  moveback,
}) => {
  return (
    <div
      className="text-gray-900 dark:text-gray-50 bg-white dark:bg-transparent h-full mb-12 mt-10 items-center justify-center w-[80vw]"
      key={project.id}
    >
      <Back moveback={moveback} />
      <div className="relative flex items-center justify-center w-[80vw] overflow-hidden mb-10">
        <div
          className={`grid grid-cols-1 gap-3 w-full z-10 justify-between items-center `}
        >
          {Array.isArray(project.img) ? (
            <div className="min-h-80 w-full h-full relative">
              <ImageSlider isActive images={project.img} />
            </div>
          ) : (
            <div className="min-h-80 w-full h-full relative">
              <Image
                src={project.img}
                alt="thumbnail"
                fill
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                priority
              />
            </div>
          )}
        </div>
      </div>
      <h1 className="z-10 relative mb-4 lg:text-2xl md:text-xl text-base font-bold text-gray-900 dark:text-gray-50">
        {project.title.replace("<br>", "")}
      </h1>
      <p className="relative z-10 lg:text-xl font-light text-sm text-gray-700 dark:text-gray-200">
 {project.des ?? "No description available"}      </p>
      {project.features && (
        <ul className="list-decimal text-gray-700 dark:text-gray-200 relative z-10 lg:text-xl font-light text-sm mt-4">
       {project.features && (
  <ul>
    {Array.isArray(project.features)
      ? project.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))
      : <li>{project.features}</li>}
  </ul>
)}

        </ul>
      )}
    </div>
  );
};

export default ProjectDescription;
