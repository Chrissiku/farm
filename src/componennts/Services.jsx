import React from "react";
import { Title } from "./utils/Titles";

const Services = () => {
  const services = [1, 2, 3];
  return (
    <div className="border w-full px-5 grid grid-cols-1 gap-5">
      <Title className="text-center">Choose from the best</Title>
      <div className="grid md:grid-cols-3 gap-5 grid-cols-1 mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="group relative w-[300px] h-[300px] overflow-hidden rounded-lg mx-auto"
          >
            <img
              src="https://cdn.pixabay.com/photo/2014/02/25/08/35/grapes-274132_960_720.jpg"
              alt="services"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b  transition-all duration-300 ease-linear text-white"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
