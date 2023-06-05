import AboutUsHero from "../Components/AboutUsHero";

import CollapseComponents from "../Components/CollapseComponent";
const AboutPage = () => {
  return (
    <section className="mx-auto container">
      <div className="">
        <AboutUsHero />
      </div>

      <div className="p-4">
        <CollapseComponents />
      </div>
    </section>
  );
};

export default AboutPage;
