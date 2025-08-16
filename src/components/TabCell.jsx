import React from "react";

export const TabCell = ({ state, className, frameClassName, text = "Tab" }) => {
  return (
    <div
      className={`inline-flex flex-col items-center pt-0.5 pb-0 px-0 relative ${state === "default" ? "gap-2" : "gap-1.5"} ${state === "default" ? "h-[30px]" : ""} ${className}`}
    >
      <div
        className={`inline-flex items-center gap-1 flex-[0_0_auto] px-1 py-0 justify-center relative ${frameClassName}`}
      >
        <div
          className={`font-text-small-regular w-fit mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] relative font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] ${state === "selected" ? "text-brandprimary" : "text-[#212121]"}`}
        >
          {text}
        </div>
      </div>

      {["hover", "selected"].includes(state) && (
        <div
          className={`w-full self-stretch h-0.5 rounded-[4px_4px_0px_0px] relative ${state === "selected" ? "bg-brandprimary" : "bg-neutralsub-content"}`}
        />
      )}
    </div>
  );
};
