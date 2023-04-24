import React from "react";

const OpeningHours = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between py-12">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Godziny otwarcia</h2>
        <ul className="text-lg mb-4">
          <li>Poniedziałek - Piątek: 8:00 - 17:00</li>
          <li>Sobota - Niedziela: nieczynne</li>
        </ul>
        <p className="text-lg">
          Serdecznie zapraszamy do naszego przedszkola w każdy dzień roboczy w
          godzinach otwarcia.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/images/opening-hours.jpg"
          alt="Godziny otwarcia"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default OpeningHours;
