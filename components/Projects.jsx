import React from "react";
import Image from "next/image";
import lavenderArt from "../public/assets/projects/lavender-art.png";
import ProjectItem from "./ProjectItem";

function Projects(props) {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#40dbfc]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Lavender Art"
            backgroundImg={lavenderArt}
            projectUrl="/lavender-art"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;