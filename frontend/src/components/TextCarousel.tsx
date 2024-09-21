import { useEffect } from "react";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";

export default function TextCarousel() {
  const topics = [
    "Following",
    "UI",
    "DevOps",
    "Java",
    "Web3",
    "UX",
    "React",
    "Enterpreneurship",
    "Coding",
    "JavaScript",
    "Business",
    "Productivity",
    "Writing",
    "Self Improvement",
    "Technology",
    "programming",
  ];

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");

    // Function to handle scrolling
    const scrollLeft = () => {
      if (scrollContainer)
        scrollContainer.scrollBy({
          left: -100,
          behavior: "smooth",
        });
    };

    const scrollRight = () => {
      if (scrollContainer)
        scrollContainer.scrollBy({
          left: 100,
          behavior: "smooth",
        });
    };

    // Add event listeners if elements are found
    if (scrollLeftButton && scrollRightButton) {
      scrollLeftButton.addEventListener("click", scrollLeft);
      scrollRightButton.addEventListener("click", scrollRight);
    }

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      if (scrollLeftButton && scrollRightButton) {
        scrollLeftButton.removeEventListener("click", scrollLeft);
        scrollRightButton.removeEventListener("click", scrollRight);
      }
    };
  }, []);

  let key = 1;
  return (
    <div className=" relative flex my-4 bg-slate-200 overflow-hidden">
      <button id="scroll-left">
        <TiChevronLeft className=" text-xl text-gray-700 m-2" />
      </button>
      <div
        id="scroll-container"
        className=" flex items-center overflow-x-auto snap-x no-scrollbar"
      >
      {/* Fade effect on the right side */}
      <div className=" p-6 sticky left-0 w-2 bg-gradient-to-l from-transparent to-white pointer-events-none z-10"></div>
        {topics.map((topic) => {
          return (
            <div
              key={key++}
              className=" text-sm px-4 py-3 snap-proximity flex-shrink-0 max-w-xs"
            >
              {topic}
            </div>
          );
        })}
        {/* Fade effect on the right side */}
        <div className=" p-6 sticky right-0 w-2 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
      <button id="scroll-right">
        <TiChevronRight className=" text-xl text-gray-700 m-2" />
      </button>
    </div>
  );
}
