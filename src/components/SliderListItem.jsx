import React from "react";
import img from "../assets/images/slider-img.jpg";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";

const SliderListItem = () => {
  return (
    <div className="sliderListItem w-[100%]">
      <img
        className="mb-[20px]"
        src={img}
        alt=""
      />
      <h5 className="text-xs text-[#dba42c] mb-[15px]">
        Ролик напрвляющий для ножа Тарсо металический !
      </h5>
      <p className="text-[12px] mb-[20px]">
        Ролик напрвляющий для ножа Тарсо металический
      </p>

      <div className="flex gap-[5px]">
        <Button size={'xs'}>Подробнее</Button>
        <ButtonOutline size={'xs'}>Оформить заказ</ButtonOutline>
      </div>
    </div>
  );
};

export default SliderListItem;
