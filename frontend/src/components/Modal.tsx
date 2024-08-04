export function Modal() {
  return (
    <div className=" fixed w-screen h-screen z-10">
    <div className=" w-screen h-screen bg-black opacity-80"></div>
    <div className=" bg-slate-200 absolute top-[5%] left-[10%] right-[10%] w-[80%] h-[90%] lg:grid grid-cols-2">
      <div className=" bg-slate-400 relative w-[95%] h-full mx-auto py-[5%] lg:py-[10%] lg:w-11/12">
        <div className=" bg-white w-full h-full lg:w-[90%] mx-auto"> 
          <h3 className=" font-medium text-lg">Story preview</h3>
          <img className=" bg-slate-100 h-[42%] text-sm text-gray-500 my-2" src="" alt="Include a high-quality image in your story to make it more inviting to readers." />
          <input className=" w-full text-xl font-semibold border-b-2 border-gray-300 my-1" type="text" placeholder="Write a preview title" />
          <input className=" w-full text-xl border-b-2 border-gray-300 my-1" type="text" />
          <p className=" text-sm text-slate-500"><span className=" font-medium">Note:</span> Changes here will affect how your story appears in public places like Medium’s homepage and in subscribers’ inboxes — not the contents of the story itself.</p>
        </div>
      </div>
      <div className=" bg-slate-600relative w-[95%] h-full mx-auto py-[5%] lg:py-[10%] lg:w-11/12">
      Publishing to: <span className=" font-bold">Mohammed Rayan A</span>
      </div>
    </div>
    </div>
  )
}
