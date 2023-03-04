import React from "react";
import DiscoverCard from "./utils/DiscoverCard";
import { Title } from "./utils/Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

const Discover = () => {
  const discover = [
    {
      name: "tomatoes",
      image:
        "https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg",
    },
    {
      name: "Ladyfingers",
      image:
        "https://cdn.pixabay.com/photo/2020/06/22/11/51/ladyfingers-5328912_960_720.jpg",
    },
    {
      name: "Carotte",
      image:
        "https://cdn.pixabay.com/photo/2017/12/16/22/57/carrot-3023465_960_720.jpg",
    },
    {
      name: "Potatoes",
      image:
        "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_960_720.jpg",
    },
    {
      name: "ginger",
      image:
        "https://cdn.pixabay.com/photo/2016/10/13/15/50/ginger-1738098_960_720.jpg",
    },
  ];
  return (
    <div className="w-full px-5 pt-10 pb-5 space-y-5">
      <Title className="text-center">Rediscover taste</Title>
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        autoplay={{
          delay: 2500,
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="px-5 max-w-[1000px]"
      >
        {discover.map((item, index) => (
          <SwiperSlide key={index} className="mx-auto">
            <DiscoverCard productName={item.name} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Discover;
