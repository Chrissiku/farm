import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ children }) => {
  return (
    <Link to="/" className="inline-flex items-center justify-center space-x-2">
      <img
        className="block h-12 w-12 p-2 border-2 border-dark rounded-full"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
      <h1 className="text-3xl font-medium text-dark">{children}</h1>
    </Link>
  );
};

export default Logo;
