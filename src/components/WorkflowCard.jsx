import React from "react";
import { VerticalLine } from "./VerticalLine";

export const WorkflowCard = ({
  property1,
  className,
  text = "How to Manage Stock",
  text1 = "10",
}) => {
  return (
    <div
      className={`border border-solid border-[#ebebeb] w-[268px] flex flex-col items-start gap-4 p-3 rounded-lg bg-white relative ${property1 === "hover" ? "shadow-[0px_2px_4px_-1px_#0000000f,0px_4px_6px_-1px_#0000001a]" : ""} ${className}`}
    >
      <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative">
        <div className="inline-flex flex-col items-start gap-1 flex-[0_0_auto] relative">
          <div className="font-text-small-medium w-fit mt-[-1.00px] tracking-[var(--text-small-medium-letter-spacing)] text-[length:var(--text-small-medium-font-size)] [font-style:var(--text-small-medium-font-style)] text-[#212121] font-[number:var(--text-small-medium-font-weight)] leading-[var(--text-small-medium-line-height)] relative">
            {text}
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] p-0.5 rounded bg-neutralbg relative">
          <img
            className="w-4 h-4 relative"
            alt="Eye"
            src="https://c.animaapp.com/medy1fp6HOX7TE/img/eye.svg"
          />
        </div>
      </div>

      <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative">
        <div className="inline-flex items-center gap-2 flex-[0_0_auto] relative">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-text-small-regular w-fit mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              Responses
            </div>

            <div className="inline-flex flex-col items-center gap-2.5 flex-[0_0_auto] px-[3px] py-0 rounded-full justify-center bg-white relative">
              <div className="font-text-small-regular self-stretch mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-[#212121] font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
                {text1}
              </div>
            </div>
          </div>

          <VerticalLine
            className="!self-stretch !h-[unset]"
            lineClassName="!h-4"
          />
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="font-text-small-regular w-fit mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              Tasks
            </div>

            <div className="inline-flex flex-col items-center gap-2.5 flex-[0_0_auto] px-[3px] py-0 rounded-full justify-center bg-white relative">
              <div className="font-text-small-regular self-stretch mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-[#212121] font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
                {text1}
              </div>
            </div>
          </div>
        </div>

        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-brandprimary relative">
          <div className="font-text-small-regular tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralwhite font-[number:var(--text-small-regular-font-weight)] leading-none">
            A
          </div>
        </div>
      </div>
    </div>
  );
};
