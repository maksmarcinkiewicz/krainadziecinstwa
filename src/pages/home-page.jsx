import AboutUsHero from "../Components/AboutUsHero";
import ContactSection from "../Components/ContactSection";
import DocumentsSection from "../Components/DocumentsSection";
import Hero from "../Components/Hero";
import OpeningHours from "../Components/OpeningHours";
import TeamSection from "../Components/TeamSection";
import ThridSection from "../Components/ThirdSection";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <DocumentsSection />
      <AboutUsHero />
      <TeamSection />
      {/* <OpeningHours /> */}
      <ThridSection />
      <ContactSection />
    </div>
  );
};
export default HomePage;
