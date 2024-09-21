import { CiSearch } from 'react-icons/ci'
import { PiBellLight, PiNotePencilThin } from 'react-icons/pi'
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/new-blog')
  }

  return (
    <>
    <div className="flex items-center justify-between w-full h-12 px-[2%] border">
        <div className=" flex items-center w-[45%]">
          <div className=" px-2 font-semibold text-2xl">Medium</div>
          <div className=" flex items-center border rounded-full p-2 w-full mx-[5%] my-2 bg-zinc-50 ">
          <CiSearch className=" text-xl"/>
          <input className=" outline-none border-none mx-2 placeholder:text-zinc-500 placeholder:text-sm" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="  flex items-center justify-between w-[25%] md:justify-between md:w-[20%] sm:w-[18%] xl:w-[18%]">
          <div onClick={redirect} className=" flex justify-start items-center opacity-50 hover:opacity-100 w-[40%] max-md:hidden xl:justify-end">
            <PiNotePencilThin className=" text-2xl " />
            <p className=" text-sm ml-[5%]">Write</p>
          </div>
          <div className=" flex items-center justify-center opacity-50 hover:opacity-100 max-md:w-[60%] max-sm:w-[70%] ">
          <PiBellLight className=" text-2xl font-semibold" />
          </div>
          <div className=" bg-black w-8 h-8 rounded-full "></div>
        </div>
      </div>
    </>
  )
}
