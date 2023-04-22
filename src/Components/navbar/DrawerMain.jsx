import AnimatedTabs from "../AnimatedTabs";
import logo from "../../assets/logo.jpg";

const DrawerMain = () => {
  return (
    <div className="flex items-center justify-between lg:px-12 px-2">
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
      <div className=" justify-end lg:justify-start px-2 mx-2 ">
        <a href="/">
          <img src={logo} alt="" className="h-[64px] lg:h-[128px] mt-2" />
        </a>
      </div>
      <div className="hidden lg:block ">
        <ul className="menu menu-horizontal">
          <AnimatedTabs />
        </ul>
      </div>
    </div>
  );
};

export default DrawerMain;
