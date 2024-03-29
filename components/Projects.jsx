import React from "react";
import lavenderArt from "../public/assets/projects/lavender-art.png";
import scoot from "../public/assets/projects/Scoot.png";
import quippr from "../public/assets/projects/quippr.jpeg";
import ProjectItem from "./ProjectItem";

function Projects(props) {
  return (
    <div className="h-full w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="pb-16 tracking-widest uppercase text-accent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Lavender Art"
            backgroundImg={lavenderArt}
            projectUrl="/lavender-art"
            tech="React, Tailwind CSS, Shopify,"
          />

          <ProjectItem
            title="Quippr"
            backgroundImg={quippr}
            projectUrl="/scoot"
            tech="NextJS, Tailwind, MongoDB"
          />

          <ProjectItem
            title="Scoot"
            backgroundImg={scoot}
            projectUrl="/scoot"
            tech="React, CSS, NextJS"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
