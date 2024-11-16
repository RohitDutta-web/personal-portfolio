import Safari from "../../components/ui/safari";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Project_card({project_name,url,img,git,link}) {
  return (
    <>
      <div className="w-96 bg-white h-[248px] p-2 m-5 group  rounded-xl ">
        <Safari
          url={url}
          className="size-full  hover:opacity-70 group-hover:opacity-70 rounded "
          src={img}
        />
        <div className="invisible group rounded  group-hover:visible    relative bottom-20  font-bold mt-2 text-2xl w-full ">
          <p className="bg-white p-2">{project_name }</p>
          <div className="text-green-400 pl-2 w-full flex gap-10 text-2xl bg-white">
            <button>
              <a href={git} target="blank">
                <FaGithub className="bg-white"/>
              </a>
            </button>
            <button>
              <a target="blank" href={link}>
                <FaExternalLinkAlt className="bg-white" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
