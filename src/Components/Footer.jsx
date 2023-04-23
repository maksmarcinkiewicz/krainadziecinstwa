import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer container mx-auto p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Nasze przedszkole</span>
          <a className="link link-hover">O nas</a>
          <a className="link link-hover">Oferta</a>
          <a className="link link-hover">Kadra pedagogiczna</a>
          <a className="link link-hover">Galeria</a>
        </div>
        <div>
          <span className="footer-title">Dla rodziców</span>
          <a className="link link-hover">Jak zapisać dziecko</a>
          <a className="link link-hover">Cennik</a>
          <a className="link link-hover">Regulamin</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div>
          <span className="footer-title">Pozostałe informacje</span>
          <a className="link link-hover">Kontakt</a>

          <a className="link link-hover">Polityka prywatności</a>
          <Link to="/cookie">Polityka plików cookie</Link>
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
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
