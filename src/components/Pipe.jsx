import React from "react";

const Pipe = ({ height }) => {
  return (
    <div className="px-4">
      <div className={`bg-[#dba42c] w-[8px] min-h-[${height}px] h-[100%]`}></div>
    </div>
  );
};

export default Pipe;
