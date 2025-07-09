import React from "react";
import HeroSection from "../components/Hero";
import ServiceCarousel from "../components/ServiceCarousel";
import ProgramCarousel from "../components/ProgramCarousel";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCarousel />
      <ProgramCarousel />
    </>
  );
};

export default Home;
