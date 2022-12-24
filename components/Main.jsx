import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import wave from "../public/assets/wave.svg";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import contact from "../public/assets/contact.svg";
import Waves from "./Waves";

function Main(props) {
  return (
    <div
      id="home"
      className="w-full h-screen relative grid place-items-end text-center "
    >
      <div className="max-w-[1240px] w-full  mx-auto p-2 flex justify-center items-center md:pt-[255px] pt-[100px]">
        <div>
          <h1 className="py-4">
            Hi, I&apos;m <span className="text-[#40dbfc]">Jeff</span>
          </h1>
          <h2 className="py-2">Full-Stack Developer</h2>

          <p className="py-4 max-w-[80%] m-auto text-lg">
            Let&apos;s build something together!
          </p>
          <div className="flex items-center justify-around max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/jeff-derbes/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc]
                             hover:rounded-full transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </div>
            </a>
            <a
              href="https://github.com/Jeff-Derbes"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc] hover:rounded-full transition-all duration-300">
                <FaGithub size={30} />
              </div>
            </a>
            <Link href="/#contact" scroll={false}>
              <div
                className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc]
                             hover:rounded-full transition-all duration-300"
              >
                <AiOutlineMail size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[125%] md:w-full">
        <Waves />
      </div>
    </div>
  );
}

export default Main;
