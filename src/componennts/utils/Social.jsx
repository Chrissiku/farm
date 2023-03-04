import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  const socialLinks = [
    {
      social: "facebook",
      link: "https://www.facebook.com/christian.siku.1/",
      icon: <FaFacebookF />,
    },
    {
      social: "Twitter",
      link: "https://twitter.com/christian_siku",
      icon: <FaTwitter />,
    },
    {
      social: "Instagram",
      link: "https://www.instagram.com/christian_el_olivero/",
      icon: <FaInstagram />,
    },
    {
      social: "Linkedin",
      link: "https://www.linkedin.com/in/christian-siku/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          className="text-white text-[0.8rem] bg-green-500 hover:bg-green1 transition-all duration-200
                ease-in p-3 rounded-full cursor-pointer"
        >
          {social.icon}
        </a>
      ))}
    </>
  );
};

export default Social;
