import React from "react";
import { CustomDatePicker } from "./CustomDatePicker";
import { OutletSelector } from "./OutletSelector";

export const HeaderWrapper = ({
  className,
  hasBase = true,
  hasChevronRight = true,
  hasDiv = true,
  hasImg = true,
  text = "Task Details",
}) => {
  return (
    <div
      className={`flex w-[1440px] items-center justify-between pl-3 pr-6 py-3 relative bg-white border-b [border-bottom-style:solid] border-[#ebebeb] ${className}`}
    >
      <img
        className="relative w-44 h-8"
        alt="Top"
        src="https://c.animaapp.com/medy1fp6HOX7TE/img/top.svg"
      />

      <div className="flex items-center justify-between relative flex-1 grow">
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          {hasBase && (
            <div className="h-5 gap-1 flex-[0_0_auto] inline-flex items-center relative">
              <img
                className="relative w-4 h-4"
                alt="Home"
                src="https://c.animaapp.com/medy1fp6HOX7TE/img/home-03-9.svg"
              />
            </div>
          )}

          {hasChevronRight && (
            <img
              className="relative w-5 h-5"
              alt="Chevron right"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-right-1.svg"
            />
          )}

          {hasDiv && (
            <div className="gap-1 flex-[0_0_auto] inline-flex items-center relative">
              <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] text-center tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
                Task
              </div>
            </div>
          )}

          {hasImg && (
            <img
              className="relative w-5 h-5"
              alt="Chevron right"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-right-1.svg"
            />
          )}

          <div className="gap-1 flex-[0_0_auto] inline-flex items-center relative">
            <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] text-center tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
              {text}
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <img
            className="relative w-8 h-8"
            alt="Frame"
            src="https://c.animaapp.com/medy1fp6HOX7TE/img/frame-1410091207.svg"
          />

          <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
            <img
              className="relative w-5 h-5"
              alt="Bell"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/bell-01.svg"
            />
          </div>

          <div className="flex w-[141px] items-start gap-4 relative">
            <CustomDatePicker 
              className="flex-[0_0_auto]"
              onDateChange={(date) => console.log('Date changed:', date)}
            />
          </div>

          <OutletSelector
            className="flex-[0_0_auto]"
            onOutletChange={(outlet) => console.log('Outlet changed:', outlet)}
          />

          <div className="relative self-stretch w-px bg-[#ebebeb] rounded-full" />

          <button className="all-[unset] box-border inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="h-8 justify-center px-3.5 py-1.5 bg-brandprimary rounded-lg inline-flex items-center relative">
              <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                <img
                  className="relative w-4 h-4"
                  alt="Plus"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/plus.svg"
                />

                <button className="all-[unset] box-border relative w-fit mt-[-1.00px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-white text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                  Create
                </button>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
