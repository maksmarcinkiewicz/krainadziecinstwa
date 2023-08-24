import React, { useRef } from "react";
import { motion } from "framer-motion";

const DocumentSlider = ({ documents }) => {
  const sliderRef = useRef(null);

  const handleDrag = (event, info) => {
    event.preventDefault();
    sliderRef.current.scrollLeft -= info.delta.x;
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          onClick={() => {
            sliderRef.current.scrollBy({
              left: -300,
              behavior: "smooth",
            });
          }}
        >
          &lt;
        </button>
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          onClick={() => {
            sliderRef.current.scrollBy({
              left: 300,
              behavior: "smooth",
            });
          }}
        >
          &gt;
        </button>
      </div>
      <motion.div
        className="flex overflow-x-auto hide-scrollbar"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDrag={handleDrag}
        ref={sliderRef}
      >
        {documents.map((document, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-4 mx-2"
          >
            <h3 className="text-lg font-semibold mb-2">{document.name}</h3>
            <p className="text-gray-500">{document.description}</p>
            <a
              href={document.file}
              className="mt-4 btn btn-outline w-full"
              download
            >
              Download
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DocumentSlider;
