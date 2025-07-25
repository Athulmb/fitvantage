import React from "react";
import HeroSection from "../components/Hero";
import ServiceCarousel from "../components/ServiceCarousel";
import ProgramCarousel from "../components/ProgramCarousel";
import CenterSlider from "../components/CenterSlider";
import WorkoutFormat from "../components/WorkoutFormat";
import SportsFormat from "../components/SportsFormat";
import PricingCards from "../components/PrisingCards";
import FitvantagePass from "../components/pass";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCarousel />
      <ProgramCarousel />
      <FitvantagePass />
      <CenterSlider/>
      <WorkoutFormat />
      <SportsFormat/>
      <ReviewSection/>
      <PricingCards/>

    </>
  );
};

export default Home;
