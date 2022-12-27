import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineProfile,
} from "react-icons/ai";

import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import contact from "../public/contact.svg";

function Main(props) {
  return (
    <div
      id="home"
      className="w-full h-screen flex text-center bg-hero-mobile md:bg-hero-pattern bg-cover bg-no-repeat bg-center"
    >
      <div className="w-full relative mx-auto flex justify-center md:justify-start lg:ml-64 md:ml-32 items-center md:text-left pb-32 md:mt-64">
        <div>
          <h1 className="py-2  pt-8 text-4xl sm:text-4xl lg:text-8xl">
            Hi, I&apos;m <span className="text-accent">Jeff</span>
          </h1>
          <h2 className="py-2 lg:text-7xl sm:text-3xl text-2xl">
            Full-Stack Developer
          </h2>
          <h3 className="py-2 lg:text-3xl sm:text-xl">
            I like to build cool things on the web.
          </h3>

          <Link href="/#contact" scroll={false}>
            <button className="relative inline-flex items-center justify-center p-0.5 mt-4 md:mt-12 overflow-hidden md:text-xl text-l font-medium rounded-lg bg-accent ">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-primary rounded-md hover:bg-accent hover:text-black">
                Let&apos;s Connect{" "}
                <span>
                  <svg
                    className="w-5 h-5 ml-2 inline mb-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </span>
              </span>
            </button>
          </Link>

          <div className="invisible sm:visible flex translate-y-10">
            <Link
              href="https://www.linkedin.com/in/jeff-derbes/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 cursor-pointer hover:text-accent   transition-all duration-300">
                <FaLinkedinIn size={30} />
              </div>
            </Link>
            <Link
              href="https://github.com/Jeff-Derbes"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-3 cursor-pointer hover:text-black hover:text-accent  transition-all duration-300">
                <FaGithub size={30} />
              </div>
            </Link>
            <Link href="https://www.instagram.com/jeffderbes/">
              <div className="p-3 cursor-pointer hover:text-black hover:text-accent  transition-all duration-300">
                <AiOutlineInstagram size={30} />
              </div>
            </Link>
            <Link href="https://drive.google.com/file/d/13snX1Be8k-MeMinHmGRQlJagG2zXE5YH/view?usp=share_link">
              <div className="p-3 cursor-pointer hover:text-black hover:text-accent  transition-all duration-300">
                <AiOutlineProfile size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
