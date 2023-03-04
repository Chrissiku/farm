import React from "react";

const ServiceCard = (props) => {
  return (
    <div
      className="group relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] 
            md:w-[200px] md:h-[200px] overflow-hidden rounded-lg mx-auto"
    >
      <img
        src={props.image}
        alt={props.title}
        className="h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b  transition-all duration-300 ease-linear
             text-white"
      >
        <div className="absolute bottom-0 lg:p-4 p-2">
          <h3 className="text-[1.5rem] capitalize">{props.title}</h3>
          <p className="text-[0.8rem] lg:h-[60px] h-[80px] overflow-hidden">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
