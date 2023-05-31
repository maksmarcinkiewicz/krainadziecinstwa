const CollapseComponents = () => {
  const collapseTexts = [
    {
      title: "Przedszkole, które wychodzi naprzeciw potrzebom rodziców",
      content:
        "Jesteśmy przedszkolem, które wychodzi naprzeciw potrzebom i oczekiwaniom współczesnych rodziców. Nasz program opiera się na holistycznym podejściu do edukacji, które uwzględnia potrzeby rozwojowe każdego dziecka i wspiera jego indywidualny rozwój.",
    },
    {
      title: "Tworzymy przyjazną atmosferę dla dzieci.",
      content:
        "Zapewniamy najwyższy poziom bezpieczeństwa i komfortu dla dzieci, tworząc przyjazną i inspirującą atmosferę. Nasz zespół składa się z wykwalifikowanych nauczycieli, którzy posiadają bogate doświadczenie w pracy z dziećmi w różnym wieku.",
    },
    {
      title: "Korzystamy z najnowszych narzędzi i metod nauczania",
      content:
        "Wspieramy rozwój kreatywności i wyobraźni, korzystając z najnowszych narzędzi i metod nauczania. Nasze zajęcia to nie tylko nauka, ale także zabawa i eksplorowanie świata w sposób atrakcyjny dla najmłodszych.",
    },
    {
      title: "Dołącz do nas - Zapewnij dziecku najlepszy rozwój!",
      content:
        "Dołącz do naszej przedszkolnej społeczności! Zapewniamy najlepsze warunki rozwoju dla Twojego dziecka. Nasz zespół nauczycieli stworzył program oparty na holistycznym podejściu, a nasza atmosfera to przyjazne i inspirujące środowisko. Dołącz do nas i zapewnij dziecku kreatywny rozwój!",
    },
  ];
  return (
    <div>
      {collapseTexts.map((collapseText, index) => (
        <div
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
  );
};
export default CollapseComponents;
