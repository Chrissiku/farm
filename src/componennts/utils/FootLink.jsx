import React from "react";

const FootLink = (props) => {
  return (
    <ul>
      <li
        className="text-[0.9rem] text-gray-600 hover:pl-3 hover:text-green2 
    transition-all duration-500 ease-in-out"
      >
        <a href={props.link} className="capitalize">
          {props.title}
        </a>
      </li>
    </ul>
  );
};

export default FootLink;
