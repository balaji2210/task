import Details from "components/details/Details";
import DetailsWrapper from "components/detailsWrapper/DetailsWrapper";
import Features from "components/features/Features";
import Footer from "components/footer/Footer";
import HeroSection from "components/heroSection/HeroSection";
import Logos from "components/logos/Logos";
import NavBar from "components/navBar/NavBar";
import Subscribe from "components/subscribe/Subscribe";
import TitleText from "components/titleText/TitleText";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <TitleText />
      <DetailsWrapper />

      <Details />
      <Logos />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
