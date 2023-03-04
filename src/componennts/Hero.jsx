import React from "react";
import Button from "./utils/Button";

const Hero = () => {
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
            className="bg-green1 md:w-[200px] text-white border hover:bg-slate-200 hover:text-green1"
          >
            Get Started
          </Button>
          <Button
            type="button"
            className="bg-white md:w-[200px] border !text-green1 hover:bg-green2 hover:!text-white"
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
        className="absolute bg-transparent bottom-0 lg:block hidden"
        viewBox="0 0 1440 429"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,129L80,172C160,215,320,301,480,286.7C640,272,800,158,960,157.7C1120,158,1280,272,1440,315.3C1600,358,1760,330,1920,308.2C2080,287,2240,272,2400,243.7C2560,215,2720,172,2880,186.3C3040,201,3200,272,3360,258C3520,244,3680,143,3840,143.3C4000,143,4160,244,4320,250.8C4480,258,4640,172,4800,150.5C4960,129,5120,172,5280,172C5440,172,5600,129,5760,150.5C5920,172,6080,258,6240,272.3C6400,287,6560,229,6720,222.2C6880,215,7040,258,7200,293.8C7360,330,7520,358,7680,329.7C7840,301,8000,215,8160,207.8C8320,201,8480,272,8640,308.2C8800,344,8960,344,9120,293.8C9280,244,9440,143,9600,114.7C9760,86,9920,129,10080,157.7C10240,186,10400,201,10560,222.2C10720,244,10880,272,11040,243.7C11200,215,11360,129,11440,86L11520,43L11520,430L11440,430C11360,430,11200,430,11040,430C10880,430,10720,430,10560,430C10400,430,10240,430,10080,430C9920,430,9760,430,9600,430C9440,430,9280,430,9120,430C8960,430,8800,430,8640,430C8480,430,8320,430,8160,430C8000,430,7840,430,7680,430C7520,430,7360,430,7200,430C7040,430,6880,430,6720,430C6560,430,6400,430,6240,430C6080,430,5920,430,5760,430C5600,430,5440,430,5280,430C5120,430,4960,430,4800,430C4640,430,4480,430,4320,430C4160,430,4000,430,3840,430C3680,430,3520,430,3360,430C3200,430,3040,430,2880,430C2720,430,2560,430,2400,430C2240,430,2080,430,1920,430C1760,430,1600,430,1440,430C1280,430,1120,430,960,430C800,430,640,430,480,430C320,430,160,430,80,430L0,430Z"
        ></path>
      </svg>

      <svg
        id="wave"
        className="absolute bg-transparent bottom-0 lg:hidden block"
        viewBox="0 0 1440 490"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M0,49L240,81.7C480,114,960,180,1440,228.7C1920,278,2400,310,2880,285.8C3360,261,3840,180,4320,179.7C4800,180,5280,261,5760,253.2C6240,245,6720,147,7200,155.2C7680,163,8160,278,8640,318.5C9120,359,9600,327,10080,310.3C10560,294,11040,294,11520,277.7C12000,261,12480,229,12960,187.8C13440,147,13920,98,14400,106.2C14880,114,15360,180,15840,212.3C16320,245,16800,245,17280,261.3C17760,278,18240,310,18720,310.3C19200,310,19680,278,20160,261.3C20640,245,21120,245,21600,236.8C22080,229,22560,212,23040,204.2C23520,196,24000,196,24480,171.5C24960,147,25440,98,25920,138.8C26400,180,26880,310,27360,318.5C27840,327,28320,212,28800,171.5C29280,131,29760,163,30240,179.7C30720,196,31200,196,31680,220.5C32160,245,32640,294,33120,294C33600,294,34080,245,34320,220.5L34560,196L34560,490L34320,490C34080,490,33600,490,33120,490C32640,490,32160,490,31680,490C31200,490,30720,490,30240,490C29760,490,29280,490,28800,490C28320,490,27840,490,27360,490C26880,490,26400,490,25920,490C25440,490,24960,490,24480,490C24000,490,23520,490,23040,490C22560,490,22080,490,21600,490C21120,490,20640,490,20160,490C19680,490,19200,490,18720,490C18240,490,17760,490,17280,490C16800,490,16320,490,15840,490C15360,490,14880,490,14400,490C13920,490,13440,490,12960,490C12480,490,12000,490,11520,490C11040,490,10560,490,10080,490C9600,490,9120,490,8640,490C8160,490,7680,490,7200,490C6720,490,6240,490,5760,490C5280,490,4800,490,4320,490C3840,490,3360,490,2880,490C2400,490,1920,490,1440,490C960,490,480,490,240,490L0,490Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
