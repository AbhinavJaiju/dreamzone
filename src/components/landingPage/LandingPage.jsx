import Footer from "../homepage/Footer";
import HeroBanner from "./HeroBanner";
import LandingContactUs from "./LandingContactUs";
import LandingEvents from "./LandingEvents";
import LandingNavbar from "./LandingNavbar";
import SecondBanner from "./SecondBanner";

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <HeroBanner />
      <SecondBanner />
      <LandingEvents />
      <LandingContactUs/>
      <Footer />
    </div>
  );
};

export default LandingPage;
