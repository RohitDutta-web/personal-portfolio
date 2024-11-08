import { useState } from "react";

export default function Path() {

  const [toggle, setToggle] = useState();

  const handleToggle = (tab) => {
   setToggle(tab);
 }

  return (
    <>
      <div className=" border-2 mt-10 ml-5 mr-5 border-green-400 p-5 rounded-xl lg:w-1/2 lg:relative lg:left-1/4">
        <div className="flex  text-green-400 text-xl font-bold opacity-70 border-b-4 border-r-2 border-l-2 rounded-xl border-green-400 p-2 justify-around ">
          <h1 onClick={() => handleToggle(1)} className="cursor-pointer opacity-70 hover:opacity-100" >Studies</h1>
          
          <h1 onClick={()=>handleToggle(2)} className="cursor-pointer opacity-70 hover:opacity-100" >Employment</h1>
        </div>
        <div>
          <p className={toggle === 1 ? "flex text-white p-2 mt-2" : "hidden"}>NSHM College of Management and Technology : Bachelors Degree (2018 - 2022) : 8.4 CGPA <br /> Upgrad : Full Stack Development Bootcamp : MERN (2024)</p>
          <p className={toggle === 2 ? "flex text-white p-2 mt-2" : "hidden"}>Lions Club : Internship : (2021 - 2022) <br /> Medplus : (2022-2023) <br />Titan EyePlus : (2023-2024)</p>
        </div>
      </div>
    </>
  )
}
