import React, { useEffect } from "react";

const ButtonOutline = ({ children, size, padding }) => {
  return (
    <button
      className={`text-${size} h-[max-content] ${
        padding ? "px-[9px]" : "px-4"
      } py-2 bg-[transparent] rounded-[10px] font-semibold whitespace-nowrap transition-all duration-[.3s] border-solid border-[1px] border-[#fff] hover:bg-white hover:text-[#000]`}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
