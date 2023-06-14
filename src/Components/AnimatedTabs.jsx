import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

let tabs = [
  { id: "strona-glowna", label: "Strona główna", path: "/" },
  { id: "oferta", label: "Oferta", path: "/oferta" },
  { id: "onas", label: "O nas", path: "/o-nas" },
  { id: "dokumenty", label: "Dokumenty", path: "/dokumenty" },
  { id: "wydarzenia", label: "Wydarzenia", path: "/wydarzenia" },
  { id: "kontakt", label: "Kontakt", path: "/kontakt" },
];

function AnimatedTabs({ trigger }) {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    console.log(tab);
    setActiveTab(tab.id);
  };
  const log = () => {
    setActiveTab("strona-glowna");
  };
  useEffect(() => {
    if (trigger) {
      log();
    }
  }, [trigger]);
  return (
    <div className="flex justify-end gap-4">
      {tabs.map((tab) => (
        <Link to={tab.path}>
          <motion.button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-black/60"
            } relative rounded-full px-3 py-1.5 text-md font-medium text-gray-900  transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10  mix-blend-difference border-2 border-gray-900 rounded-full "
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                style={{
                  borderRadius: 9999,
                }}
              />
            )}
            {tab.label}
          </motion.button>
        </Link>
      ))}
    </div>
  );
}

export default AnimatedTabs;
