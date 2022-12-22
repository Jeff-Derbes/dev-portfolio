import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsPersonLinesFill} from "react-icons/bs";

const Main = (props) => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-200">Let's build something together</p>
                    <h1 className="py-4">Hi, I'm <span className="text-[#40dbfc]">Jeff</span></h1>
                    <h2 className="py-2">A Full-stack Developer</h2>
                    <p className="py-4 max-w-[70%] m-auto">I'm a full-stack web developer specializing in building
                        elegant web experiences. I build responsive full-stack apps and love learning and implementing
                        new technologies </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div
                            className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc]
                             hover:rounded-full transition-all duration-300">
                            <FaLinkedin size={30}/>
                        </div>
                        <div
                            className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc] hover:rounded-full transition-all duration-300">
                            <FaGithub size={30}/>
                        </div>
                        <div
                            className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc]
                             hover:rounded-full transition-all duration-300">
                            <AiOutlineMail size={30}/>
                        </div>
                        <div
                            className="p-3 cursor-pointer hover:text-black hover:bg-[#40dbfc] hover:rounded-full transition-all duration-300">
                            <BsPersonLinesFill size={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;