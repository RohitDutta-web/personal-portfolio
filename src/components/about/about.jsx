import picture from "../../assets/image.png"
import { useScroll } from "../../lib/context"



export default function About() {

  const sectionRef = useScroll();
  const handleClick = () => { sectionRef.current.scrollIntoView({ behavior: 'smooth' }); } 
  return (
    <>
      <div className="mt-16  items-center flex flex-col">
        <div className="w-1/3 flex justify-center ">

          <img className="w-48 rounded-full" src={picture} alt="picture" />
        </div>
        <div className="w-2/3 ">
          <h1 className="w-full text-start ml-5 mb-2 text-2xl font-bold text-green-400 opacity-70">About me .</h1>
          <p className="text-start ml-5 text-white">Seasoned Full Stack Developer with a deep expertise in the MERN stack. Adept at crafting seamless, high-performance applications, blending healthcare insights with robust technical skills. My adaptive and flexible nature ensures optimal outcomes in all projects, driving innovation and excellence. Passionate about continuous learning and staying ahead of industry trends to deliver cutting-edge solutions.</p>
          <div className="ml-5">
            <button className="border-2 pt-2 pb-2 pl-5 pr-5 rounded-3xl text-green-400 text-xl font-bold hover:opacity-100 hover:bg-green-400 hover:bg-opacity-20 border-green-400 opacity-70  mr-5 mt-5" onClick={handleClick}>Contact</button>
            <button className="border-2 pt-2 pb-2 pl-5 pr-5 rounded-3xl text-green-400 text-xl font-bold hover:opacity-100 hover:bg-green-400 hover:bg-opacity-20 border-green-400 opacity-70  mr-5 mt-5"><a className="bg-transparent" href="https://pdfhost.io/v/cHdFaKxTi_Rohit_dutta_CV" target="blank">Resume</a></button>
          </div>
        </div>

      </div>
    </>
  )
}
