import React from "react";
import Logo from "./Logo/Logo";
import FootLink from "./utils/FootLink";
import Social from "./utils/Social";

const Footer = () => {
  const links = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "about",
      link: "/",
    },
    {
      title: "contact",
      link: "/",
    },
    {
      title: "Why choose us",
      link: "/",
    },
    {
      title: "Privacy policy",
      link: "/",
    },
    {
      title: "Team",
      link: "/",
    },
  ];

  const products = [
    {
      title: "tomatoes",
      link: "/",
    },
    {
      title: "mangoes",
      link: "/",
    },
    {
      title: "red cheries",
      link: "/",
    },
    {
      title: "banana",
      link: "/",
    },
    {
      title: "carrots",
      link: "/",
    },
  ];

  const contacts = [
    {
      title: "Business inquiry",
      link: "123-456-7890",
    },
    {
      title: "Customer care",
      link: "987-654-321",
    },
  ];
  return (
    <div className="lg:py-14 space-y-5 py-10 w-full mx-auto lg:px-24 md:px-10 px-5 bg-[#F2EEE9]">
      <div className="w-full grid lg:grid-cols-4 grid-cols-1 max-w-[1200px] mx-auto lg:gap-3 gap-8">
        <div className="w-full">
          <Logo>Farmino</Logo>
          <p className="text-gray-600 text-[0.9rem]">
            Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor
            suspendisse luctus amet bibendum pellentesque lorem. Malesuada
            lobortis tristique tortor,
          </p>
        </div>
        <div className="col-span-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          <div className="space-y-3 w-full lg:px-5 px-0">
            <h5 className="capitalize text-[1.1rem]">QuicLinks</h5>
            {links.map((link, index) => (
              <FootLink key={index} title={link.title} link={link.link} />
            ))}
          </div>
          <div className="space-y-3 w-full lg:px-5 px-0">
            <h5 className="capitalize text-[1.1rem]">Products</h5>
            {products.map((product, index) => (
              <FootLink key={index} title={product.title} link={product.link} />
            ))}
          </div>
          <div className="lg:col-span-2 space-y-3 w-full lg:px-5 px-0 ">
            <h5 className="capitalize text-[1.1rem]">Contact</h5>
            {contacts.map((contact, index) => (
              <div className="space-x-4" key={index}>
                <span className="capitalize text-gray-600">
                  {contact.title} :
                </span>
                <a href={`tel:${contact.link}`} className="capitalize">
                  {contact.link}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full space-y-3">
          <h3 className="first-letter:uppercase text-[1.3rem]">Follow us</h3>
          <p className="text-gray-600 text-[0.9rem]">Stay updated about us</p>
          <div className="inline-flex justify-between items-center space-x-3">
            <Social />
          </div>
        </div>
      </div>
      <div className="border border-gray-300 "></div>
      <div className="text-[1rem] text-gray-600 text-center">
        Build with ❤ by{" "}
        <a
          href="https://github.com/Chrissiku"
          className="text-dark"
          target="_blank"
        >
          Christian Siku
        </a>{" "}
      </div>
      <div className="text-[1rem] text-gray-600 text-center">
        &copy; 2023{" "}
        <a
          href="https://github.com/Chrissiku"
          className="text-black"
          target="_blank"
        >
          Farmino
        </a>{" "}
        | All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
