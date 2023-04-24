import React from "react";
import { FaPencilAlt, FaPaintBrush, FaBook } from "react-icons/fa";

const OfferPage = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Oferta</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">
            Jak zapisać dziecko do przedszkola?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aby zapisać dziecko do naszego przedszkola, należy wypełnić
            formularz zgłoszeniowy, który znajduje się na naszej stronie
            internetowej lub osobiście w naszym przedszkolu.
          </p>
          <a href="#" className="text-blue-500 font-bold hover:underline">
            Więcej informacji
          </a>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Cennik przedszkola</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Opłata za pobyt dziecka w naszym przedszkolu wynosi XXX zł za
            miesiąc. W cenę wliczone są wszystkie posiłki oraz opieka
            pedagogiczna i pielęgniarska.
          </p>
          <a href="#" className="text-blue-500 font-bold hover:underline">
            Więcej informacji
          </a>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">
          Dlaczego warto wybrać nasze przedszkole?
        </h3>
        <ul className="list-disc list-inside">
          <li className="text-gray-700 leading-relaxed mb-2">
            Nasze przedszkole to miejsce, gdzie dziecko może rozwijać swoje
            zainteresowania i talenty w przyjaznej atmosferze.
          </li>
          <li className="text-gray-700 leading-relaxed mb-2">
            W naszym przedszkolu zawsze panuje ciepła i przyjazna atmosfera, a
            nasi pedagodzy są doświadczonymi specjalistami w swojej dziedzinie.
          </li>
          <li className="text-gray-700 leading-relaxed mb-2">
            Dbamy o bezpieczeństwo dzieci i zapewniamy im opiekę pielęgniarską
            oraz zdrowe posiłki.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OfferPage;
