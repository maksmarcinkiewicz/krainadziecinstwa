import AboutUsHero from "../Components/AboutUsHero";
import img from "../assets/about-us-img.png";
import CollapseComponents from "../Components/CollapseComponent";
const AboutPage = () => {
  return (
    <section className="mx-auto container">
      <div className="">
        <AboutUsHero />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:pt-12 lg:flex-row-reverse">
        <img src={img} alt="" className="w-10/12 lg:w-4/12" />
        <div className="p-4">
          <CollapseComponents />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
