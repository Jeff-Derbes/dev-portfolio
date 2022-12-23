import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { NextRouter, useRouter } from "next/router";

function Navbar(props) {
  const [nav, setNav] = useState(false);
  const [navTransparent, setNavTransparent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/lavender-art") {
      setNavTransparent(true);
    } else {
      setNavTransparent(false);
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100]">
      <div
        className={
          navTransparent
            ? "flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-transparent"
            : "flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-slate-700"
        }
      >
        <Link scroll={false} href="/#home">
          <Image
            src="/../public/assets/logo-white.png"
            width="75"
            height="30"
            alt=""
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/#home" scroll={false} legacyBehavior>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about" scroll={false} legacyBehavior>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills" scroll={false} legacyBehavior>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects" scroll={false} legacyBehavior>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact" scroll={false} legacyBehavior>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-700 p-10 ease-in duration-500"
              : "fixed h-screen left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/logo-white.png"
                width="87"
                height="35"
                alt="logo"
              />
              <div
                className="border-gray-100 border-[1px] rounded-full p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something special together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home" scroll={false} legacyBehavior>
                <li className="py-4 text-sm" onClick={handleNav}>
                  Home
                </li>
              </Link>
              <Link href="/#about" scroll={false} legacyBehavior>
                <li className="py-4 text-sm" onClick={handleNav}>
                  About
                </li>
              </Link>
              <Link href="/#skills" scroll={false} legacyBehavior>
                <li className="py-4 text-sm" onClick={handleNav}>
                  Skills
                </li>
              </Link>
              <Link href="/#projects" scroll={false} legacyBehavior>
                <li className="py-4 text-sm" onClick={handleNav}>
                  Projects
                </li>
              </Link>
              <Link href="/#contact" scroll={false} legacyBehavior>
                <li className="py-4 text-sm" onClick={handleNav}>
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest">Let&apos;s Connect</p>
              <div className="flex items-center justify-around my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/jeff-derbes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 cursor-pointer hover:text-black hover:bg-white hover:rounded-full transition-all duration-300">
                    <FaLinkedin size={30} />
                  </div>
                </a>
                <a
                  href="https://github.com/Jeff-Derbes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 cursor-pointer hover:text-black hover:bg-white hover:rounded-full transition-all duration-300">
                    <FaGithub size={30} />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    className="p-3 cursor-pointer hover:text-black hover:bg-white hover:rounded-full transition-all duration-300"
                    onClick={handleNav}
                  >
                    <AiOutlineMail size={30} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
