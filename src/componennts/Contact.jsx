import React from "react";
import {
  FaEnvelopeOpen,
  FaGlobe,
  FaHouseUser,
  FaPhone,
} from "react-icons/fa";
import Button from "./utils/Button";
import Social from "./utils/Social";
import { Title } from "./utils/Titles";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      url: "mailto:chrissiku5@gmail.com",
      icon: <FaEnvelopeOpen />,
      value: "info@farmino.org",
    },
    {
      title: "Phone",
      url: "tel:+243992984499",
      icon: <FaPhone />,
      value: "+243 992 984 499",
    },
    {
      title: "Office",
      url: "https://goo.gl/maps/dXzti6q7aDJrB13V8",
      icon: <FaHouseUser />,
      value: "1686, Geraldine Lane New York, NY 10013",
    },
  ];
  return (
    <div className="lg:py-14 py-10 w-full mx-auto lg:px-32 md:px-10 px-5">
      <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {contactInfo.map((info, index) => (
            <a
              href={info.url}
              className="block space-y-3 bg-slate-100 hover:bg-slate-200 p-5 rounded-lg"
            >
              <div className="py-2 inline-flex items-center justify-start gap-4 w-full">
                <span className="text-white text-[0.9rem] bg-green1 p-3 rounded-full">
                  {info.icon}
                </span>{" "}
                <span className="first-letter:uppercase text-[1.3rem]">
                  {info.title}
                </span>
              </div>
              <span className="block text-[1.1rem]">{info.value}</span>
            </a>
          ))}
          {/* Social links */}
          <div className="block space-y-3 bg-slate-100 p-5 rounded-lg">
            <div className="py-2 inline-flex items-center justify-start gap-4 w-full">
              <span className="text-white text-[0.9rem] bg-green1 p-3 rounded-full">
                <FaGlobe />
              </span>{" "}
              <span className="first-letter:uppercase text-[1.3rem]">
                Social
              </span>
            </div>
            <div className="inline-flex justify-between items-center w-full">
              <Social />
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:px-10">
          <Title>Contact Us</Title>
          <form className="space-y-5" method="post" autoComplete="off">
            <div className="flex flex-col space-y-1">
              <label className="text-[1.2rem]">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="border-2 border-gray-300 p-3 rounded-lg text-[1.1rem] outline-none 
                focus:border-green2 transition-all duration-200 ease-linear"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-[1.2rem]">Message</label>
              <textarea
                placeholder="Your message here"
                required
                className="border-2 border-gray-300 p-3 rounded-lg text-[1.1rem] outline-none 
                focus:border-green2 transition-all duration-200 ease-linear"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="text-white bg-green1 hover:bg-green2 w-full"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
