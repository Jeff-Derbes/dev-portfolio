import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Postgres from "../public/assets/skills/postgres.png";
import Node from "../public/assets/skills/node.png";
import Mongo from "../public/assets/skills/mongo.png";
import Shopify from "../public/assets/skills/shopify.png";
import Wordpress from "../public/assets/skills/wordpress.png";

import Skillcard from "./Skillcard";

function Skills() {
  return (
    <div id="skills" className="w-full flex-col justify-center items-center">
      <h2 className="uppercase pb-10 tracking-widest text-[#40dbfc]">Skills</h2>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <Skillcard title="HTML" image={Html} />
          <Skillcard title="CSS" image={Css} />
          <Skillcard title="JavaScript" image={Javascript} />
          <Skillcard title="React" image={ReactImg} />
          <Skillcard title="Tailwind" image={Tailwind} />
          <Skillcard title="NextJS" image={NextJS} />
          <Skillcard title="Postgres" image={Postgres} />
          <Skillcard title="MongoDB" image={Mongo} />
          <Skillcard title="NodeJS" image={Node} />
          <Skillcard title="Firebase" image={Firebase} />
          <Skillcard title="Shopify" image={Shopify} />
          <Skillcard title="Wordpress" image={Wordpress} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
