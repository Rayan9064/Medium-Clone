import { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { GoKebabHorizontal } from "react-icons/go";
// import { Publish } from "../components/Publish";
// import axios from "axios";
// import { BACKEND_URL } from "../config";
// import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";

export function CreateBlog() {
  const [createBlog, setCreateBlog] = useState<newBlogInputType>({
    title: "",
    content: "",
  });

  const [modal, setModal] = useState(false);

  // const navigate = useNavigate();

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateBlog({
      ...createBlog,
      [event.target.name]: event.target.value,
    });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  //  async function sendRequest() {
  //   try {
  //       // const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, createBlog);
  //       // navigate(`/blogs`);
  //       console.log(response);
  //   } catch(e) {
  //       console.log(e);
  //   }
  // }
 
  return (
    <div>
      {modal && <Modal post={createBlog}/>}
      <div className="flex items-center justify-between w-4/5 py-8 h-12 mx-auto mb-4">
        <div className=" px-2 font-semibold text-2xl">Medium</div>
        <div className=" flex justify-center items-center">
          <button onClick={toggleModal} className=" px-3 bg-green-700 rounded-full mx-2 text-slate-100 text-sm py-[2px] font-medium">
            Publish
          </button>
          <GoKebabHorizontal className=" text-xl text-gray-600 mx-2" />
          <CiBellOn className=" text-2xl text-gray-600 mx-2" />
          <div className=" bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center text-white mx-2">
            M
          </div>
        </div>
      </div>
      <div className=" relative flex flex-col w-2/3 mx-auto mt-8 z-0">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={createBlog.title}
          onChange={handleInputChange}
          className=" outline-none font-lightlight text-4xl my-4"
          />
          {/* <Publish></Publish> */}
        <textarea
          name="content"
          value={createBlog.content}
          placeholder="Tell your story"
          onChange={handleInputChange}
          className=" font-light outline-none text-xl resize-none h-svh"
        ></textarea>
      </div>
    </div>
  );
}

interface newBlogInputType {
  title: string;
  content: string;
}
