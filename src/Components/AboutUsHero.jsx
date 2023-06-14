import icon1 from "../assets/icons/about-section/quality.png";
import icon2 from "../assets/icons/about-section/trust.png";
import icon3 from "../assets/icons/about-section/innovation.png";
import icon4 from "../assets/icons/about-section/individual.png";
import aboutImg from "../assets/about-img.avif";
import rectangle from "../assets/reactangle.avif";
import { motion } from "framer-motion";
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
];

const AboutUsHero = () => {
  return (
    <motion.div
      className="container mx-auto flex flex-col lg:flex-row items-center justify-center p-4 overflow-x-hidden md:overflow-auto lg:pt-16"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full lg:w-1/2 lg:pr-10">
        <div className="relative">
          <div className="">
            <img
              src={rectangle}
              alt="rectangle object"
              className="absolute top-32 -right-10 md:-top-20 lg:-right-32 md:-right-24 w-60 h-60 lg:w-80 lg:h-80  rectangle-about -z-10"
            />
          </div>

          <div className="">
            <img
              src={aboutImg}
              className="w-full h-full rounded-l-full rounded-br-full about-img"
              alt="about hero image"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">O nas</h2>

        <p className="text-lg lg:text-xl mt-6 text-gray-600 text-justify">
          Nasze przedszkole to miejsce, w którym każde dziecko czuje się
          bezpiecznie i swobodnie rozwija swoją kreatywność oraz umiejętności
          społeczne. W oparciu o innowacyjne podejście do edukacji i z
          wykorzystaniem nowoczesnych narzędzi, nasz doświadczony zespół
          nauczycieli stworzy dla Twojego dziecka najlepsze warunki do rozwoju.
        </p>
        <div className="pt-10 gap-4 relative w-full flex snap-x snap-mandatory overflow-x-auto pb-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="z-50 snap-start scroll-ml-4 shrink-0 lg:shrink  w-8/12 border border-slate-100 md:w-1/2 lg:w-4/12 flex flex-col items-start gap-4 justify-start mb-6 shadow-md p-4 rounded-md bg-white"
              whileHover={{ y: -25 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={achievement.icon}
                alt="about icon"
                className="w-12 h-12 mt-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <p className="text-gray-600">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default AboutUsHero;
