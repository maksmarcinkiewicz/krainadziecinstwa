import React from "react";

const ThridSection = () => {
  return (
    <section className="bg-gray-100  p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Zalety naszego przedszkola
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="text-gray-700 carousel-item w-full text-justify">
                  Wyszkolony zespół nauczycieli z bogatym doświadczeniem w pracy
                  z najmłodszymi.
                </li>
                <li className="text-gray-700 carousel-item w-full text-justify">
                  Bezpieczne i przyjazne otoczenie, które sprzyja rozwijaniu
                  kreatywności i samodzielności.
                </li>
                <li className="text-gray-700 carousel-item w-full text-justify">
                  Nowoczesne metody nauczania, odpowiednie dla wieku i
                  umiejętności dzieci.
                </li>
                <li className="text-gray-700 carousel-item w-full text-justify">
                  Zdrowe i smaczne posiłki przygotowywane z dbałością o
                  odpowiednią dietę.
                </li>
                <li className="text-gray-700 carousel-item w-full text-justify">
                  Możliwość rozwoju społecznego i emocjonalnego dziecka poprzez
                  interakcje z rówieśnikami.
                </li>
                <li className="text-gray-700 carousel-item w-full text-justify">
                  Indywidualne podejście do każdego dziecka, uwzględniające jego
                  potrzeby i zainteresowania.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThridSection;
