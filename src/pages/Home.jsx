import React from "react";
import HeroSection from "../components/Hero";
import ServiceCarousel from "../components/ServiceCarousel";
import ProgramCarousel from "../components/ProgramCarousel";
import CenterSlider from "../components/CenterSlider";
import WorkoutFormat from "../components/WorkoutFormat";
import SportsFormat from "../components/SportsFormat";
import PricingCards from "../components/PrisingCards";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCarousel />
      <ProgramCarousel />
      <CenterSlider/>
      <WorkoutFormat />
      <SportsFormat/>
      <PricingCards/>

    </>
  );
};

export default Home;
