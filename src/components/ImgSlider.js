import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
  };
  return (
    <Slider className="banner-carousel" {...settings}>
     <div className="banner-carousel_wrap">
        <a>
            <img src="/images/slider-badging.jpg" alt="banner image" />
        </a>
     </div>
     <div className="banner-carousel_wrap">
        <a>
            <img src="/images/slider-scale.jpg" alt="banner image" />
        </a>
     </div>
     <div className="banner-carousel_wrap">
        <a>
            <img src="/images/slider-badag.jpg" alt="banner image" />
        </a>
     </div>
     <div className="banner-carousel_wrap">
        <a>
            <img src="/images/slider-scales.jpg" alt="banner image" />
        </a>
     </div>
    </Slider>
  );
};

export default ImgSlider;
