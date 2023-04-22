import { motion } from "framer-motion";
import { useState } from "react";

let categories = [
  { id: "przedszkole", label: "Przedszkole" },
  { id: "klubik", label: "Klubik" },
];

export default function CategoryTabs({ setSelectedCategory }) {
  let [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleTabClick = (category) => {
    console.log(category);
    setActiveCategory(category.id);
    setSelectedCategory(category.id);
  };

  return (
    <div className="flex space-x-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleTabClick(category)}
          className={`${
            activeCategory === category.id ? "" : "hover:text-black/60"
          } relative px-3 py-1.5 text-lg font-medium text-black  transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeCategory === category.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10  mix-blend-difference border-2 border-white"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {category.label}
        </button>
      ))}
    </div>
  );
}
