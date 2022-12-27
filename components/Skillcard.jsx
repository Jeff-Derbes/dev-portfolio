import React from "react";
import Image from "next/image";
import Css from "../public/assets/skills/css.png";

function Skillcard({ title, image }) {
  return (
    <div className=" rounded-md bg-gradient-to-r from-[#b9395b] to-[#646ba6] p-0.5 rounded hover:scale-105 ease-in duration-300">
      <div className="flex justify-around items-center bg-primary h-full w-full p-2">
        <div className="max-w-[36px]">
          <Image
            src={image}
            width="36px"
            height="36px"
            alt="/"
            className="w-[36px] h-[36px]"
          />
        </div>

        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
}

export default Skillcard;
