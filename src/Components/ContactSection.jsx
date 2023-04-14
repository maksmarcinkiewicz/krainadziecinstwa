import React from "react";
import contactImg from "../assets/contact-img-enhance.png";
import emailIcon from "../assets/at-sign.png";
import facebookIcon from "../assets/facebook.png";
const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={contactImg} // ścieżka do zdjęcia
              alt="Zdjęcie kontaktowe"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 md:ml-10 rounded-md p-6 bg-gray-100 m-4 shadow-md">
            <h2 className="text-3xl font-bold mb-4">Skontaktuj się z nami</h2>
            <p className="text-gray-600 mb-6 text-justify">
              Aktualnie możesz się z nami skontaktować poprzez mail lub przez
              naszą stronę na Facebooku. Nasz zespół odpowie na Twoje pytania i
              pomoże w rozwiązywaniu wątpliwości.
            </p>
            <p className="text-gray-600 mb-6 text-justify">
              Jednakże, chcielibyśmy poinformować, że strona jest w fazie
              budowy, dlatego w przyszłości będziemy udostępniać również
              formularz kontaktowy, aby ułatwić komunikację z naszym
              przedszkolem. Dziękujemy za cierpliwość i zrozumienie w tej
              kwestii.
            </p>
            <div className="flex items-center gap-2 mt-10">
              <img
                src={emailIcon} // ścieżka do zdjęcia
                alt="Zdjęcie kontaktowe"
                className="w-12 h-12 md:w-24 md:h-24 object-cover"
              />
              <p className="text-lg lg:text-3xl font-bold font-mono">
                krainadziecinstwa@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2 mt-10">
              <img
                src={facebookIcon} // ścieżka do zdjęcia
                alt="Zdjęcie kontaktowe"
                className="w-12 h-12 lg:w-24 lg:h-24 object-cover"
              />
              <a
                className="text-lg lg:text-3xl font-bold font-mono hover:underline "
                href="https://www.facebook.com/profile.php?id=100049134353286"
              >
                Kraina Dzieciństwa w Łupowie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
