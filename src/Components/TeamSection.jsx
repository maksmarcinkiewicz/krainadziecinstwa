import React from "react";
import teamMember1 from "../assets/member-1.avif";
import teamMember2 from "../assets/member-2.avif";
import teamMember3 from "../assets/member-3.avif";
import teamMember4 from "../assets/member-4.avif";
import teamMember5 from "../assets/member-5.avif";
import { motion } from "framer-motion";
const teamMembers = [
  {
    id: 1,
    name: "Justyna Sorbian",
    position: "Nauczycielka przedszkolna",
    image: teamMember1,
  },
  {
    id: 2,
    name: "Ewa Borowska",
    position: "Nauczycielka przedszkolna",
    image: teamMember4,
  },
  {
    id: 3,
    name: "Magda Świderska",
    position: "Opiekunka dziecięca",
    image: teamMember3,
  },
  {
    id: 4,
    name: "Małgorzata Doruch",
    position: "Opiekunka dziecięca",
    image: teamMember5,
  },
  {
    id: 5,
    name: "Honorata Dworak",
    position: "Pomoc nauczycielki",
    image: teamMember2,
  },

  // Add more team members to the array as needed
];

const TeamSection = () => {
  return (
    <section className="bg-gray-100 p-4 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start  gap-12 ">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Nasi nauczyciele sprawiają, że jesteśmy wspaniali!
          </h2>
          <p className="text-gray-700 text-lg mb-4 text-justify">
            Nasi nauczyciele są zawsze gotowi do tworzenia inspirującego
            środowiska, które stymuluje rozwijanie kreatywności, ciekawości i
            umiejętności poznawczych u naszych przedszkolaków.
          </p>
          <p className="text-gray-700 text-lg mb-4 text-justify">
            Dzięki zaangażowaniu i profesjonalizmowi naszego zespołu, młode
            umysły mają możliwość rozwijania swojego potencjału i kwitnąć w
            przyjaznej, wszechstronnej i rozwijającej atmosferze.
          </p>
          <p className="text-gray-700 text-lg text-justify">
            Nasza miłość do nauczania i troska o każde dziecko sprawiają, że
            nasze przedszkole jest miejscem, w którym dzieci są wspierane, a ich
            rozwój jest priorytetem.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {teamMembers.map((teamMember) => (
            <motion.div
              key={teamMember.id}
              className="relative"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={teamMember.image}
                alt={`Team Member ${teamMember.id}`}
                className="w-64 h-full object-cover rounded-xl shadow-md brightness-75 "
              />
              <div className="absolute bottom-0 left-0 right-0 p-4  ">
                <p className="text-white text-center text-sm font-extrabold">
                  {teamMember.name}
                </p>
                <p className="text-white text-center text-sm ">
                  {teamMember.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
