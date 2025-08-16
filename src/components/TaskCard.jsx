import React from "react";
import { Tags } from "./Tags";

export const TaskCard = ({
  property1,
  className,
  text = "ID #1334",
  text1 = "Task Name",
  text2 = "12",
  text3 = "3 April, 2025",
}) => {
  return (
    <div
      className={`border border-solid border-[#ebebeb] w-[268px] flex flex-col items-start gap-2 p-3 rounded-lg bg-white relative ${property1 === "hover" ? "shadow-[0px_2px_4px_-1px_#0000000f,0px_4px_6px_-1px_#0000001a]" : ""} ${property1 === "hover" ? "overflow-hidden" : ""} ${className}`}
    >
      <div className="w-full flex self-stretch items-start flex-[0_0_auto] justify-between relative">
        <div className="inline-flex flex-col items-start gap-1 flex-[0_0_auto] relative">
          <div className="inline-flex items-center gap-0.5 flex-[0_0_auto] relative">
            <img
              className="w-4 h-4 relative"
              alt="Chevron up"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-up.svg"
            />

            <div className="font-text-small-regular w-fit mt-[-0.50px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              {text}
            </div>
          </div>

          <div className="font-text-small-medium w-fit tracking-[var(--text-small-medium-letter-spacing)] [font-style:var(--text-small-medium-font-style)] text-[length:var(--text-small-medium-font-size)] text-[#212121] font-[number:var(--text-small-medium-font-weight)] leading-[var(--text-small-medium-line-height)] relative">
            {text1}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 flex-[0_0_auto] relative">
          <div className="inline-flex items-center gap-0.5 flex-[0_0_auto] relative">
            <img
              className="w-4 h-4 relative"
              alt="Message circle"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/message-circle-02.svg"
            />

            <div className="font-text-small-regular w-fit mt-[-0.50px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              {text2}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex self-stretch flex-col items-start gap-2.5 flex-[0_0_auto] relative">
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative">
          <div className="inline-flex items-center gap-3 flex-[0_0_auto] relative">
            <div className="inline-flex items-center gap-0.5 flex-[0_0_auto] relative">
              <img
                className="w-4 h-4 relative"
                alt="Calendar dotted"
                src="https://c.animaapp.com/medy1fp6HOX7TE/img/calendar-dotted.svg"
              />

              <div className="font-text-small-regular w-fit mt-[-0.50px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
                {text3}
              </div>
            </div>

            <div className="inline-flex items-center gap-0.5 flex-[0_0_auto] relative">
              <img
                className="w-4 h-4 relative"
                alt="Clock"
                src="https://c.animaapp.com/medy1fp6HOX7TE/img/clock.svg"
              />

              <div className="font-text-small-regular w-fit mt-[-0.50px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
                11:00 am
              </div>
            </div>
          </div>

          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-brandprimary relative">
            <div className="font-text-small-regular tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralwhite font-[number:var(--text-small-regular-font-weight)] leading-none">
              A
            </div>
          </div>
        </div>

        <div className="w-full flex self-stretch items-center gap-2 flex-[0_0_auto] relative">
          <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] p-0.5 rounded justify-center bg-neutralbg relative">
            <img
              className="w-4 h-4 relative"
              alt="Layout alt"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/layout-alt-02.svg"
            />
          </div>

          <div className="flex items-center grow flex-1 justify-between relative">
            <Tags
              className="!mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
              state="ongoing"
            />
            <div className="inline-flex items-center gap-1 flex-[0_0_auto] px-1.5 py-0 overflow-hidden rounded-lg bg-neutralbg relative">
              <img
                className="w-4 h-4 relative"
                alt="Briefcase"
                src="https://c.animaapp.com/medy1fp6HOX7TE/img/briefcase-01.svg"
              />

              <div className="font-text-small-regular w-fit tracking-[var(--text-small-regular-letter-spacing)] [font-style:var(--text-small-regular-font-style)] text-[length:var(--text-small-regular-font-size)] text-[#212121] font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
                Inventory
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
