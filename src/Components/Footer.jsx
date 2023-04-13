import logo from "../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-white text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src={logo} alt="" className="w-[64px]" />
        <p className="text-gray-800">Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
