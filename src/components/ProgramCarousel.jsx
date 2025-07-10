import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const programs = [
  {
    title: "Massive Upper body",
    subtitle: "7 Week · 5x/week",
    image: "/programs.png",
  },
  {
    title: "Strength & Power",
    subtitle: "5 Week · 4x/week",
    image: "/programs.png",
  },
  {
    title: "Shredded Physique",
    subtitle: "6 Week · 6x/week",
    image: "/programs.png",
  },
  {
    title: "Endurance Boost",
    subtitle: "4 Week · 3x/week",
    image: "/programs.png",
  },
  {
    title: "Fat Burn Express",
    subtitle: "3 Week · 5x/week",
    image: "/programs.png",
  },
];

const ProgramCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full py-20 bg-[#0D1310] text-white text-center font-lufga">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12">
        Our{" "}
        <span className="italic relative inline-block px-1">
          <span className="relative z-10 px-3 py-1">Programs</span>
          <span
            className="absolute inset-0 -inset-y-1 border border-green-500 -skew-x-6 z-0 rounded-sm"
            aria-hidden="true"
          ></span>
        </span>
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        ref={swiperRef}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          el: ".swiper-custom-pagination",
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-6xl px-4 sm:px-6"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {programs.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-[280px] rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-xl relative transition-transform duration-300 ease-in-out">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="absolute bottom-0 w-full h-24 bg-black/50 backdrop-blur-md px-5 py-3 flex flex-col justify-end">
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="swiper-custom-pagination mt-10 flex justify-center gap-2"></div>
    </section>
  );
};

export default ProgramCarousel;
