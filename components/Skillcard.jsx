import React from "react";
import Image from "next/image";
import Css from "../public/assets/skills/css.png";

function Skillcard({ title, image }) {
  return (
    <div className="p-6 bg-slate-700 rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={image} width="64px" height="64px" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Skillcard;
