import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import contact from "../public/assets/contact.svg";

function Main(props) {
  return (
    <div
      id="home"
      className="w-full h-screen flex text-center bg-hero-mobile md:bg-hero-pattern bg-cover bg-no-repeat bg-center"
    >
      <div className="w-full  mx-auto flex justify-center md:justify-start md:px-24 items-center md:text-left pb-32 md:pt-[80px]">
        <div>
          <h1 className="py-4 sm:text-4xl md:text-8xl">
            Hi, I&apos;m <span className="text-[#40dbfc]">Jeff</span>
          </h1>
          <h2 className="py-2 md:text-7xl sm:text-3xl">Full-Stack Developer</h2>
          <h3 className="py-2 md:text-3xl sm:text-xl">
            I like to build cool things on the web.
          </h3>

          <Link href="/#contact" scroll={false}>
            <button className="relative inline-flex items-center justify-center p-0.5 mt-4 md:mt-12 overflow-hidden text-xl font-medium rounded-lg bg-[#40dbfc] ">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#242526] rounded-md hover:bg-[#40dbfc] hover:text-black">
                Let&apos;s Connect
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
