// src/components/ServiceCard.jsx
import React from "react";

const gradientMap = {
  "Play Sports": "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
  "Gyms": "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500",
  "Live Workouts": "bg-gradient-to-r from-green-400 via-emerald-600 to-teal-500",
};

const ServiceCard = ({ title }) => {
  return (
    <div className="w-[380px] h-[260px] p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
      <div
        className={`relative w-full h-full rounded-2xl overflow-hidden ${gradientMap[title]} transition-transform duration-300 hover:scale-105`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 text-white text-2xl font-semibold font-lufga z-10">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
