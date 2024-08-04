import { TiBookmark } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";
import { GoKebabHorizontal } from "react-icons/go";

export default function Blogs() {
  return (
    <div className="">
      <div className="flex items-center justify-end w-full h-12 bg-cyan-300">
        <div className=" px-2 font-semibold text-2xl">Medium</div>
        <div className=" bg-black w-10 h-10 rounded-full">""</div>
      </div>
      <div className=" md:w-4/5 lg:w-2/4 bg-slate-500 mx-auto">
        <Blog
          postedAt="Dec 3 2023"
          title=" How an Ugly Single-page Website makes $5000 a Month with Affiliate
            Marketing"
          content=" No need to create a fancy and modern website with hundereds of pages
            to make money online. -- Making money online is the dream for man..."
          category="Side Hustle"
          timeTillNow="3 min read"
          thumbnail=""
        ></Blog>
      </div>
    </div>
  );
}

interface BlogInputType {
  postedAt: string;
  title: string;
  content: string;
  category: string;
  timeTillNow: string;
  thumbnail: string;
}

function Blog({
  postedAt,
  title,
  content,
  category,
  timeTillNow,
  thumbnail,
}: BlogInputType) {
  return (
    <div className="mx-2">
      <div className="flex">
        <div className=" bg-orange-500 rounded-full w-6 h-6 flex justify-center items-center">
          H
        </div>
        <span className=" mx-1">&#8226;</span>
        <div className=" font-extralight">{postedAt}</div>
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
          <div>
            <span className=" bg-slate-400 font-medium text-xs rounded-md px-1">
              {category}
            </span>
            <span className=" font-extralight text-xs mx-2">{timeTillNow}</span>
          </div>
          <div className=" flex w-1/5 lg:w-1/4 max-sm:mx-4 justify-evenly">
            <TiBookmark className=" w-6 h-6"/>
            <TiDeleteOutline className=" w-6 mx-auto h-6"/>
            <GoKebabHorizontal className=" w-6 h-6"/>
          </div>
        </div>
      </div>
    </div>
  );
}
