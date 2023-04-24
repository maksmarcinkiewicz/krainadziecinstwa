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
          } relative px-3 py-1.5 text-lg font-medium text-black  transition `}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {activeCategory === category.id && (
            <motion.span
              layoutId="bubble1"
              className="absolute inset-0 z-10  mix-blend-difference border-b-2 border-white"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {category.label}
        </button>
      ))}
    </div>
  );
}
