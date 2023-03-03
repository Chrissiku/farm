import React from "react";

const Title = ({ children, className }) => {
  return (
    <h2
      className={`first-letter:uppercase leading-10 text-green1 lg:text-[2.5rem] text-[1.7rem] font-semibold ${className}`}
    >
      {children}
    </h2>
  );
};

export { Title };
