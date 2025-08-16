import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

export const Note = ({
  state,
  className,
  frameClassName,
  text = "Make shift &amp; assign",
  inputFieldClassName,
  text1 = "Assign individuals to specific shifts based on availability and role requirements",
  initialChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <div
      className={`w-[552px] flex items-start gap-3 p-3 rounded-xl relative ${["active", "hover"].includes(state) ? "bg-neutrallight-bg" : ""} ${className}`}
    >
      <Checkbox 
        className="!relative" 
        property1="default" 
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`flex-col items-start relative ${state === "active" ? "flex" : "inline-flex"} ${state === "active" ? "grow" : ""} ${state === "active" ? "flex-1" : "flex-[0_0_auto]"} ${state === "active" ? "gap-2" : ""} ${frameClassName}`}
      >
        <div
          className={`self-stretch relative ${["default", "hover"].includes(state) ? "font-text-small-medium" : ""} ${state === "active" ? "w-full" : ""} ${state === "active" ? "flex" : ""} ${["default", "hover"].includes(state) ? "mt-[-1.00px]" : ""} ${["default", "hover"].includes(state) ? "tracking-[var(--text-small-medium-letter-spacing)]" : ""} ${["default", "hover"].includes(state) ? "text-[length:var(--text-small-medium-font-size)]" : ""} ${["default", "hover"].includes(state) ? "[font-style:var(--text-small-medium-font-style)]" : ""} ${state === "active" ? "items-start" : ""} ${["default", "hover"].includes(state) ? "text-[#212121]" : ""} ${state === "active" ? "gap-4" : ""} ${state === "active" ? "flex-[0_0_auto]" : ""} ${["default", "hover"].includes(state) ? "font-[number:var(--text-small-medium-font-weight)]" : ""} ${["default", "hover"].includes(state) ? "leading-[var(--text-small-medium-line-height)]" : ""}`}
        >
          {["default", "hover"].includes(state) && <>{text}</>}

          {state === "active" && (
            <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
              <div className="h-8 items-center flex gap-2 px-4 py-[8.5px] relative self-stretch w-full bg-white rounded-lg overflow-hidden border border-solid border-[#ebebeb]">
                <div className="items-center mt-[-3.50px] mb-[-3.50px] flex gap-2 relative flex-1 grow">
                  <div className="inline-flex flex-[0_0_auto] items-center gap-1 relative">
                    <div className="w-fit text-[#212121] whitespace-nowrap relative mt-[-1.00px] font-text-base-regular font-[number:var(--text-base-regular-font-weight)] text-[length:var(--text-base-regular-font-size)] tracking-[var(--text-base-regular-letter-spacing)] leading-[var(--text-base-regular-line-height)] [font-style:var(--text-base-regular-font-style)]">
                      {text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className={`relative ${["default", "hover"].includes(state) ? "font-text-small-regular" : ""} ${state === "active" ? "w-full" : "w-fit"} ${state === "active" ? "flex" : ""} ${state === "active" ? "self-stretch" : ""} ${["default", "hover"].includes(state) ? "tracking-[var(--text-small-regular-letter-spacing)]" : ""} ${["default", "hover"].includes(state) ? "[font-style:var(--text-small-regular-font-style)]" : ""} ${["default", "hover"].includes(state) ? "text-[length:var(--text-small-regular-font-size)]" : ""} ${state === "active" ? "items-start" : ""} ${["default", "hover"].includes(state) ? "text-[#646464]" : ""} ${state === "active" ? "gap-4" : ""} ${state === "active" ? "flex-[0_0_auto]" : ""} ${["default", "hover"].includes(state) ? "font-[number:var(--text-small-regular-font-weight)]" : ""} ${["default", "hover"].includes(state) ? "leading-[var(--text-small-regular-line-height)]" : ""} ${inputFieldClassName}`}
        >
          {["default", "hover"].includes(state) && <p>{text1}</p>}

          {state === "active" && (
            <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
              <div className="items-start flex-[0_0_auto] flex gap-2 px-4 py-[8.5px] relative self-stretch w-full bg-white rounded-lg overflow-hidden border border-solid border-[#ebebeb]">
                <div className="items-start flex gap-2 relative flex-1 grow">
                  <img
                    className="relative w-4 h-4"
                    alt="Align left"
                    src="https://c.animaapp.com/medy1fp6HOX7TE/img/align-left.svg"
                  />

                  <div className="flex flex-1 grow items-center gap-1 relative">
                    <p className="flex-1 text-[#646464] relative mt-[-1.00px] font-text-base-regular font-[number:var(--text-base-regular-font-weight)] text-[length:var(--text-base-regular-font-size)] tracking-[var(--text-base-regular-letter-spacing)] leading-[var(--text-base-regular-line-height)] [font-style:var(--text-base-regular-font-style)]">
                      {text1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
