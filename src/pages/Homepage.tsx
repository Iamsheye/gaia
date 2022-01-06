import CompanyHelp from "../components/CompanyHelp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import OurImpact from "../components/OurImpact";
import OurProjects from "../components/OurProjects";
import Testimonial from "../components/Testimonial";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanyHelp />
      <OurImpact />
      <OurProjects />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Homepage;
