import React from "react";

const Image = ({ className, src, alt }) => {
  return (
    <div
      className={`group relative w-full rounded-lg overflow-hidden ${className}`}
    >
      <img
        className="h-full w-full object-cover group-hover:scale-105 transition-all 
        duration-300 ease-out"
        src="https://cdn.pixabay.com/photo/2015/07/10/15/27/potato-839469_960_720.jpg"
        alt={alt}
      />
      <div className="absolute inset-0 bg-green1 opacity-[0.5] hover:opacity-0 transition-all duration-300 ease-linear"></div>
    </div>
  );
};

export default Image;
