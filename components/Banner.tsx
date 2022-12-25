/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="image">
          <img
            src={"https://links.papareact.com/gi1"}
            alt="banner1"
            className="object-contain"
          />
        </div>
        <div className="image">
          <img
            src={"https://links.papareact.com/6ff"}
            alt="banner1"
            className="object-contain"
          />
        </div>
        <div className="image">
          <img
            src={"https://links.papareact.com/7ma"}
            alt="banner1"
            className="object-contain"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
