import AboutUs from "../Components/AboutUs";
import ContactSection from "../Components/ContactSection";
import DocumentsSection from "../Components/DocumentsSection";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import TeamSection from "../Components/TeamSection";
import ThridSection from "../Components/ThirdSection";
import DrawerMain from "../Components/navbar/DrawerMain";
import DrawerSide from "../Components/navbar/DrawerSide";

const Home = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <DrawerMain />
        <Hero />
        <DocumentsSection />
        <AboutUs />
        <TeamSection />
        <ThridSection />
        <ContactSection />
        <Footer />
      </div>
      <DrawerSide />
    </div>
  );
};
export default Home;
