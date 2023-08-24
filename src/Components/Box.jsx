import React, { useRef } from "react";
import { motion } from "framer-motion";
export const Box = () => {
  const boxRef = useRef(null);
  return (
    <div
      style={{
        height: "300px",
        padding: "10px",
        border: "1px solid black",
        display: "flex",
        width: "25%",
        overflowX: "hidden",
      }}
      ref={boxRef}
    >
      <motion.div
        style={{
          height: "50px",
          padding: "10px",
          border: "1px solid black",
          display: "inline-flex",
          gap: "10px",
        }}
        drag="x"
        dragConstraints={boxRef}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              minWidth: "50px",
              height: "50px",
              backgroundColor: "red",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
export default Box;
