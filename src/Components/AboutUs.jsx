import icon1 from "../assets/icons/about-section/quality.png";
import icon2 from "../assets/icons/about-section/trust.png";
import icon3 from "../assets/icons/about-section/innovation.png";
import icon4 from "../assets/icons/about-section/individual.png";
import aboutImg from "../assets/about-img.jpg";
import rectangle from "../assets/reactangle.png";
import "../App.css";
const achievements = [
  {
    icon: icon1,
    text: "3 lata doświadczenia w pracy z dziećmi zapewniają najwyższą jakość opieki i edukacji.",
  },
  {
    icon: icon2,
    text: "Zaufanie wielu rodziców świadczy o skutecznej pracy i pozytywnych efektach dla dzieci.",
  },
  {
    icon: icon3,
    text: "Innowacyjne podejście rozwija kreatywność i ciekawość świata dzieci.",
  },
  {
    icon: icon4,
    text: "Indywidualne podejście dostosowuje edukację do potrzeb i umiejętności dziecka.",
  },
];

const AboutUs = () => {
  return (
    <section className="py-10 lg:py-20 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 lg:pr-10">
          <div className="relative ">
            <div className="">
              <img
                src={rectangle}
                alt=""
                className="absolute top-36 -right-12 w-60 h-60 rectangle-about -z-10"
              />
            </div>

            <div className="">
              <img
                src={aboutImg}
                className="rounded-l-full rounded-br-full about-img"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
            O nas
          </h2>

          <p className="text-lg lg:text-xl mt-6 text-gray-600 text-justify">
            Nasze przedszkole to miejsce, w którym każde dziecko czuje się
            bezpiecznie i swobodnie rozwija swoją kreatywność oraz umiejętności
            społeczne. W oparciu o innowacyjne podejście do edukacji i z
            wykorzystaniem nowoczesnych narzędzi, nasz doświadczony zespół
            nauczycieli stworzy dla Twojego dziecka najlepsze warunki do
            rozwoju.
          </p>
          <div className=" mt-10 gap-4 carousel">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="carousel-item w-8/12 border border-slate-100 md:w-1/2 lg:w-1/5 flex flex-col items-start gap-4 justify-center mb-6 shadow-md p-4 rounded-md"
              >
                <img src={achievement.icon} alt="" className="h-12 mt-2" />
                <p className="text-gray-600">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
