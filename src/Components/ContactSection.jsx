import React from "react";
import contactImg from "../assets/contactImg.png";
import emailIcon from "../assets/icons/at-sign.png";
import facebookIcon from "../assets/icons/facebook.png";
import phoneIcon from "../assets/icons/phoneIcon.png";
import mapIcon from "../assets/icons/map.png";

const contactData = [
  {
    img: contactImg,
    content: "krainadziecinstwa@gmail.com",
  },
  {
    img: phoneIcon,
    content: "+48 123 456 789",
  },
  {
    img: contactImg,
    content: "krainadziecinstwa@gmail.com",
  },
];

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
            <div className="flex flex-col  items-start">
              <div className="flex  items-center gap-2 mt-10">
                <img
                  src={emailIcon} // ścieżka do zdjęcia
                  alt="Zdjęcie kontaktowe"
                  className="w-12 h-12  object-cover"
                />
                <a
                  href="mailto:krainadziecinstwa@gmail.com"
                  className="text-lg "
                >
                  krainadziecinstwa@gmail.com
                </a>
              </div>
              <div className="flex  items-center gap-2 mt-10">
                <img
                  src={phoneIcon} // ścieżka do zdjęcia
                  alt="Zdjęcie kontaktowe"
                  className="w-12 h-12  object-cover"
                />
                <a href="tel:+48123456789" className="text-lg ">
                  +48 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <img
                  src={facebookIcon} // ścieżka do zdjęcia
                  alt="Zdjęcie kontaktowe"
                  className="w-12 h-12 object-cover"
                />
                <a href="" className="text-lg ">
                  Kraina Dziecinstwa w Lupowie
                </a>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <img
                  src={mapIcon} // ścieżka do zdjęcia
                  alt="Zdjęcie kontaktowe"
                  className="w-12 h-12 object-cover"
                />
                <a href="" className="text-lg ">
                  Lipowa 12, 66-450 Jenin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
