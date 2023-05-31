import React from "react";
import contactImg from "../assets/kindergarten-building.png";
import emailIcon from "../assets/icons/at-sign.png";
import facebookIcon from "../assets/icons/facebook.png";
import phoneIcon from "../assets/icons/phoneIcon.png";
import mapIcon from "../assets/icons/map.png";
import ContactForm from "./ContactForm";

import { motion } from "framer-motion";

const contactData = [
  {
    img: contactImg,
    content: "krainadziecinstwa@gmail.com",
  },
  {
    img: phoneIcon,
    content: "+48 604 508 692",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={contactImg} // ścieżka do zdjęcia
            alt="Zdjęcie kontaktowe"
            className="w-10/12 h-10/12 object-cover"
          />
        </div>
        <div className="md:w-1/2 md:ml-10 rounded-md p-6 bg-gray-100 m-4 shadow-md">
          <h2 className="text-3xl font-bold mb-4">Skontaktuj się z nami</h2>

          <div className="flex flex-col  ">
            <div className="flex justify-between py-8">
              <a href="mailto:krainadziecinstwa@gmail.com">
                <motion.img
                  src={emailIcon} // ścieżka do zdjęcia
                  alt="Zdjęcie kontaktowe"
                  className="w-16 h-16  object-cover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>

              <a href="tel:+48604508692">
                <motion.img
                  src={phoneIcon} // ścieżka do zdjęcia
                  alt="Zdjęcie kontaktowe"
                  className="w-16 h-16  object-cover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100049134353286"
                target="_blank"
              >
                <motion.img
                  src={facebookIcon} // ścieżka do zdjęcia
                  alt="Zdjęcie kontaktowe"
                  className="w-16 h-16 object-cover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
              <a href="https://goo.gl/maps/n7ZcsmDaQxaynfbSA" target="_blank">
                <motion.img
                  src={mapIcon} // ścieżka do zdjęcia
                  alt="Zdjęcie kontaktowe"
                  className="w-16 h-16 object-cover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
