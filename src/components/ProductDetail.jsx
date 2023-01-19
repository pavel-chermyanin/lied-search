import React, { useState } from "react";
import Button from "./Button";
import img from "../assets/images/slider-img.jpg";
import vector from "../assets/images/vector.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//lg:w-[550px] lg:h-[450px] md:w-[350px] md:h-[250px]
//mt-[80px] mb-[30px] sm:mt-0 sm:mb-0
//flex-col sm:flex-row gap-10 lg:items-center
const ProductDetail = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="pt-10 pb-20">
        <div className="flex flex-col gap-[50px] sm:flex-row sm:mb-[50px] items-center">
          <div className="productSlider  w-[100%] sm:w-[50%] h-[auto] text-[#fff] ">
            <Slider {...settings}>
              <div>
                <img
                  src={img}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={img}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={img}
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <div className="">
            <h3 className="text-md text-[#dba42c] mb-[30px]">
              Ролик режущий на нож Тарсо
            </h3>
            <ul className="productDescList">
              <li>
                <span>Производитель:</span>Тарсо
              </li>
              <li>
                <span>Страна: </span>США
              </li>
              <li>
                <span>Гарантия:</span>12 месяцев
              </li>
              <li>
                <span>Наличие:</span>{" "}
                <img
                  className="inline"
                  src={vector}
                  alt=""
                />
                В наличии
              </li>
            </ul>
            <Button>Заказать товар</Button>
          </div>
        </div>

        <div className="mt-[30px]">
          <div className="tabsBlock">
            <p
              onClick={() => toggleTab(1)}
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            >
              Описание
            </p>
            <p
              onClick={() => toggleTab(2)}
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            >
              Характеристики
            </p>
          </div>

          <div className="tabsContent ">
            <div
              className={
                toggleState === 1 ? "content content-active" : "content"
              }
            >
              11111111111111111111111111111ur adipisicing elit. Enim quis
              dolorem explicabo neque non reiciendis fuga cupiditate veritatis!
              Fugiat mollitia aspernatur atque id dolore sint dolores suscipit
              totam quae. Autem, sed sequi aliquid molestias, quae ea officia
              accusamus, tempore magnam consequuntur nihil. Quasi doloremque
              ullam temporibus architecto! Dolores, est ut?
            </div>
            <div
              className={
                toggleState === 2 ? "content content-active" : "content"
              }
            >
              222222222222222222222222222222222222endis fuga cupiditate
              veritatis! Fugiat mollitia aspernatur atque id dolore sint dolores
              suscipit totam quae. Autem, sed sequi aliquid molestias, quae ea
              officia accusamus, tempore magnam consequuntur nihil. Quasi
              doloremque ullam temporibus architecto! Dolores, est ut?
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductDetail;
