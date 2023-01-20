import { useEffect, useState } from "react";

const PopupImg = ({ url, setIsPopup }) => {
  const [classActive, setiClassActive] = useState("");
  const closePopup = () => {
    setIsPopup(false);
  };

  useEffect(() => {
    setiClassActive("imgActive");
  },[])
  return (
    <div
      onClick={closePopup}
      className="modalWrapper"
    >
      <button className="closeBtn">X</button>
      <div className="modalBox">
        <img
          src={url}
          alt=""
          className={classActive}
        />
      </div>
    </div>
  );
};

export default PopupImg;
