import React from "react";
import Image from "next/image";
import Css from "../public/assets/skills/css.png";

function Skillcard({ title, image }) {
  return (
    <div className="bg-neutral-700 p-2 rounded hover:scale-105 ease-in duration-300">
      <div className="flex justify-around items-center">
        <div className="max-w-[36px]">
          <Image
            src={image}
            width="36px"
            height="36px"
            alt="/"
            className="w-[36px] h-[36px]"
          />
        </div>

        <p>{title}</p>
      </div>
    </div>
  );
}

export default Skillcard;
