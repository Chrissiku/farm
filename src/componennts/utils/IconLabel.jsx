import React from "react";
import { FaTree } from "react-icons/fa";

const IconLabel = (props) => {
  return (
    <div
      className="py-2 inline-flex items-center justify-start gap-4 w-full 
    hover:bg-slate-200 hover:pl-3 transition-all duration-300 ease-in-out rounded-lg"
    >
      <span className="text-white text-[0.9rem] bg-green1 p-3 rounded-full">
        {props.icon}
      </span>{" "}
      <span className="first-letter:uppercase text-[1.1rem]">
        {props.label}
      </span>
    </div>
  );
};

export default IconLabel;
