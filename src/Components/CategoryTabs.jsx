import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "przedszkole", label: "Przedszkole" },
  { id: "klubik", label: "Klubik" },
];

export default function CategoryTabs({ setSelectedCategory }) {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    console.log(tab);
    setActiveTab(tab.id);
    setSelectedCategory(tab.id);
  };

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-black/60"
          } relative px-3 py-1.5 text-lg font-medium text-black  transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10  mix-blend-difference border-2 border-white"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={() => handleTabClick(tab)}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
