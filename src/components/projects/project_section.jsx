import Project_card from "./project_card"

export default function Project_section() {
  return (
    <>
      <p className="text-2xl font-bold text-green-400 opacity-70  m-5 mt-20">Projects .</p>
      <div className="w-full flex flex-wrap justify-center items-center max-w-screen gap-10">
      <Project_card
        project_name={"Job Destination"}
        url={"https://job-destination.com/"} 
        img={"https://res.cloudinary.com/devq7wxxi/image/upload/v1731324670/tcbxih7zf4q4sce7iih7.png"}
        git={"https://github.com/RohitDutta-web/JOB-PORTAL_final"}
        link={"https://job-portal-final-3.onrender.com/"}
      />
      
      <Project_card
        project_name={"Job Destination"}
        url={"https://job-destination.com/"} 
        img={"https://res.cloudinary.com/devq7wxxi/image/upload/v1731324670/tcbxih7zf4q4sce7iih7.png"}
        git={"https://github.com/RohitDutta-web/JOB-PORTAL_final"}
        link={"https://job-portal-final-3.onrender.com/"}
        />
     </div>
    </>
  )
}
