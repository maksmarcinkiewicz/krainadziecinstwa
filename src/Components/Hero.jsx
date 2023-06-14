import heroImg from "../assets/hero-img.avif";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto flex flex-col lg:flex-row-reverse items-center p-4 lg:p-0 lg:gap-12"
    >
      <motion.div className="lg:w-1/2">
        <img
          src={heroImg}
          alt="hero img"
          loading="lazy"
          className="mb-8 w-full h-full"
        />
      </motion.div>
      <div className="lg:w-1/2">
        <motion.div
          className="badge badge-outline mb-4 py-3 px-5 font-mono gap-2 hover:font-extrabold hover:text-sm"
          whileHover={{ scale: 1.1 }}
        >
          ⏳<span className="text-xs ">strona w przebudowie</span>
        </motion.div>
        <h1 className="font-title mb-4 lg:mb-8 text-2xl text-justify font-bold sm:text-5xl lg:text-4xl">
          Kraina Dzieciństwa - przedszkole pełne radości, zabawy i nauki!
        </h1>
        <p className="font-title text-justify text-lg sm:text-xl lg:text-xl">
          Witaj w Krainie Dzieciństwa - przedszkolu pełnym radości, zabawy i
          nauki! <br></br>Nasza doświadczona kadra pedagogiczna zapewnia
          dzieciom miłą atmosferę, rozwijając ich talenty poprzez kreatywne
          zajęcia. Zapraszamy do naszego przedszkola, gdzie dzieci stają się
          bohaterami swoich przygód!
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
