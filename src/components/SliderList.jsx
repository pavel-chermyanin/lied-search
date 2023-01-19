import React from "react";
import SliderListItem from "./SliderListItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderList = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="py-10 pb-20">
      <div className="container">
        <h3 className="text-md text-[#dba42c] mb-[50px]">
          Рекомендуемые товары
        </h3>
        <div className="sliderList">
          <Slider {...settings}>
            <SliderListItem />
            <SliderListItem />
            <SliderListItem />
            <SliderListItem />
            <SliderListItem />
            <SliderListItem />
            <SliderListItem />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderList;
