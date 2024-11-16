import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <>
     
      <div className="w-full max-w-screen text-[60px] text-center text-green-400 opacity-70 mt-48">
        Let's Connect!
      </div>
      <div className="w-full flex justify-center items-center text-6xl gap-10 mt-10 mb-10 text-green-400">
        <a href=""><IoMdMail className="bg-transparent hover:opacity-100 opacity-70    " /></a>
        <a href=""><FaLinkedin className="bg-transparent hover:opacity-100 opacity-70  "/></a>
        <a href=""><FaFacebookSquare className="bg-transparent hover:opacity-100 opacity-70  " /></a>
        <a href=""><AiFillInstagram className="bg-transparent hover:opacity-100 opacity-70  " /></a>
        <a href=""><FaGithubSquare className="bg-transparent hover:opacity-100 opacity-70  " /></a>


      </div>
    </>
  )
}
