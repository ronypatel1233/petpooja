import React from "react";

export const InputField = ({
  property1,
  className,
  inputFieldClassName,
  contentClassName,
 
  text = "HO Outlet name",
  chevronDown = "https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-down.svg",
  inputClassName,
  inputType = "text",
}) => {
  return (
    <div className={`inline-flex items-start relative ${className}`}>
      <div
        className={`inline-flex items-start gap-4 flex-[0_0_auto] rounded-lg relative ${property1 === "hover" ? "border border-solid" : ""} ${property1 === "hover" ? "border-[#ebebeb]" : ""} ${property1 === "hover" ? "bg-neutralbg" : "bg-neutrallight-bg"} ${inputFieldClassName}`}
      >
        <div className="inline-flex flex-col items-start gap-1.5 flex-[0_0_auto] relative">
          <div
            className={`inline-flex items-center gap-6 px-4 py-[8.5px] h-8 overflow-hidden rounded-lg relative ${inputClassName}`}
          >
            <div
              className={`inline-flex mt-[-0.50px] items-center gap-2 flex-[0_0_auto] mb-[-0.50px] relative ${contentClassName}`}
            >
           
              <input
                className="inline-flex items-center gap-1 flex-[0_0_auto] relative border-[none] [background:none] font-text-small-regular mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-[#212121] font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] p-0 w-full"
                placeholder={text}
                type={inputType}
                defaultValue={inputType === "date" ? new Date().toISOString().split('T')[0] : ""}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />

            </div>

            <img
              className="w-4 mt-[-0.50px] h-4 mb-[-0.50px] relative"
              alt="Chevron down"
              src={chevronDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
