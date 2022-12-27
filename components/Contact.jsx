import React from "react";
import Image from "next/image";
import me from "../public/assets/me.jpeg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineProfile,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact(props) {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h2 className="pb-16 tracking-widest uppercase text-accent">Contact</h2>
        <div className="flex-col max-w-[90%] md:max-w-[500px] mx-auto justify-center items-center ">
          <div className="col-span-3 w-full h-auto border rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/6ecedcf4-1237-4ac4-b74a-8fa5190498c4"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="flex-col w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    required={true}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="3"
                    name="message"
                    required={true}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
              <div className="lg:p-4 h-full ">
                <div>
                  <div className="flex items-center justify-around py-4">
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
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home" scroll={false}>
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-accent" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
