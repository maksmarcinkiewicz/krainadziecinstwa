import contactImg from "../assets/contact-illustration.png";
import { motion } from "framer-motion";
const ContactComponent = () => {
  return (
    <section className="bg-white pt-12">
      <motion.div
        className="mx-auto container p-4 "
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
        <img
          src={contactImg}
          alt="building img contact"
          className="lg:hidden"
          loading="lazy"
        />
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:flex lg:gap-8">
            <p className="text-lg text-justify mb-8">
              Możesz odwiedzić nas pod adresem <b>Lipowa 12</b> w miejscowości{" "}
              <b>Jenin</b>. Jeśli wolisz porozmawiać, zadzwoń pod numer{" "}
              <a href="tel:+48579612082">
                <b className="underline">+48 579 612 082</b>
              </a>
              . Chętnie odpowiemy na Twoje pytania i udzielimy niezbędnych
              informacji.
            </p>
            <p className="text-lg text-justify  mb-8">
              Ważne jest dla nas, aby zapewnić Ci wygodę i możliwość kontaktu.
              Dlatego jesteśmy dostępni od <b>poniedziałku</b> do <b>piątku</b>,
              przez cały <b>tydzień roboczy</b>, w godzinach od <b>6:30</b> do
              <b> 16:30</b>.
            </p>
            <p className="text-lg text-justify pr-4">
              Skontaktuj się z nami drogą e-mailową:
              <b>
                {" "}
                <a
                  href="mailto:krainadziecinstwa.lupowo@gmail.com"
                  className="underline"
                >
                  krainadziecinstwa.lupowo@gmail.com
                </a>
              </b>
              . Odpowiemy tak szybko, jak to możliwe, aby zapewnić Ci wygodę i
              możliwość kontaktu.
            </p>
          </div>
          <img
            src={contactImg}
            alt="contact building img"
            className="lg:w-3/12 lg:pb-20 hidden lg:block"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactComponent;
