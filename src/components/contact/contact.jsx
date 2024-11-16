import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { useScroll } from "../../lib/context";



export default function Contact() {
  const sectionRef = useScroll();

  const handleMail = () => {
    window.location.href = "mailto:duttarohit754@gmail.com?subject=Subject%20Here&body=Body%20Here";
  }
  return (
    <>
     
      <div className="w-full max-w-screen text-[60px] text-center text-green-400 opacity-70 mt-48" ref={sectionRef}>
        Let's Connect!
      </div>
      <div className=" max-w-screen flex justify-center items-center text-6xl gap-10 mt-10 mb-10 text-green-400 flex-wrap">
        <a onClick={handleMail}><IoMdMail className="bg-transparent hover:opacity-100 opacity-70     cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/rohit-dutta-ba1301171/" target="blank"><FaLinkedin className="bg-transparent hover:opacity-100 opacity-70  "/></a>
        <a href="https://www.facebook.com/rohit.dutta.3576224/" target="blank"><FaFacebookSquare className="bg-transparent hover:opacity-100 opacity-70  " /></a>
        <a href="https://www.instagram.com/_10_corazon/?igsh=YTZ4bDB1dWZidnE4&utm_source=qr#" target="blank" ><AiFillInstagram className="bg-transparent hover:opacity-100 opacity-70  " /></a>
        <a href="https://github.com/RohitDutta-web" target="blank" ><FaGithubSquare className="bg-transparent hover:opacity-100 opacity-70  " /></a>


      </div>
    </>
  )
}
