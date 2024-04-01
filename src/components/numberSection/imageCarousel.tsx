import React from "react";
import postTension1 from "../../assets/images/postTension1.png";
import postTension2 from "../../assets/images/postTension2.png";
import postTension3 from "../../assets/images/postTension3.png";
import postTension4 from "../../assets/images/postTension4.png";
import Slider from "react-slick";

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={postTension4}
            alt="jg"
            style={{ minHeight: "418px" }}
            className="object-cover"
          />
          <div className="absolute bottom-6 left-0 bg-[#783A35] p-1 text-white text-sm rounded-r-sm w-11/12 text-center">
            Unleash Structural Possibilities
          </div>
        </div>
        <div className="relative">
          <img
            src={postTension2}
            alt="jg"
            style={{ minHeight: "418px" }}
            className="object-cover"
          />
          <div className="absolute bottom-6 left-0 bg-[#783A35] p-1 text-white text-sm rounded-r-sm w-11/12 text-center">
            Unleash Structural Possibilities
          </div>
        </div>
        <div className="relative">
          <img
            src={postTension3}
            alt="jg"
            style={{ minHeight: "418px" }}
            className="object-cover"
          />
          <div className="absolute bottom-6 left-0 bg-[#783A35] p-1 text-white text-sm rounded-r-sm w-11/12 text-center">
            Unleash Structural Possibilities
          </div>
        </div>
        <div className="relative">
          <img
            src={postTension1}
            alt="jg"
            style={{ minHeight: "418px" }}
            className="object-cover"
          />
          <div className="absolute bottom-6 left-0 bg-[#783A35] p-1 text-white text-sm rounded-r-sm w-11/12 text-center">
            Unleash Structural Possibilities
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MyCarousel;
