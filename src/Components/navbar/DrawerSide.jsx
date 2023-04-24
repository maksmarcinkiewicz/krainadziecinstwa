import docIcon from "../../assets/icons/nav-icons/documents-icon.png";
import aboutIcon from "../../assets/icons/nav-icons/about.png";
import eventIcon from "../../assets/icons/nav-icons/event.png";
import contactIcon from "../../assets/icons/nav-icons/contact-book.png";
import offerIcon from "../../assets/icons/nav-icons/offer.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const menuItems = [
  { label: "Oferta", icon: offerIcon, link: "/oferta" },
  { label: "O nas", icon: aboutIcon, link: "/o-nas" },
  { label: "Dokumenty", icon: docIcon, link: "/dokumenty" },
  { label: "Wydarzenia", icon: eventIcon, link: "/wydarzenia" },
  { label: "Kontakt", icon: contactIcon, link: "/kontakt" },
];
const DrawerSide = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

      <ul className="menu p-4 w-80 bg-base-100">
        <h3 className="font-bold p-4 ">Kraina Dzieciństwa w Łupowie</h3>
        {menuItems.map((item) => (
          <motion.li
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={item.link}>
              <img src={item.icon} alt="" className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerSide;
