import React from "react";

export const DivWrapper = ({ property1 }) => {
  return (
    <div
      className={`w-5 flex items-center gap-2.5 p-0.5 rounded bg-errorbg relative ${property1 === "frame-1410090927" ? "shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a]" : ""}`}
    >
      <img
        className="w-4 h-4 relative"
        alt="X close"
        src="https://c.animaapp.com/medy1fp6HOX7TE/img/x-close.svg"
      />
    </div>
  );
};
