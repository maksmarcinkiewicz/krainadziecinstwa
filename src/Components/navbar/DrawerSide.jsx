import docIcon from "../../assets/icons/nav-icons/essay.png";
import aboutIcon from "../../assets/icons/nav-icons/aboutIcon.png";
import priceIcon from "../../assets/icons/nav-icons/price-list.png";
import contactIcon from "../../assets/icons/nav-icons/contacts.png";

const DrawerSide = () => {
  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100">
        <li className="">
          <a href="#documents">
            <img src={docIcon} alt="" className="w-6 h-6" />
            Dokumenty
          </a>
        </li>
        <li>
          <a href="#contact">
            {" "}
            <img src={aboutIcon} alt="" className="w-6 h-6" />O nas
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src={contactIcon} alt="" className="w-6 h-6" />
            Oferta
          </a>
        </li>
        <li>
          <a href="#contact">
            {" "}
            <img src={docIcon} alt="" className="w-6 h-6" />
            Kadra pedagogiczna
          </a>
        </li>
        <li>
          <a href="#contact">
            {" "}
            <img src={priceIcon} alt="" className="w-6 h-6" />
            Cennik
          </a>
        </li>
        <li>
          <a href="#contact">
            {" "}
            <img src={contactIcon} alt="" className="w-6 h-6" />
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DrawerSide;
