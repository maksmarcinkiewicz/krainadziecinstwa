import React from "react";
import { FaPencilAlt, FaPaintBrush, FaBook } from "react-icons/fa";

const Offer = () => {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Nasza oferta</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center">
            <FaPencilAlt className="text-5xl lg:text-6xl text-green-500 mr-8" />
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">
                Rozwój kreatywności
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Poprzez rysowanie, malowanie i inne zajęcia plastyczne,
                rozwijamy wyobraźnię dzieci i kreatywność.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPaintBrush className="text-5xl lg:text-6xl text-green-500 mr-8" />
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">
                Zajęcia artystyczne
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Dzieci uczestniczą w warsztatach teatralnych, tanecznych oraz
                muzycznych, rozwijając swoje zdolności artystyczne.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaBook className="text-5xl lg:text-6xl text-green-500 mr-8" />
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">
                Nauka i zabawa
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Zapewniamy dzieciom rozwijające zajęcia edukacyjne oraz wiele
                zabaw, które integrują i uczą współpracy z rówieśnikami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
