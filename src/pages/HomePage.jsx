import Navbar from "../components/navbar/Navbar";
import HeroImage from "../components/homepage/HeroImage";
import MiddleBanner from "../components/homepage/MiddleBanner";
import Events from "../components/homepage/Events";
import Footer from "../components/homepage/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <MiddleBanner />
      <Events />
      <Footer />
    </div>
  );
};

export default HomePage;
