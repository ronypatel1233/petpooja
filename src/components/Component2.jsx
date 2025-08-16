import React from "react";

export const Component2 = ({ property1 }) => {
  return (
    <div
      className={`w-5 flex items-center gap-2.5 p-0.5 rounded bg-successbg relative ${property1 === "frame-1410090928" ? "shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a]" : ""}`}
    >
      <img
        className="w-4 h-4 relative"
        alt="Check"
        src="https://c.animaapp.com/medy1fp6HOX7TE/img/check.svg"
      />
    </div>
  );
};
