const PopupImg = ({ url, setIsPopup }) => {
  const closePopup = () => {
    setIsPopup(false);
  };
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
        />
      </div>
    </div>
  );
};

export default PopupImg;
