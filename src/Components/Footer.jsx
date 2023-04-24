import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  // definicja tablicy linków
  const links = [
    { label: "O nas", to: "/o-nas" },
    { label: "Oferta", to: "/oferta" },
    { label: "Jak zapisać dziecko", to: "/jak-zapisac-dziecko" },
    { label: "Cennik", to: "/cennik" },
    { label: "Regulamin", to: "/regulamin" },
    { label: "Kontakt", to: "/kontakt" },
    { label: "Polityka prywatności", to: "/polityka-prywatnosci" },
    { label: "Polityka plików cookie", to: "/cookie" },
  ];

  return (
    <div className="bg-base-200">
      <footer className="footer container mx-auto p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Nasze przedszkole</span>
          {/* mapowanie linków */}
          {links.slice(0, 2).map((link) => (
            <Link key={link.to} to={link.to} className="link link-hover">
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Dla rodziców</span>
          {/* mapowanie linków */}
          {links.slice(2, 5).map((link) => (
            <Link key={link.to} to={link.to} className="link link-hover">
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Pozostałe informacje</span>
          {/* mapowanie linków */}
          {links.slice(5, 8).map((link) => (
            <Link key={link.to} to={link.to} className="link link-hover">
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
      <footer className="footer container mx-auto px-10 py-4 bg-base-200 text-base-content ">
        <div className="items-center  grid-flow-col">
          <p>
            <span className="text-lg font-bold">
              Kraina Dzieciństwa w Łupowie
            </span>
            <br />
            Od 2019 roku zapewniamy wspaniałą przygodę edukacyjną w naszym
            przedszkolu - dołącz do naszej społeczności!
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
