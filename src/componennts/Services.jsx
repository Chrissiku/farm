import React from "react";
import ServiceCard from "./utils/ServiceCard";
import { Title } from "./utils/Titles";

const Services = () => {
  const services = [
    {
      title: "Agriculture Leader",
      text: `Luctus felis sit lectus tristique diam ornare bibendum. Arcu
    auctor suspendisse luctus amet bibendum pellentesque lorem.
    auctor suspendisse luctus amet bibendum pellentesque lorem.`,
      image: `https://cdn.pixabay.com/photo/2016/12/16/13/18/canola-fields-1911392_960_720.jpg`,
    },
    {
      title: "Quality Standars",
      text: `Luctus felis sit lectus tristique diam ornare bibendum. Arcu
    auctor suspendisse luctus amet bibendum pellentesque lorem.
    auctor suspendisse luctus amet bibendum pellentesque lorem.`,
      image: `https://cdn.pixabay.com/photo/2016/09/10/13/34/grapes-1659118_960_720.jpg`,
    },
    {
      title: "Organic Services",
      text: `Luctus felis sit lectus tristique diam ornare bibendum. Arcu
    auctor suspendisse luctus amet bibendum pellentesque lorem.
    auctor suspendisse luctus amet bibendum pellentesque lorem.`,
      image: `https://cdn.pixabay.com/photo/2017/07/20/15/21/chickens-2522623_960_720.jpg`,
    },
  ];
  return (
    <div className="w-full px-5 grid grid-cols-1 gap-5 py-8 space-y-4">
      <Title className="text-center leading-8">Choose from the best</Title>
      <div className="grid md:grid-cols-3 gap-5 grid-cols-1 mx-auto">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
