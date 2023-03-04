import React from "react";

const TestimonialCard = () => {
  return (
    <div
      className="w-full space-y-4 p-8 mb-14 cursor-pointer scale-95 hover:scale-100 
    transition-all duration-200 ease-out shadow-md"
    >
      <p className="text-center">
        Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor
        suspendisse luctus amet bibendum pellentesque lorem. auctor
      </p>
      <div className="h-20 w-20 overflow-hidden rounded-full mx-auto">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_960_720.jpg"
          alt="profile"
        />
      </div>
      <h4 className="text-dark text-center text-[1.4rem]">Jane Doe</h4>
    </div>
  );
};

export default TestimonialCard;
