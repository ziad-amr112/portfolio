import React from "react";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import Back from "./Back";

const ProjectDescription = ({ project, moveback }: { project: any; moveback: () => void }) => {
  return (
    <div className="text-gray-900 dark:text-gray-50 bg-white dark:bg-transparent h-full mb-12 mt-10 items-center justify-center w-[80vw]" key={project.id}>
  <Back moveback={moveback} />
  <div className="relative flex items-center justify-center w-[80vw] overflow-hidden mb-10">
    <div
      className={`${
        project?.video && "lg:grid-cols-2 "
      } grid grid-cols-1 gap-3 w-full z-10 justify-between items-center`}
    >
      {Array.isArray(project.img) ? (
        <div className="min-h-80 w-full h-full relative">
          <ImageSlider isActive={true} images={project.img} />
        </div>
      ) : (
        <div className="min-h-80 w-full h-full relative">
          <Image
            src={project.img}
            fill
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </div>
      )}
    </div>
  </div>
  <h1 className="z-10 relative mb-4 lg:text-2xl md:text-xl text-base font-bold text-gray-900 dark:text-gray-50">
    {project.title.replace("<br>", "")}
  </h1>
  <p className="relative z-10 lg:text-xl lg:font-normal font-light text-sm text-gray-700 dark:text-gray-200">
    {project.des}
  </p>
  {project.features && (
    <div>
      <ul className="list-decimal text-gray-700 dark:text-gray-200 relative z-10 lg:text-xl lg:font-normal font-light text-sm mt-4">
        {project.features.map((feature: string, i: number) => (
          <li key={i} className="">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )}
  <div className="flex relative z-10 items-center justify-between mt-7 mb-3">
    <div className="flex items-center gap-5 justify-center">
      {project?.git && (
        <a href={project?.git}>
          <FaGithub className="text-4xl hover:text-purple-600 text-gray-900 dark:text-gray-50 duration-150" />
        </a>
      )}
      {project?.link && (
        <a
          href={project?.link || ""}
          className="cursor-pointer flex lg:text-xl md:text-xs text-sm text-purple-700 dark:text-purple"
        >
          Check live site
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </a>
      )}
    </div>
  </div>
</div>
  );
};

export default ProjectDescription;
