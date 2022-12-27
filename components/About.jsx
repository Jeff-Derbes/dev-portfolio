import React from "react";
import Image from "next/image";
import Link from "next/link";
import me from "../public/assets/me.jpeg";
import Skills from "./Skills";

function About() {
  return (
    <div
      id="about"
      className="w-full max-w-[1240px] md:h-screen p-2 grid md:grid-cols-2 gap-x-36 mx-auto justify-items-center items-center py-16"
    >
      <div className="md:flex">
        <div className="md:max-w-[700px]">
          <h2 className="uppercase pb-10 tracking-widest text-[#40dbfc]">
            About
          </h2>

          <p className="py-2 text-gray-300 leading-relaxed">
            A software engineer who values learning and growing with people,
            teams, and technologies.
          </p>

          <p className="py-2 text-gray-300 leading-relaxed">
            I am currently working as a technical consultant for Perficient and
            helping a social media client create user-facing sites using React
            and Hack.
          </p>
          <p className="py-2 text-gray-300 leading-relaxed">
            I love working with frontend tech and building elegant user
            interfaces but I have spent considerable time working with backend
            technologies. I like to dedicate time to further developing my
            skills and I have recently really enjoyed working with NextJS,
            Astro, ASP.NET, and Shopify&apos;s hydrogen framework.
          </p>
          <Link href="/#projects" scroll={false} legacyBehavior>
            <p className="py-4 text-gray-300 underline cursor-pointer">
              Check out my work
              <span>
                <svg
                  className="w-5 h-5 ml-2 inline"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </span>
            </p>
          </Link>
        </div>
      </div>
      <div className="py-16">
        <Skills />
      </div>
    </div>
  );
}

export default About;
