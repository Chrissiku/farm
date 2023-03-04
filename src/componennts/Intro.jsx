import React from "react";
import { Title } from "./utils/Titles";
import ReactPlayer from "react-player/";
import "video-react/dist/video-react.css";
import Button from "./utils/Button";

const Intro = () => {
  return (
    <div className="lg:py-20 py-10 w-full mx-auto lg:px-32 md:px-10 px-5 bg-[#F2EEE9]">
      <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 max-w-[1200px]">
        <div className="w-full rounded-lg overflow-hidden">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=r_YGlKihHtk"
            controls={true}
            volume={0}
            width="100%"
            light={
              <img
                src="https://cdn.pixabay.com/photo/2017/10/29/15/58/trees-2900064_960_720.jpg"
                alt="Thumbnail"
                className="rounded-lg w-full h-full object-cover"
              />
            }
          />
        </div>
        <div className="space-y-5">
          <Title>Everyone should have access to nutritious food</Title>
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
          <Button
            type="button"
            className="bg-green1 text-white border border-green1 hover:bg-green2"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
