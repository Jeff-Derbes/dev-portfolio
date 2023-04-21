import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectItem({ title, backgroundImg, tech, projectUrl }) {
  return (
    <div className="md:max-w-md mx-auto max-w-[90%] border rounded-lg shadow-md border-gray-200">
      <Link href={projectUrl}>
        <Image
          className="rounded-t-lg h-[230px] md:h-[380px] "
          src={backgroundImg}
          alt=""
          objectFit="cover"
        />
      </Link>
      <div className="p-6 py-8">
        <Link href={projectUrl}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 py-3 font-normal text-gray-700 dark:text-gray-400">
          {tech}
        </p>
        <Link href={projectUrl} scroll={false}>
          <button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-l font-medium rounded-lg bg-accent ">
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-primary rounded-md hover:bg-accent hover:text-black">
              Read More
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
