const ContactComponent = () => {
  return (
    <section className="bg-white pt-12">
      <div className="mx-auto container p-4">
        <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
        <div className="flex flex-col">
          <div className="lg:flex lg:gap-20">
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
            <p className="text-lg text-justify">
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
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
