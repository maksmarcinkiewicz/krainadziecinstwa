import AboutUsHero from "../Components/AboutUsHero";
import ContactSection from "../Components/ContactSection";
import DocumentsSection from "../Components/DocumentsSection";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import TeamSection from "../Components/TeamSection";
import ThridSection from "../Components/ThirdSection";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <DocumentsSection />
      <AboutUsHero />
      <TeamSection />
      <ThridSection />
      <ContactSection />
    </div>
  );
};
export default HomePage;
