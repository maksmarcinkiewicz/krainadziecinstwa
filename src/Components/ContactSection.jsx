import React from "react";
import contactImg from "../assets/contact-img-enhance.png";
const ContactSection = () => {
  return (
    <section className="bg-white py-10">
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
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vitae ullamcorper metus, ut vulputate orci. Vestibulum nec quam et
              nisl vestibulum condimentum id nec lacus.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="imie" className="text-gray-600 block mb-1">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="imie"
                  name="imie"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Imię i nazwisko "
                />
              </div>
              <div>
                <label htmlFor="telefon" className="text-gray-600 block mb-1">
                  Numer telefonu kontaktowego
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Numer telefonu kontaktowego"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-600 block mb-1">
                  Adres e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Adres e-mail"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-outline w-full">
                  Zapisz dziecko
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
