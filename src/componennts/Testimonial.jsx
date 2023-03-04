import React from "react";
import { Title } from "./utils/Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import TestimonialCard from "./utils/TestimonialCard";

const Testimonial = () => {
  const testimonies = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full px-5 pt-20 pb-5 space-y-4 bg-[#F2EEE9]">
      <Title className="text-center">Testimonials</Title>
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="px-5 max-w-[1000px]"
      >
        {testimonies.map((item) => (
          <SwiperSlide key={item} className="mx-auto">
            <TestimonialCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
