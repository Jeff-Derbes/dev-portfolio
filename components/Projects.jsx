import React from "react";
import Image from "next/image";
import lavenderArt from "../public/assets/projects/lavender-art.png";
import mypub from "../public/assets/projects/mypub.png";
import scoot from "../public/assets/projects/scoot.png";
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
            tech="React, Tailwind CSS Shopify,"
          />

          <ProjectItem
            title="Scoot"
            backgroundImg={scoot}
            projectUrl="/scoot"
            tech="React, CSS, NextJS"
          />

          <ProjectItem
            title="MyPub"
            backgroundImg={mypub}
            projectUrl="/mypub"
            tech="React, CSS, Node, Express, MongoDB"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
