import React, { useState } from "react";
import Button from "./Button";
import img from "../assets/images/slider-img.jpg";
import vector from "../assets/images/vector.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopupImg from "./PopupImg";

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

  const [urlPopupImg, setUrlPopupImg] = useState('')
  const [isPopup, setIsPopup] = useState(false)
  const popupImg = (url) => {
    setIsPopup(prev => !prev)
    setUrlPopupImg(url);
  };

  const urlImages = [
    "https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480",
    "https://cs14.pikabu.ru/post_img/2023/01/18/7/1674040120161175384.jpg",
    "https://i.pinimg.com/736x/9d/fc/dc/9dfcdc098ba899f6b78b67ae2bad1929.jpg",
  ];

  return (
    <>
      {isPopup && (
        <PopupImg
          url={urlPopupImg}
          setIsPopup={setIsPopup}
        />
      )}
      <div className="container">
        <div className="pt-10 pb-20">
          <div className="flex flex-col gap-[50px] sm:flex-row sm:mb-[50px] items-center">
            <div className="productSlider h-[100%]  w-[100%] sm:w-[50%] h-[auto] text-[#fff] ">
              <Slider {...settings}>
                {urlImages.map((url) => (
                  <div>
                    <img
                      onClick={() => popupImg(url)}
                      src={url}
                      alt=""
                    />
                  </div>
                ))}
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
                dolorem explicabo neque non reiciendis fuga cupiditate
                veritatis! Fugiat mollitia aspernatur atque id dolore sint
                dolores suscipit totam quae. Autem, sed sequi aliquid molestias,
                quae ea officia accusamus, tempore magnam consequuntur nihil.
                Quasi doloremque ullam temporibus architecto! Dolores, est ut?
              </div>
              <div
                className={
                  toggleState === 2 ? "content content-active" : "content"
                }
              >
                222222222222222222222222222222222222endis fuga cupiditate
                veritatis! Fugiat mollitia aspernatur atque id dolore sint
                dolores suscipit totam quae. Autem, sed sequi aliquid molestias,
                quae ea officia accusamus, tempore magnam consequuntur nihil.
                Quasi doloremque ullam temporibus architecto! Dolores, est ut?
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
