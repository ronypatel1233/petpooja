import React from "react";

export const Tags = ({ state, className }) => {
  return (
    <div
      className={`border-[0.5px] border-solid inline-flex items-center gap-1 px-1.5 py-0.5 overflow-hidden rounded-md justify-center relative ${state === "overdue" ? "border-[#ff6d00]" : (state === "in-review") ? "border-[#3a84ec]" : "border-[#d9a541]"} ${state === "overdue" ? "bg-[#fff0e5]" : (state === "in-review") ? "bg-predictionbg" : "bg-warningbg"} ${className}`}
    >
      <div
        className={`font-text-small-regular w-fit mt-[-0.25px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] relative font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] ${state === "overdue" ? "text-issuecontent" : (state === "in-review") ? "text-predictioncontent" : "text-warningcontent"}`}
      >
        {state === "ongoing" && <>Ongoing</>}

        {state === "overdue" && <>Overdue</>}

        {state === "in-review" && <>In Review</>}
      </div>
    </div>
  );
};
