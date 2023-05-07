const ContactComponent = () => {
  const collapseTexts = [
    {
      title: "Współpraca z rodzicami",
      content:
        "Partnerstwo z rodzicami to dla nas kluczowe. Regularnie spotykamy się z nimi, omawiamy postępy dziecka i słuchamy uwag i sugestii. Dzięki temu lepiej dostosowujemy nasze zajęcia do potrzeb każdego dziecka.",
    },
    {
      title: "Rozwój dzieci",
      content:
        "W naszym przedszkolu stawiamy na rozwój dzieci we wszystkich sferach życia. Program zajęć rozwija kreatywność, zdolności manualne, sprawność fizyczną oraz umiejętności społeczne i emocjonalne. Indywidualne podejście do każdego dziecka pomaga mu w osiąganiu sukcesów.",
    },
    {
      title: "Zdrowa dieta",
      content:
        "Wiedząc, jak ważna jest zdrowa dieta dla rozwoju dzieci, oferujemy w naszym przedszkolu posiłki przygotowywane na miejscu z naturalnych i świeżych składników. Dbamy o ich zróżnicowanie, smak i odpowiednie wartości odżywcze. Wspieramy też zdrowe nawyki żywieniowe dzieci, by pomóc im w utrzymaniu zdrowia i dobrego samopoczucia.",
    },
    {
      title: "Bezpieczeństwo dzieci",
      content:
        "W naszym przedszkolu priorytetem jest bezpieczeństwo dzieci. Posiadamy niezbędne zabezpieczenia, takie jak alarmy przeciwpożarowe i systemy monitoringu. Nasi nauczyciele są przeszkoleni w udzielaniu pierwszej pomocy, co pozwala nam szybko reagować na ewentualne wypadki.",
    },
  ];
  return (
    <section className="bg-white py-12">
      <div className="mx-auto container p-4">
        <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
        <p className="text-lg text-justify mb-8">
          Zapraszamy do kontaktu z naszym przedszkolem! Jesteśmy gotowi
          odpowiedzieć na wszystkie Państwa pytania i wątpliwości. Nasz zespół
          pracowników zawsze służy pomocą i chętnie udzieli wszelkich
          informacji.
        </p>
        {collapseTexts.map((collapseText, index) => (
          <div
            tabIndex={0}
            className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-md mb-2`}
            key={index}
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {collapseText.title}
            </div>
            <div className="collapse-content">
              <p className="text-justify">{collapseText.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactComponent;
