import React, { useState } from "react";

export const Checkbox = ({ property1, className, checked: initialChecked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const getState = () => {
    if (isChecked) return "done";
    if (isHovered) return "hover";
    return "default";
  };

  const currentState = getState();

  return (
    <div
      className={`w-6 h-6 cursor-pointer ${["default", "done"].includes(currentState) ? "bg-[100%_100%]" : ""} ${currentState === "done" ? "bg-[url(https://c.animaapp.com/medy1fp6HOX7TE/img/check-3.svg)]" : (currentState === "default") ? "bg-[url(https://c.animaapp.com/medy1fp6HOX7TE/img/circle.svg)]" : ""} ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {currentState === "hover" && (
        <div className="inline-flex items-center gap-2.5 p-0.5 relative -top-0.5 -left-0.5 bg-brandlight rounded-[99999px]">
          <img
            className="relative w-6 h-6"
            alt="Check"
            src="https://c.animaapp.com/medy1fp6HOX7TE/img/check-3.svg"
          />
        </div>
      )}
    </div>
  );
};
