import AboutUsHero from "../Components/AboutUsHero";
import img from "../assets/about-us-img.png";
const AboutPage = () => {
  const aboutTexts = [
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
    <section className="mx-auto container">
      <div className="">
        <AboutUsHero />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:pt-12">
        <img src={img} alt="" className="w-10/12 lg:w-4/12" />
        <div className="p-4">
          {aboutTexts.map((aboutText, index) => (
            <div className="pb-8" key={index}>
              <h2 className="text-2xl font-bold mb-4">{aboutText.title}</h2>
              <p className="text-lg text-justify">{aboutText.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
