import picture from "../../assets/image.png"




export default function About() {
  return (
    <>
      <div className="mt-16 flex items-center">
        <div className="w-2/3 ">
          <h1 className="w-full text-start ml-5 mb-2 text-2xl font-bold text-green-400 opacity-70">About me .</h1>
          <p className="text-start ml-5 text-white">Seasoned Full Stack Developer with a deep expertise in the MERN stack. Adept at crafting seamless, high-performance applications, blending healthcare insights with robust technical skills. My adaptive and flexible nature ensures optimal outcomes in all projects, driving innovation and excellence. Passionate about continuous learning and staying ahead of industry trends to deliver cutting-edge solutions.</p>
        </div>
        <div className="w-1/3 flex justify-center ">
          
          <img className="w-48 rounded-full" src={picture} alt="picture" />
        </div>
      </div>
    </>
  )
}
