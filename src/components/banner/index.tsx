import React, { useEffect, useState } from "react";
import { Carousel, initTE } from "tw-elements";
import { Button } from "antd";
import "./index.css";
import Exports from "../export";

const Banner = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    initTE({ Carousel });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Exports color={"white"} bg={"b6b9bb"} />
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative carouselBanner float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden", height: screenHeight - 250 }}
          >
            <div className="w-full h-full bg-[#0000005e]">
              <div
                className="absolute inset-x-[15%] top-1/4 py-5 text-center text-white md:block m-auto"
                style={{ maxWidth: "500px" }}
              >
                <h5 className="text-5xl font-semibold">Innovative Design</h5>
                <p className="mt-4 mb-8 text-lg">
                  Your trusted partner in creating stronger, more efficient and
                  smarter buildings
                </p>
                <Button className="rounded-full bg-white text-base font-semibold h-10 hover:bg-[#783A35] hover:!text-white hover:!border-[#783A35]">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          <div
            className="relative carouselBanner2 float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden", height: screenHeight - 250 }}
          >
            <div className="w-full h-full bg-[#0000005e]">
              <div
                className="absolute inset-x-[15%] top-1/3 py-5 text-center text-white md:block m-auto"
                style={{ maxWidth: "500px" }}
              >
                <h5 className="text-5xl font-semibold">Innovative Design</h5>
                <p className="mt-4 mb-8 text-lg">
                  Your trusted partner in creating stronger, more efficient and
                  smarter buildings
                </p>
                <Button className="rounded-full bg-white text-base font-semibold h-10 hover:bg-[#783A35] hover:!text-white hover:!border-[#783A35]">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          <div
            className="relative carouselBanner3 float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden", height: screenHeight - 250 }}
          >
            <div className="w-full h-full bg-[#0000005e]">
              <div
                className="absolute inset-x-[15%] top-1/3 py-5 text-center text-white md:block m-auto"
                style={{ maxWidth: "500px" }}
              >
                <h5 className="text-5xl font-semibold">Innovative Design</h5>
                <p className="mt-4 mb-8 text-lg">
                  Your trusted partner in creating stronger, more efficient and
                  smarter buildings
                </p>
                <Button className="rounded-full bg-white text-base font-semibold h-10 hover:bg-[#783A35] hover:!text-white hover:!border-[#783A35]">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
