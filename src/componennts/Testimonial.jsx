import React from "react";
import { Title } from "./utils/Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import TestimonialCard from "./utils/TestimonialCard";

const Testimonial = () => {
  const testimonies = [
    {
      name: "Booby kal",
      text: `Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse 
    luctus amet bibendum pellentesque lorem. auctor`,
      profile: `https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083_960_720.jpg`,
    },
    {
      name: "Gerard Sofi",
      text: `Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse 
      luctus amet bibendum pellentesque lorem. auctor`,
      profile: `https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_960_720.jpg`,
    },
    {
      name: "Nabil Angoy",
      text: `Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse 
      luctus amet bibendum pellentesque lorem. auctor`,
      profile: `https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_960_720.jpg`,
    },
    {
      name: "Melissa Mush",
      text: `Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse 
      luctus amet bibendum pellentesque lorem. auctor`,
      profile: `https://cdn.pixabay.com/photo/2020/05/11/11/23/woman-5157666_960_720.jpg`,
    },
    {
      name: "Jane Doe",
      text: `Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse 
      luctus amet bibendum pellentesque lorem. auctor`,
      profile: `https://cdn.pixabay.com/photo/2020/08/21/08/46/african-5505598_960_720.jpg`,
    },
  ];
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
        {testimonies.map((item, index) => (
          <SwiperSlide key={index} className="mx-auto">
            <TestimonialCard
              name={item.name}
              text={item.text}
              profile={item.profile}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
