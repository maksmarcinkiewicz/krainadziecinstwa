import React from "react";
import foodIcon from "../assets/icons/food-icon.png";
import safetyIcon from "../assets/icons/safety-icon.png";
import experienceIcon from "../assets/icons/experience-icon.png";
import teachingIcon from "../assets/icons/teaching-icon.png";
import { motion } from "framer-motion";
const benefits = [
  {
    img: experienceIcon,
    title: "Doświadczenie",
    content:
      "Nasz zespół nauczycieli zapewni najlepszą opiekę i edukację dla Twojego dziecka.",
  },
  {
    img: safetyIcon,
    title: "Bezpieczeństwo",
    content:
      "Bezpieczne i przyjazne otoczenie, które sprzyja rozwijaniu kreatywności i samodzielności.",
  },
  {
    img: teachingIcon,
    title: "Nowoczesne nauczanie",
    content:
      "Nowoczesne metody nauczania, odpowiednie dla wieku i umiejętności dzieci.",
  },
  {
    img: foodIcon,
    title: "Świadome żywienie",
    content:
      "Zdrowe i smaczne posiłki przygotowywane z dbałością o odpowiednią dietę.",
  },
];

const ThridSection = () => {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap ">
          <div className="w-full mt-8 md:mt-0">
            <div className=" mx-auto">
              <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    className="text-gray-700 flex flex-col gap-2  p-4 rounded-xl shadow-md bg-white"
                    key={index}
                    whileHover={{ y: -40 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={benefit.img}
                      alt="Food Icon"
                      className="w-16 h-16 ml-4"
                    />

                    <div className="p-4 rounded-md">
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                      <p className="text-justify text-gray-500 lg:mt-2">
                        {benefit.content}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThridSection;
