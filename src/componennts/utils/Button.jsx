import React from "react";

const Button = ({ children, type, className }) => {
  return (
    <button
      type={type}
      className={`transition-all duration-300 ease-in first-letter:uppercase font-medium px-8 border-1 text-[16px] border-light text-white py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
