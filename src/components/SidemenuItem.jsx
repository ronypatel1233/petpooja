import React from "react";

export const SidemenuItem = ({
  state,
  className,
  text = "Tasks",
  home = "https://c.animaapp.com/medy1fp6HOX7TE/img/log-out-01-1.svg",
  hasDiv = true,
}) => {
  return (
    <div
      className={`w-44 flex items-center gap-2 p-2 rounded-lg relative ${state === "hover" ? "bg-neutralbg" : (state === "selected") ? "bg-brandlight" : ""} ${className}`}
    >
      <img
        className="w-5 h-5 relative"
        alt="Home"
        src={
          state === "default"
            ? home
            : "https://c.animaapp.com/medy1fp6HOX7TE/img/home-03.svg"
        }
      />

      {hasDiv && (
        <div
          className={`font-text-small-regular tracking-[var(--text-small-regular-letter-spacing)] [font-style:var(--text-small-regular-font-style)] text-[length:var(--text-small-regular-font-size)] flex-1 relative font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] ${state === "selected" ? "text-brandprimary" : "text-[#212121]"}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};
