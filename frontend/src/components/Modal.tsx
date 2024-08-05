import { RxCross2 } from "react-icons/rx";

export function Modal() {
  return (
    <div className=" fixed w-screen h-screen z-10">
      <div className=" w-screen h-screen bg-black opacity-80">
      <RxCross2 className=" fixed text-2xl text-white right-4 top-2 hover:cursor-pointer lg:right-6 border border-white rounded-full"/>
      </div>
      <div className=" bg-white absolute top-[5%] left-[10%] right-[10%] w-[80%] h-[90%] overflow-y-auto overflow-hidden lg:grid grid-cols-2">
        <div className=" w-[95%] h-full mx-auto py-[5%] max-lg:h-[70%] lg:py-[7%] lg:w-11/12">
          <div className=" bg-white w-full h-full lg:w-[90%] mx-auto">
            <h3 className=" font-medium text-lg">Story preview</h3>
            <img
              className=" bg-slate-100 h-[50%] w-full text-sm text-gray-500 my-2 max-sm:h-[30%] lg:h-[42%] lg:w-full"
              src=""
              alt="Include a high-quality image in your story to make it more inviting to readers."
            />
            <textarea
              className=" w-full text-xl font-semibold border-b-2 resize-none overflow-hidden border-gray-300 my-1 outline-none"
              placeholder="Write a preview title"
              rows={3} maxLength={100}
            />
            <input
              className=" w-full text-md border-b-2 outline-none border-gray-300 my-1"
              placeholder="Write a preview subtitle..."
              type="text"
            />
            <p className=" text-sm text-slate-500">
              <span className=" font-medium">Note:</span> Changes here will
              affect how your story appears in public places like Medium’s
              homepage and in subscribers’ inboxes — not the contents of the
              story itself.
            </p>
          </div>
        </div>
        <div className=" w-[95%] h-full mx-auto py-[5%] max-lg:w-11/12 lg:py-0 my-[8%]">
          <p className=" font-normal my-2">
            Publishing to:{" "}
            <span className=" font-semibold">Mohammed Rayan A</span>
          </p>
          <p className=" text-sm font-light">
            Add or change topics (up to 5) so readers know what your story is
            about
          </p>
          <input
            className=" w-full h-[10%] text-sm rounded-sm px-1 my-2 bg-gray-50 outline-none border border-slate-300"
            placeholder="Add a topic..."
            type="text"
          />
          <p className=" text-sm text-slate-700"><span className=" underline">Learn more</span> about what happens to your post when you publish.</p>
          <div>
          <button className=" px-3 bg-green-700 rounded-full mx-2 my-[5%] text-slate-100 text-sm px-4px py-2 font-medium">Publish now</button>
          <button className=" font-extralight text-gray-500 mx-2 text-sm hover:text-gray-700">Schedule for later</button>
          </div>
        </div>
      </div>
    </div>
  );
}
