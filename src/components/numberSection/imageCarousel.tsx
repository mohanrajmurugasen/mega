import React, { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";
import postTension1 from "../../assets/images/postTension1.png";
import postTension2 from "../../assets/images/postTension2.png";
import postTension3 from "../../assets/images/postTension3.png";

const MyCarousel = () => {
  useEffect(() => {
    // Initialize the Carousel component
    initTE({ Carousel });
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative h-full"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      {/* Carousel Indicators */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="0"
          data-te-carousel-active
          className="mx-[3px] box-content h-[4px] w-[4px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="1"
          className="mx-[3px] box-content h-[4px] w-[4px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="2"
          className="mx-[3px] box-content h-[4px] w-[4px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Items */}
      <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* First item */}
        <div
          className="relative h-full float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-active
          data-te-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={postTension1}
            className="block w-full h-full object-cover"
            alt="..."
          />
        </div>

        {/* Second item */}
        <div
          className="relative h-full float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={postTension2} className="block w-full h-full" alt="..." />
        </div>

        {/* Third item */}
        <div
          className="relative h-full float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={postTension3} className="block w-full h-full" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
