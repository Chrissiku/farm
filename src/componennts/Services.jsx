import React from "react";
import { Title } from "./utils/Titles";

const Services = () => {
  const services = [1, 2, 3];
  return (
    <div className="w-full px-5 grid grid-cols-1 gap-5 py-8 space-y-4">
      <Title className="text-center leading-8">Choose from the best</Title>
      <div className="grid md:grid-cols-3 gap-5 grid-cols-1 mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="group relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] 
            md:w-[200px] md:h-[200px] overflow-hidden rounded-lg mx-auto"
          >
            <img
              src="https://cdn.pixabay.com/photo/2014/02/25/08/35/grapes-274132_960_720.jpg"
              alt="services"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b  transition-all duration-300 ease-linear
             text-white"
            >
              <div className="absolute bottom-0 lg:p-4 p-2">
                <h3 className="text-[1.5rem]">Agriculture leader</h3>
                <p className="text-[0.8rem] lg:h-[60px] h-[80px] overflow-hidden">
                  Luctus felis sit lectus tristique diam ornare bibendum. Arcu
                  auctor suspendisse luctus amet bibendum pellentesque lorem.
                  auctor suspendisse luctus amet bibendum pellentesque lorem.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
