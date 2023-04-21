import logo from "../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-100 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#documents">
          Dokumenty
        </a>
        <a className="link link-hover" href="#contact">
          Kontakt
        </a>
      </div>

      <div>
        <p>Copyright © 2023 - Wszelkie prawa zastrzeżone</p>
      </div>
    </footer>
  );
};

export default Footer;
