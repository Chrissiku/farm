import React from "react";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
import Button from "./utils/Button";

const navigation = [
  { name: "How it works", href: "/", current: true },
  { name: "About us", href: "/", current: false },
  { name: "Partners", href: "/", current: false },
  { name: "Support", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto w-full">
            <div className="relative flex flex-wrap items-center md:justify-around justify-between p-4">
              <div className="flex items-center justify-start sm:items-stretch sm:justify-start">
                <Logo>Farmino</Logo>
              </div>

              <div className="hidden md:flex items-center space-x-[32px] first-letter:uppercase font-medium">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-red1"
                        : "text-[#18191F] hover:text-red1",
                      "text-xl transition-all duration-100 ease-in"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <Button type="button" className="bg-red1 hover:bg-red-800">
                  Buy Now
                </Button>
              </div>

              <div className="absolute inset-y-0 right-4 font-bold flex items-center md:hidden text-dark">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-10 w-10 font-bold"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-10 w-10 font-bold"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden bg-light transition-all duration-300 ease-in-out">
            <div className="space-y-2 p-10">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-red1 bg-white"
                      : "text-[#18191F]  hover:text-red1 hover:bg-white",
                    "border text-xl border-black block px-3 py-2 rounded-md font-medium text-center "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
