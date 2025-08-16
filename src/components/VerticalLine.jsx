import React from "react";

export const VerticalLine = ({ className, lineClassName }) => {
  return (
    <div className={`relative w-px h-[59px] ${className}`}>
      <img
        className={`absolute w-px h-[60px] top-0 left-0 object-cover ${lineClassName}`}
        alt="Line"
        src="https://c.animaapp.com/medy1fp6HOX7TE/img/line-23.svg"
      />
    </div>
  );
};
