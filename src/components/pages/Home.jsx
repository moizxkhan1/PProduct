import Hero from "../Home/Hero.jsx";
import AboutSection from "../Home/AboutSection.jsx";
import Timeline from "../Home/Timeline.jsx";
import Testiomonial from "../Home/Testemonial.jsx";

const Home = () => {
  return (
    <div className="w-full pt-10">
      <div className="container">
        <Hero />
      </div>
      <Testiomonial />
      <AboutSection />
      <Timeline />
    </div>
  );
};

export default Home;
