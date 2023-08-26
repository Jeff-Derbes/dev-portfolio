import React from "react";
import Image from "next/image";
import quippr from "../public/assets/projects/quippr.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

function Quippr(props) {
  return (
    <>
      <Head>
        <title>Jeff | Quippr</title>
        <meta name="description" content="Jeff Derbes | Quippr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo-white.png" />
      </Head>
      <div className="w-full pt-[80px]">
        <div className="w-screen h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={quippr}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Quippr</h2>
            <h3>Next JS 13 / Tailwind / MongoDB / Clerk</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2 className="py-4">Overview</h2>
            <p className="pb-10 leading-relaxed max-w-[80%]">
              This website was built as a learning project to explore the new
              features of Next 13. The main concept is to be a clone of
              Threads/Twitter where users can use the platform for
              microblogging. The website is fully responsive and has a clean and
              modern design. Quippr is hosted on Vercel and uses Tailwind CSS.
            </p>
            <a
              href="https://www.quippr.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="relative inline-flex items-center justify-center p-0.5 mt-4 md:mt-12 overflow-hidden text-l font-medium rounded-lg bg-accent ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-primary rounded-md hover:bg-accent hover:text-black">
                  Visit Site
                </span>
              </button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 border border-accent rounded-xl py-4 ">
            <div className="p-2 ">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1 px-4">
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Next JS
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> MongoDB
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Clerk
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Quippr;
