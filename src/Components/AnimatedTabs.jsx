import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

let tabs = [
  { id: "oferta", label: "Oferta", path: "/oferta" },
  { id: "onas", label: "O nas", path: "/o-nas" },
  { id: "dokumenty", label: "Dokumenty", path: "/dokumenty" },
  { id: "wydarzenia", label: "Wydarzenia", path: "/wydarzenia" },
  { id: "kontakt", label: "Kontakt", path: "/kontakt" },
];

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    console.log(tab);
    setActiveTab(tab.id);
  };

  return (
    <div className="flex justify-end gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-black/60"
          } relative rounded-full px-3 py-1.5 text-lg font-medium text-gray-900 outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <Link to={tab.path}>
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10  mix-blend-difference border-2 border-black rounded-full "
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                style={{
                  borderRadius: 9999,
                }}
              />
            )}
            {tab.label}
          </Link>
        </button>
      ))}
    </div>
  );
}

export default AnimatedTabs;
