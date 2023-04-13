import Lottie from "lottie-react";
import animationData from "../assets/lottie-main.json";

export const Hero = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="lg:w-1/2">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div className="lg:w-1/2">
          <div className="badge badge-outline mb-4 py-3 px-5 font-mono gap-2">
            ⏳
            <span className="text-xs font-extrabold">strona w przebudowie</span>{" "}
          </div>
          <h1 className="font-title mb-2 text-2xl text-justify font-bold sm:text-5xl lg:text-4xl">
            Kraina Dzieciństwa - przedszkole pełne radości, zabawy i nauki!
          </h1>
          <p className="font-title text-justify text-lg sm:text-xl lg:text-xl">
            Witaj w Krainie Dzieciństwa - przedszkolu pełnym radości, zabawy i
            nauki! Nasza doświadczona kadra pedagogiczna zapewnia dzieciom miłą
            atmosferę, rozwijając ich talenty poprzez kreatywne zajęcia.
            Zapraszamy do naszego przedszkola, gdzie dzieci stają się bohaterami
            swoich przygód!
          </p>
          <button className="btn btn-outline mt-5">Zapisz dziecko</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
