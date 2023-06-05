import img from "../assets/about-us-img.png";
import aboutImg from "../assets/about-us-illustration.png";
import joinImg from "../assets/join-us-illustration.png";
import atmoImg from "../assets/atmosphere-illustration.png";

const CollapseComponents = () => {
  const collapseTexts = [
    {
      title: "Przedszkole, które wychodzi naprzeciw potrzebom rodziców",
      content:
        "Jesteśmy przedszkolem, które wychodzi naprzeciw potrzebom i oczekiwaniom współczesnych rodziców. Nasz program opiera się na holistycznym podejściu do edukacji, które uwzględnia potrzeby rozwojowe każdego dziecka i wspiera jego indywidualny rozwój.",
      img: aboutImg,
    },
    {
      title: "Tworzymy przyjazną atmosferę dla dzieci.",
      content:
        "Zapewniamy najwyższy poziom bezpieczeństwa i komfortu dla dzieci, tworząc przyjazną i inspirującą atmosferę. Nasz zespół składa się z wykwalifikowanych nauczycieli, którzy posiadają bogate doświadczenie w pracy z dziećmi w różnym wieku.",
      img: atmoImg,
    },
    {
      title: "Korzystamy z najnowszych narzędzi i metod nauczania",
      content:
        "Wspieramy rozwój kreatywności i wyobraźni, korzystając z najnowszych narzędzi i metod nauczania. Nasze zajęcia to nie tylko nauka, ale także zabawa i eksplorowanie świata w sposób atrakcyjny dla najmłodszych.",
      img: img,
    },
    {
      title: "Dołącz do nas - Zapewnij dziecku najlepszy rozwój!",
      content:
        "Dołącz do naszej przedszkolnej społeczności! Zapewniamy najlepsze warunki rozwoju dla Twojego dziecka. Nasz zespół nauczycieli stworzył program oparty na holistycznym podejściu, a nasza atmosfera to przyjazne i inspirujące środowisko. Dołącz do nas i zapewnij dziecku kreatywny rozwój!",
      img: joinImg,
    },
  ];
  return (
    <div>
      {collapseTexts.map((collapseText, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-between ${
            index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="">
            <h2 className="lg:text-4xl font-medium md:pb-4">
              {collapseText.title}
            </h2>
            <p className="text-justify lg:text-xl">{collapseText.content}</p>
          </div>
          <img src={collapseText.img} alt="" className="w-10/12 lg:w-5/12" />
        </div>
      ))}
    </div>
  );
};
export default CollapseComponents;
