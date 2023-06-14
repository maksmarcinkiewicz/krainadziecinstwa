import AnimatedTabs from "../AnimatedTabs";
import logo from "../../assets/logo.avif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
const DrawerMain = () => {
  const [trigger, setTrigger] = useState(0);
  return (
    <div className="container mx-auto flex items-center justify-between  px-2">
      <div className=" lg:hidden ">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <motion.div
        className=" justify-end lg:justify-start px-2 mx-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[64px] lg:w-[128px] h-[64px] lg:h-[128px] mt-2"
            onClick={() => {
              setTrigger((trigger) => trigger + 1);
            }}
          />
        </Link>
      </motion.div>
      <div className="hidden lg:block ">
        <ul className="menu menu-horizontal">
          <AnimatedTabs trigger={trigger} />
        </ul>
      </div>
    </div>
  );
};

export default DrawerMain;
