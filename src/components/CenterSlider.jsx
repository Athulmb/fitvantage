import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const centers = [
    {
        title: "Mass Fitness",
        location: "Jumeirah",
        gradient: "from-yellow-400 via-red-500 to-pink-500",
    },
    {
        title: "Power Hub",
        location: "Deira",
        gradient: "from-purple-600 via-indigo-600 to-blue-500",
    },
    {
        title: "Flex Zone",
        location: "Marina",
        gradient: "from-green-400 via-emerald-600 to-teal-500",
    },
    {
        title: "Core Station",
        location: "Al Quoz",
        gradient: "from-orange-400 via-pink-500 to-rose-600",
    },
    {
        title: "Prime Fit",
        location: "Business Bay",
        gradient: "from-cyan-400 via-sky-500 to-blue-600",
    },
];

const CenterSlider = () => {
    const swiperRef = useRef(null);

    return (
        <section className="w-full py-20 bg-black text-white text-center font-lufga">
            <h2 className="text-4xl font-bold mb-12">
                Centers near you <span className="underline underline-offset-4">Dubai ▼</span>
            </h2>

            <Swiper
                ref={swiperRef}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}
                slidesPerView={3}
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
                {centers.map((center, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div
  className={`relative 
    w-[340px]         // base width
    sm:w-[360px]      // small screens
    md:w-[380px]      // medium screens
    lg:w-[400px]      // large screens
    h-[500px] 
    rounded-lg overflow-hidden 
    bg-gradient-to-br ${center.gradient} 
    shadow-2xl 
    transition-transform duration-300 ease-in-out 
    flex flex-col`}
>

                            {/* Top (Image/Label) */}
                            <div className="flex-1 relative">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full font-medium">
                                        DAILY CLASSES
                                    </span>
                                </div>
                                {/* Optional image */}
                                {/* <img src="/center.jpg" alt="Center" className="w-full h-full object-cover" /> */}
                            </div>

                            {/* Bottom fixed content + BOOK NOW */}
                            <div className="shrink-0">
                                <div className="h-[140px] px-6 py-6 bg-black/20 backdrop-blur-lg border-t border-white/10 text-left">
                                    <h3 className="text-lg font-bold text-white">{center.title}</h3>
                                    <p className="text-sm text-white/80 mt-2 flex items-center gap-1">
                                        <svg
                                            className="w-4 h-4 text-white/80"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9l-4.95 4.95a.75.75 0 01-1.06 0L5.05 13.95a7 7 0 010-9.9zm7.9 1.414a5.5 5.5 0 10-7.778 7.778L10 17.828l4.828-4.828a5.5 5.5 0 000-7.778z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {center.location}
                                    </p>
                                </div>
                                <div
                                    className="h-[52px] backdrop-blur-xl border-t border-white/10 text-white text-sm font-medium flex items-center justify-center rounded-b-2xl cursor-pointer"
                                    style={{ backgroundColor: "#6E6D6DB3" }}
                                >
                                    BOOK NOW
                                </div>

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

export default CenterSlider;
