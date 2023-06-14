import docIcon from "../../assets/icons/nav-icons/documents-icon.png";
import aboutIcon from "../../assets/icons/nav-icons/about.png";
import eventIcon from "../../assets/icons/nav-icons/event.png";
import contactIcon from "../../assets/icons/nav-icons/contact-book.png";
import offerIcon from "../../assets/icons/nav-icons/offer.png";
import homeIcon from "../../assets/icons/nav-icons/home.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const menuItems = [
  { label: "Strona główna", icon: homeIcon, link: "/" },
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

      <ul className="menu p-4 w-80 bg-base-100 flex justify-between">
        <div>
          <p className="footer-title mb-4">Kraina Dzieciństwa w Łupowie</p>
          {menuItems.map((item) => (
            <motion.li
              key={item.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to={item.link} className="-mx-4">
                <img src={item.icon} alt="" className="w-6 h-6" />
                <span>{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </div>
        <div>
          <p className="footer-title mb-4">Social Media</p>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100049134353286"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              alt="facebook-icon"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </motion.a>
        </div>
      </ul>
    </div>
  );
};

export default DrawerSide;
