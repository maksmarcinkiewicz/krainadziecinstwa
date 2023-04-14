import React from "react";
import foodIcon from "../assets/food-icon.png";
import safetyIcon from "../assets/safety-icon.png";
import experienceIcon from "../assets/experience-icon.png";
import teachingIcon from "../assets/teaching-icon.png";

const ThridSection = () => {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap ">
          <div className="w-full mt-8 md:mt-0">
            <div className=" mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Zalety naszego przedszkola
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <li className="text-gray-700 flex items-center gap-12 shadow-md p-4 rounded-xl">
                  <p className="text-justify flex-grow ">
                    <b>Wyszkolony</b> zespół nauczycieli z <b>bogatym </b>
                    doświadczeniem w pracy z najmłodszymi.
                  </p>
                  <img
                    src={experienceIcon}
                    alt="Food Icon"
                    className="w-16 h-16 "
                  />
                </li>
                <li className="text-gray-700 text-justify flex items-center gap-12 shadow-md p-4 rounded-xl">
                  <p className="text-justify flex-grow ">
                    <b>Bezpieczne</b> i przyjazne <b>otoczenie</b>, które
                    sprzyja rozwijaniu kreatywności i samodzielności.
                  </p>
                  <img src={safetyIcon} alt="Food Icon" className="w-16 h-16" />
                </li>
                <li className="text-gray-700 text-justify flex items-center gap-12 shadow-md p-4 rounded-xl">
                  <p className="text-justify flex-grow ">
                    <b>Nowoczesne</b> metody nauczania, odpowiednie dla wieku i
                    umiejętności dzieci.
                  </p>
                  <img
                    src={teachingIcon}
                    alt="Food Icon"
                    className="w-16 h-16 "
                  />
                </li>
                <li className="text-gray-700 text-justify flex items-center gap-12 shadow-md p-4 rounded-xl">
                  <p className="text-justify flex-grow ">
                    <b>Zdrowe</b> i smaczne posiłki przygotowywane z{" "}
                    <b>dbałością</b> o odpowiednią dietę.
                  </p>
                  <img src={foodIcon} alt="Food Icon" className="w-16 h-16 " />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThridSection;
