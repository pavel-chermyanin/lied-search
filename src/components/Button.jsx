import React, { useEffect } from "react";

const Button = ({ children, size, padding,  }) => {
  return (
    <button
      className={`text-${size} h-[max-content] ${
        padding ? "px-[9px]" : "px-4"
      } py-2 bg-[#DBA42C] rounded-[10px] font-semibold whitespace-nowrap transition-all duration-[.3s] hover:bg-[#977120]`}
    >
      {children}
    </button>
  );
};

export default Button;
