import React from "react";
import HeroSection from "../components/Hero";
import ServiceCarousel from "../components/ServiceCarousel";
import ProgramCarousel from "../components/ProgramCarousel";
import CenterSlider from "../components/CenterSlider";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCarousel />
      <ProgramCarousel />
      <CenterSlider/>
    </>
  );
};

export default Home;
