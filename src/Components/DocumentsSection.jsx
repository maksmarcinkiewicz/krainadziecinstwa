import React from "react";

import ewaluacjaPDF from "../assets/documents/kindergarten/ewaluacja-krainadziecinstwa.pdf";
import statutPDF from "../assets/documents/kindergarten/statut-krainadziecinstwa.pdf";
import umowaPDF from "../assets/documents/kindergarten/umowa-krainadziecinstwa.pdf";
import upowaznieniePDF from "../assets/documents/kindergarten/upowaznienie-krainadziecinstwa.pdf";
import wniosekPDF from "../assets/documents/kindergarten/wniosek-krainadziecinstwa.pdf";
import wypadekPDF from "../assets/documents/kindergarten/wypadek-krainadziecinstwa.pdf";
import zgodaPDF from "../assets/documents/kindergarten/zgoda-krainadziecinstwa.pdf";

import wniosekKlubik from "../assets/documents/club/wniosek-klubik.pdf";
import statutKlubik from "../assets/documents/club/statut-klubik.pdf";
import umowaKlubik from "../assets/documents/club/umowa-klubik.pdf";
import rozkladDniaKlubik from "../assets/documents/club/rozklad-dnia-klubik.pdf";
import { useState } from "react";
import { motion } from "framer-motion";
import CategoryTabs from "./CategoryTabs";

const documents = [
  {
    nazwa: "Ewaluacja",
    opis: "Dokument zawierający ocenę postępów dziecka w przedszkolu w różnych obszarach rozwoju.",
    plik: ewaluacjaPDF,
    category: "przedszkole",
    num: 1,
  },
  {
    nazwa: "Statut",
    opis: "Regulamin przedszkola, określający zasady organizacji pracy, obowiązki i prawa dzieci, rodziców i pracowników.",
    plik: statutPDF,
    category: "przedszkole",
    num: 2,
  },
  {
    nazwa: "Umowa",
    opis: "Umowa pomiędzy rodzicami a przedszkolem, określająca warunki uczestnictwa dziecka w życiu przedszkola.",
    plik: umowaPDF,
    category: "przedszkole",
    num: 3,
  },
  {
    nazwa: "Upowaznienie",
    opis: "Upoważnienie do odbioru dziecka z przedszkola, wymagające podpisu rodziców.",
    plik: upowaznieniePDF,
    category: "przedszkole",
    num: 4,
  },
  {
    nazwa: "Wniosek",
    opis: "Oficjalne podanie rodziców o przyjęcie dziecka do przedszkola.",
    plik: wniosekPDF,
    category: "przedszkole",
    num: 5,
  },
  {
    nazwa: "Wypadek",
    opis: "Dokumentacja dotycząca wypadków i incydentów w przedszkolu.",
    plik: wypadekPDF,
    category: "przedszkole",
    num: 6,
  },
  {
    nazwa: "Zgoda",
    opis: "Zgoda rodziców na udział dziecka w wydarzeniach organizowanych przez przedszkole.",
    plik: zgodaPDF,
    category: "przedszkole",
    num: 7,
  },
  {
    nazwa: "Wniosek",
    opis: "Oficjalne podanie rodziców o przyjęcie dziecka do klubiku dziecięcego.",
    plik: wniosekKlubik,
    category: "klubik",
    num: 8,
  },
  {
    nazwa: "Statut",
    opis: "Regulamin klubiku dziecięcego, określający zasady organizacji pracy, obowiązki i prawa dzieci, rodziców i pracowników.",
    plik: statutKlubik,
    category: "klubik",
    num: 9,
  },
  {
    nazwa: "Umowa",
    opis: "Umowa pomiędzy rodzicami a klubikiem dziecięcym, określająca warunki uczestnictwa dziecka w życiu klubiku.",
    plik: umowaKlubik,
    category: "klubik",
    num: 10,
  },
  {
    nazwa: "Rozklad dnia",
    opis: "Harmonogram zajęć w klubiku dziecięcym, zawierający informacje o godzinach rozpoczęcia i zakończenia poszczególnych zajęć.",
    plik: rozkladDniaKlubik,
    category: "klubik",
    num: 11,
  },
];
let categories = [
  { id: "przedszkole", label: "Przedszkole" },
  { id: "klubik", label: "Klubik" },
];
const DocumentsSection = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [selectedCategory, setSelectedCategory] = useState("przedszkole");
  let [activeCategory, setActiveCategory] = useState(categories[0].id);
  const filteredDocuments = documents.filter(
    (document) => document.category === selectedCategory
  );

  return (
    <section id="documents" className="bg-white py-12 p-4 ">
      <div className="container mx-auto ">
        <CategoryTabs setSelectedCategory={setSelectedCategory} />

        <div className="relative w-full flex snap-x snap-mandatory overflow-x-auto pb-10  gap-6 py-8 lg:grid lg:grid-cols-4 lg:snap-none ">
          {filteredDocuments.map((document, index) => (
            <div
              id={document.num}
              key={index}
              className="p-4 bg-gray-100 rounded-xl snap-start scroll-ml-4 shrink-0 w-9/12 lg:w-full flex flex-col max-w-xs shadow-md "
            >
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-semibold mb-4">{document.nazwa}</h3>
                <p className="text-sm text-gray-500">{document.category}</p>
              </div>
              <p className="text-gray-600 text-justify">{document.opis}</p>

              <motion.a
                href={document.plik}
                className="mt-4 btn btn-outline w-full shadow-md"
                download
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Pobierz
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
