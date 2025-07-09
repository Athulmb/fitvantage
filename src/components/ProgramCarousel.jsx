import React, { useState } from "react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Massive Upper body",
    subtitle: "7 Week . 5x/week",
    gradient: "from-blue-700 to-purple-800",
  },
  {
    title: "Massive Upper body",
    subtitle: "7 Week . 5x/week",
    gradient: "from-green-600 to-lime-500",
  },
  {
    title: "Massive Upper body",
    subtitle: "7 Week . 5x/week",
    gradient: "from-pink-600 to-red-500",
  },
];

const ProgramCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-[#0D1310] text-white py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        Our{" "}
        <span className="italic relative inline-block">
          <span className="relative z-10">Programs</span>
          <span className="absolute inset-0 border border-green-500 -skew-x-6 z-0 rounded-sm"></span>
        </span>
      </h2>

      {/* Cards with Motion */}
      <motion.div
        className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {programs.map((item, index) => (
          <div
            key={index}
            className="w-[280px] rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-xl transition-transform hover:scale-[1.03]"
          >
            <div className={`relative w-full h-64 bg-gradient-to-br ${item.gradient}`}>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                <h3 className="font-bold text-lg text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === i ? "w-6 bg-green-400" : "w-2 bg-gray-500"
            }`}
            layout
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramCarousel;
