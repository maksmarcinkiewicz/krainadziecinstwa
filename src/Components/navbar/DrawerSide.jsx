import docIcon from "../../assets/icons/nav-icons/essay.png";
import aboutIcon from "../../assets/icons/nav-icons/aboutIcon.png";
import priceIcon from "../../assets/icons/nav-icons/price-list.png";
import contactIcon from "../../assets/icons/nav-icons/contacts.png";
import { Link } from "react-router-dom";
const menuItems = [
  { label: "Dokumenty", icon: docIcon, link: "/about" },
  { label: "O nas", icon: aboutIcon, link: "/dashboard" },
  { label: "Oferta", icon: contactIcon, link: "/about" },
  { label: "Kadra pedagogiczna", icon: docIcon, link: "/dashboard" },
  { label: "Cennik", icon: priceIcon, link: "#price" },
  { label: "Kontakt", icon: contactIcon, link: "#contact" },
];
const DrawerSide = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link to={item.link}>
              <img src={item.icon} alt="" className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerSide;
