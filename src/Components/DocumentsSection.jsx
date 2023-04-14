import React from "react";

const DocumentsSection = () => {
  const dokumenty = [
    {
      nazwa: "Plan zajęć",
      opis: "Dowiedz się, jakie zajęcia i aktywności są zaplanowane w naszym przedszkolu.",
      plik: "/pliki/plan-zajec.pdf",
      num: 1,
    },
    {
      nazwa: "Formularz zgłoszeniowy",
      opis: "Zgłoś swoje dziecko do naszego przedszkola, wypełniając ten formularz.",
      plik: "/pliki/formularz-zgloszeniowy.pdf",
      num: 2,
    },
    {
      nazwa: "Regulamin",
      opis: "Przeczytaj regulamin przedszkola, by być dobrze poinformowanym.",
      plik: "/pliki/regulamin.pdf",
      num: 3,
    },
    {
      nazwa: "Kalendarz roku szkolnego",
      opis: "Sprawdź, kiedy odbywają się zajęcia w naszym przedszkolu i kiedy są przerwy.",
      plik: "/pliki/kalendarz-roku-szkolnego.pdf",
      num: 4,
    },
  ];
  return (
    <section id="documents" className="bg-white py-12 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Dokumenty do pobrania</h2>
        <div className="carousel gap-8 md:gap-10 py-8">
          {dokumenty.map((dokument, index) => (
            <div
              id={dokument.num}
              key={index}
              className="p-4 bg-gray-100 rounded-xl carousel-item w-9/12 flex flex-col max-w-xs shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{dokument.nazwa}</h3>
              <p className="text-gray-600 text-justify">{dokument.opis}</p>
              <a
                href={dokument.plik}
                className="mt-4 btn btn-outline w-full shadow-md"
                download
              >
                Pobierz
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
