import React from "react";
import { FaCertificate, FaTree, FaTruck } from "react-icons/fa";
import IconLabel from "./utils/IconLabel";
import Image from "./utils/Image";
import { Title } from "./utils/Titles";

const Missions = () => {
  const missionsData = [
    [
      // Label icon
      {
        icon: <FaTree />,
        label: "Organic marketing",
      },
      {
        icon: <FaCertificate />,
        label: "Certified products",
      },
      {
        icon: <FaTruck />,
        label: "fast delivery",
      },
    ],
    // Images
    [
      {
        className: "col-span-2 row-span-3 md:h-[200px] h-[150px]",
        title: "farmer",
        src:
          "https://cdn.pixabay.com/photo/2015/07/10/15/27/potato-839469_960_720.jpg",
      },
      {
        className: "",
        title: "farmer",
        src:
          "https://cdn.pixabay.com/photo/2015/07/10/15/27/potato-839469_960_720.jpg",
      },
      {
        className: "",
        title: "farmer",
        src:
          "https://cdn.pixabay.com/photo/2015/07/10/15/27/potato-839469_960_720.jpg",
      },
    ],
  ];
  return (
    <div className="md:my-20 my-5 md:px-20 lg:px-32 xl:max-w-[1500px] mx-auto px-5 grid md:grid-cols-2 gap-5 grid-cols-1">
      <div className="grid grid-cols-1 space-y-5">
        <Title>
          Mission we
          <span className="md:inline hidden ">
            <br />
          </span>
          are working on
        </Title>
        <div className="space-y-3">
          <p>
            Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor
            suspendisse luctus amet bibendum pellentesque lorem. Malesuada
            lobortis tristique tortor,
          </p>
          <p>
            Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor
            suspendisse luctus amet bibendum pellentesque lorem. Malesuada
            lobortis tristique tortor,
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-2 w-full">
          {missionsData[0].map((item, index) => (
            <IconLabel key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
      {/* Images grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 px-0 md:px-5">
        {missionsData[1].map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.title}
            className={item.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Missions;
