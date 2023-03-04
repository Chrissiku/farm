import React from "react";

const DiscoverCard = (props) => {
  return (
    <div className="relative mb-10 w-full space-y-4 p-1 mx-auto">
      <div className="h-[250px] w-full rounded-lg overflow-hidden">
        <img
          src={props.image}
          alt={props.productName}
          className="h-full w-full object-cover"
        />
      </div>
      <h5 className="text-center w-full capitalize">{props.productName}</h5>
    </div>
  );
};

export default DiscoverCard;
