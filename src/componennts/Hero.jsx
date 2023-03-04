import React, { useEffect, useState } from "react";
import Button from "./utils/Button";

const Hero = () => {
  const [viewBox, setViewBox] = useState("0 0 1440 429");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setViewBox(`0 0 ${screenWidth} 429`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-auto w-full bg-green1 text-center py-10">
      <div className="space-y-10 mx-auto md:w-[80%] w-[95%]">
        <div className="text-white space-y-4">
          <h1 className="md:text-[3rem] text-[2rem]">
            Organic Farming Re-invent With Farmino
          </h1>
          <p className="text-[18px] text-gray-300 w-[80%] mx-auto">
            Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor
            suspendisse luctus amet bibendum pellentesque lorem. Malesuada
            lobortis tristique tortor,
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <Button
            type="button"
            className="z-10 bg-green1 md:w-[200px] text-white border hover:bg-slate-200 hover:text-green1"
          >
            Get Started
          </Button>
          <Button
            type="button"
            className="z-10 bg-white md:w-[200px] border border-green1 !text-green1 hover:bg-green2 hover:!text-white"
          >
            start free trial
          </Button>
        </div>
        <div
          className="z-10 group relative md:w-[60%] md:h-[300px] w-[80%] h-[150px] overflow-hidden mx-auto 
        rounded-xl"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/11/30/15/23/apples-1873078_960_720.jpg"
            alt="farm"
            className="w-full h-full object-cover group-hover:scale-105 transition-all 
        duration-300 ease-out"
          />
          <div className="absolute inset-0 bg-black opacity-[0.4] hover:opacity-0 transition-all duration-300 ease-linear"></div>
        </div>
      </div>

      <svg
        id="wave"
        className="absolute bg-transparent bottom-0 lg:block"
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,129L80,172C160,215,320,301,480,286.7C640,272,800,158,960,157.7C1120,158,1280,272,1440,315.3C1600,358,1760,330,1920,308.2C2080,287,2240,272,2400,243.7C2560,215,2720,172,2880,186.3C3040,201,3200,272,3360,258C3520,244,3680,143,3840,143.3C4000,143,4160,244,4320,250.8C4480,258,4640,172,4800,150.5C4960,129,5120,172,5280,172C5440,172,5600,129,5760,150.5C5920,172,6080,258,6240,272.3C6400,287,6560,229,6720,222.2C6880,215,7040,258,7200,293.8C7360,330,7520,358,7680,329.7C7840,301,8000,215,8160,207.8C8320,201,8480,272,8640,308.2C8800,344,8960,344,9120,293.8C9280,244,9440,143,9600,114.7C9760,86,9920,129,10080,157.7C10240,186,10400,201,10560,222.2C10720,244,10880,272,11040,243.7C11200,215,11360,129,11440,86L11520,43L11520,430L11440,430C11360,430,11200,430,11040,430C10880,430,10720,430,10560,430C10400,430,10240,430,10080,430C9920,430,9760,430,9600,430C9440,430,9280,430,9120,430C8960,430,8800,430,8640,430C8480,430,8320,430,8160,430C8000,430,7840,430,7680,430C7520,430,7360,430,7200,430C7040,430,6880,430,6720,430C6560,430,6400,430,6240,430C6080,430,5920,430,5760,430C5600,430,5440,430,5280,430C5120,430,4960,430,4800,430C4640,430,4480,430,4320,430C4160,430,4000,430,3840,430C3680,430,3520,430,3360,430C3200,430,3040,430,2880,430C2720,430,2560,430,2400,430C2240,430,2080,430,1920,430C1760,430,1600,430,1440,430C1280,430,1120,430,960,430C800,430,640,430,480,430C320,430,160,430,80,430L0,430Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
