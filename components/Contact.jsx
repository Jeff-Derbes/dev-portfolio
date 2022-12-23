import React from "react";
import Image from "next/image";
import contact from "../public/assets/contact.svg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact(props) {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#40dbfc]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="max-h-[250px] py-10"
                  src={contact}
                  alt="person outline"
                />
              </div>
              <div>
                <h2 className="py-2">Jeff Derbes</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I&apos;m always open to meeting and connecting with people
                  about new ideas or opportunities. Contact me and let&apos;s
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/jeff-derbes/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc] hover:rounded-full transition-all duration-300">
                      <FaLinkedinIn size={30} />
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

                  <div className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc] hover:rounded-full transition-all duration-300">
                    <AiOutlineMail size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto border rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/6ecedcf4-1237-4ac4-b74a-8fa5190498c4"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home" scroll={false}>
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#40dbfc]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
