import { FaJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { AiOutlineLinux } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FaGitAlt } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className=" max-w-screen text-2xl font-bold text-green-400 opacity-70 ml-5 mt-36">Skills .</div>
      <div className="text-4xl text-green-400 flex flex-wrap justify-around m-5">
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><FaJs className="bg-transparent group-hover:text-[#233142]" /><span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Javascript</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><RiReactjsFill className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">React JS</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><RiNextjsFill className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Next JS</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><FaNodeJs className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Node JS</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><SiExpress className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Express JS</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><SiMongodb className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Mongo DB</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><FaHtml5  className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">HTML</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><FaCss3 className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">CSS</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><RiTailwindCssFill className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Tailwind</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><FaBootstrap  className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Bootstrap</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><FaGitAlt  className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Git Bash</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><FiGithub  className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">GitHub</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><AiOutlineLinux className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Linux</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><FaPython className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">Python</span></div>
        <div className="border-2 w-28 flex flex-col h-28 justify-center items-center border-green-400 m-2 hover:bg-green-400 hover:bg-opacity-50 group "><SiPostgresql  className="bg-transparent group-hover:text-[#233142]" /> <span className="text-xl opacity-70 bg-transparent group-hover:text-[#233142] group-hover:opacity-100 ">PostgreSQL</span></div>
      </div>
    </>
  )
}
