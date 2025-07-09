// src/sections/ServiceCarousel.jsx
import React, { useState } from "react";
import ServiceCard from "../components/ui/ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    title: "Play Sports",
    image: "/images/play-sports.jpg",
  },
  {
    title: "Gyms",
    image: "/images/gyms.jpg",
  },
  {
    title: "Live Workouts",
    image: "/images/live-workouts.jpg",
  },
];

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#010a04] to-[#07160b] text-white text-center font-lufga">
     <h2 className="text-4xl font-bold mb-12">
  Service{" "}
  <span className="italic relative inline-block px-1">
    <span className="relative z-10 px-3 py-1">Category</span>
    <span
      className="absolute inset-0 -inset-y-1 border border-green-500 -skew-x-6 z-0 "
      aria-hidden="true"
    ></span>
  </span>
</h2>




      <motion.div
        className="flex justify-center gap-8 items-center flex-wrap px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`transition-transform duration-500 ${
              index === activeIndex ? "scale-110 z-10" : "opacity-60"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <ServiceCard title={service.title} image={service.image} />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Dots */}
     {/* Pagination Dots */}
<div className="flex justify-center mt-10 gap-2">
  {services.map((_, index) => (
    <span
      key={index}
      className={`h-2 rounded-full transition-all duration-300 ${
        index === activeIndex
          ? "w-6 bg-green-400"
          : "w-2 bg-white/30"
      }`}
    ></span>
  ))}
</div>

    </section>
  );
};

export default ServiceCarousel;
