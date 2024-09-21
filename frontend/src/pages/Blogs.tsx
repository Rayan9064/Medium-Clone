import { TiBookmark } from "react-icons/ti";
import { GoKebabHorizontal } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaHandsClapping } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import TextCarousel from "../components/TextCarousel";

export default function Blogs() {
  return (
    <div className="">

      {/* Navbar */}
      <Navbar />


      {/* Blogs */}
      <div className=" md:w-4/5 lg:w-2/4 mx-4 md:mx-auto">
        <TextCarousel/>
        <Blog
          writer="William  Shakespeare"
          posted="Dec 3 2023"
          claps={10}
          response={89}
          title=" How an Ugly Single-page Website makes $5000 a Month with Affiliate
            Marketing"
          content=" No need to create a fancy and modern website with hundereds of pages
            to make money online. -- Making money online is the dream for man"
          thumbnail=""
        ></Blog>
      </div>
    </div>
  );
}

interface BlogInputType {
  writer: string;
  posted: string;
  claps: number;
  response: number; 
  title: string;
  content: string;
  thumbnail: string;
}

function Blog({
  writer,
  posted,
  claps,
  response,
  title,
  content,
  thumbnail,
}: BlogInputType) {

  const blIconStyle = {
    display: 'flex',
    paddingRight: "10%",
    alignItems: "center",
  };

  return (
    <div className=" bg-white">
      <div className="flex">
        <div className=" bg-orange-500 rounded-full w-6 h-6 flex justify-center items-center">
          H
        </div>
        <div className=" font-extralight mx-1">{writer}</div>
      </div>
      <div className="w-full">
        <div className=" grid grid-cols-4 h-full my-2">
          <div className=" col-span-3 mr-2">
            <div className=" sm:text-lg  font-bold">{title}</div>
            <div className=" text-md font-extralight">{content}</div>
          </div>
          <div className=" m-1 bg-orange-600">Image{thumbnail}</div>
        </div>
        {/* Icons and category */}
        <div className=" flex md:w-8/12 lg:w-9/12 h-8 items-center justify-between">
        
        {/* Bottom right icons */}
        <div className=" flex text-sm">
          <div className="w-32 opacity-50 hover:opacity-100" style={blIconStyle}>{posted}</div>
          <div className=" opacity-50 hover:opacity-100" style={blIconStyle}><BiSolidMessageRounded className="mr-1" />{response}</div>
          <div className=" opacity-50 hover:opacity-100" style={blIconStyle}><FaHandsClapping className="mr-1" />{claps}</div>
        </div>
        
        {/* Bottom left icons */}
          <div className=" h-full flex text-[1.4rem]">
            {/* Minus circle */}
            <FiMinusCircle className=" ml-4 h-8 opacity-50 hover:opacity-100"/>
            {/* Bookmark */}
            <TiBookmark className=" ml-4 h-8 max-md:hidden opacity-50 hover:opacity-100" />
            {/* Three dots */}
            <GoKebabHorizontal className=" ml-4 h-8 opacity-50 hover:opacity-100"/>
          </div>
        </div>
      </div>
    </div>
  );
}
