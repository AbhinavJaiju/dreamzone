import Footer from "../components/homepage/Footer";
import HeroBanner from "../components/landingPage/HeroBanner";
import LandingContactUs from "../components/landingPage/LandingContactUs";
import LandingEQ from "../components/landingPage/LandingEQ";
import LandingEvents from "../components/landingPage/LandingEvents";
import LandingNavbar from "../components/landingPage/LandingNavbar";
import LandingWA from "../components/landingPage/LandingWA";
import SecondBanner from "../components/landingPage/SecondBanner";

const LandingPage = () => {
  return (
    <div>
      <LandingWA />
      <LandingEQ />
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
