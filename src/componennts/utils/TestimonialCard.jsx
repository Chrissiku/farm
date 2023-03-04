import React from "react";

const TestimonialCard = (props) => {
  return (
    <div
      className="w-full space-y-4 p-8 mb-14 cursor-pointer scale-95 hover:scale-100 
    transition-all duration-200 ease-out shadow-md"
    >
      <p className="text-center">{props.text}</p>
      <div className="h-20 w-20 overflow-hidden rounded-full mx-auto">
        <img
          className="w-full h-full object-cover"
          src={props.profile}
          alt={props.name}
        />
      </div>
      <h4 className="text-dark text-center text-[1.4rem] capitalize">
        {props.name}
      </h4>
    </div>
  );
};

export default TestimonialCard;
