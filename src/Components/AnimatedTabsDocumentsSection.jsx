import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

let tabs = [
  { id: "przedszkole", label: "Przedszkole" },
  { id: "klubik", label: "klubik" },
];

function AnimatedTabsDocumentsSection() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex justify-end gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-black/60"
          } relative rounded-full px-3 py-1.5 text-lg font-medium text-gray-900 outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.button
              layoutId="bubble"
              className="absolute inset-0 z-10 border rounded-full border-black mix-blend-difference "
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={() => setSelectedCategory(tabs.id)}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default AnimatedTabsDocumentsSection;
