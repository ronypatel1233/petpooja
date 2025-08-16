import React from "react";
import { SidemenuItem } from "./SidemenuItem";
import { SidemenuList } from "./SidemenuList";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  sidemenuListSidemenuItemHome = "https://c.animaapp.com/medy1fp6HOX7TE/img/task.svg",
  sidemenuListSidemenuItemImg = "https://c.animaapp.com/medy1fp6HOX7TE/img/task-1.svg",
  sidemenuListSidemenuItemState = "default",
}) => {
  return (
    <div
      className={`[border-right-style:solid] border-[#ebebeb] flex-col items-center border-r p-3 h-[664px] justify-between bg-white relative ${["default", "hover"].includes(property1) ? "w-[200px]" : ""} ${["variant-3", "variant-4"].includes(property1) ? "inline-flex" : "flex"} ${className}`}
    >
      <SidemenuList
        className={
          ["default", "hover"].includes(property1)
            ? "!self-stretch !flex-[0_0_auto] !flex !w-full"
            : "!flex-[0_0_auto]"
        }
        property1={
          ["default", "hover"].includes(property1) ? "expanded" : "collapsed"
        }
        sidemenuItemHome={
          property1 === "variant-4"
            ? "https://c.animaapp.com/medy1fp6HOX7TE/img/task-1.svg"
            : property1 === "hover"
              ? "https://c.animaapp.com/medy1fp6HOX7TE/img/task.svg"
              : sidemenuListSidemenuItemHome
        }
        sidemenuItemHome1={
          ["default", "hover"].includes(property1)
            ? "https://c.animaapp.com/medy1fp6HOX7TE/img/alert-circle.svg"
            : "https://c.animaapp.com/medy1fp6HOX7TE/img/alert-circle-1.svg"
        }
        sidemenuItemHome2={
          ["default", "hover"].includes(property1)
            ? "https://c.animaapp.com/medy1fp6HOX7TE/img/calendar-dotted-2.svg"
            : "https://c.animaapp.com/medy1fp6HOX7TE/img/calendar-dotted-3.svg"
        }
        sidemenuItemHome3={
          ["default", "hover"].includes(property1)
            ? "https://c.animaapp.com/medy1fp6HOX7TE/img/layout-alt-03.svg"
            : "https://c.animaapp.com/medy1fp6HOX7TE/img/layout-alt-03-1.svg"
        }
        sidemenuItemHome4={
          ["default", "hover"].includes(property1)
            ? "https://c.animaapp.com/medy1fp6HOX7TE/img/users-01-1.svg"
            : "https://c.animaapp.com/medy1fp6HOX7TE/img/users-01.svg"
        }
        sidemenuItemHome5={
          ["default", "hover"].includes(property1)
            ? "https://c.animaapp.com/medy1fp6HOX7TE/img/line-chart-up-04.svg"
            : "https://c.animaapp.com/medy1fp6HOX7TE/img/line-chart-up-04-1.svg"
        }
        sidemenuItemHome6={
          ["default", "hover"].includes(property1)
            ? "https://c.animaapp.com/medy1fp6HOX7TE/img/log-out-01.svg"
            : "https://c.animaapp.com/medy1fp6HOX7TE/img/log-out-01-1.svg"
        }
        sidemenuItemImg={
          ["default", "variant-3"].includes(property1)
            ? sidemenuListSidemenuItemImg
            : "https://c.animaapp.com/medy1fp6HOX7TE/img/task-1.svg"
        }
        sidemenuItemState={
          ["default", "variant-3"].includes(property1)
            ? sidemenuListSidemenuItemState
            : "default"
        }
        visible={false}
      />
      <div
        className={`flex-col gap-2 flex-[0_0_auto] relative ${["default", "hover"].includes(property1) ? "w-full" : ""} ${["variant-3", "variant-4"].includes(property1) ? "inline-flex" : "flex"} ${["default", "hover"].includes(property1) ? "self-stretch" : ""} ${["variant-3", "variant-4"].includes(property1) ? "items-center" : "items-start"} ${["variant-3", "variant-4"].includes(property1) ? "justify-center" : ""}`}
      >
        <SidemenuItem
          className={
            ["variant-3", "variant-4"].includes(property1)
              ? "!h-9 !shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a] !bg-white !w-9"
              : "!h-9 !shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a] !bg-white"
          }
          hasDiv={
            ["variant-3", "variant-4"].includes(property1) ? false : undefined
          }
          home="https://c.animaapp.com/medy1fp6HOX7TE/img/message-text-circle-02.svg"
          state="default"
          text={["default", "hover"].includes(property1) ? "Chat" : undefined}
        />
        <div
          className={`flex-col items-start gap-2 flex-[0_0_auto] rounded-lg relative ${["default", "hover"].includes(property1) ? "w-full" : ""} ${["variant-3", "variant-4"].includes(property1) ? "inline-flex" : "flex"} ${["default", "hover"].includes(property1) ? "self-stretch" : ""} ${["variant-3", "variant-4"].includes(property1) ? "px-0 py-2" : "p-2"} ${["default", "hover"].includes(property1) ? "bg-neutrallight-bg" : ""}`}
        >
          <div
            className={`flex items-center relative ${["variant-3", "variant-4"].includes(property1) ? "w-8" : "w-full"} ${["default", "hover"].includes(property1) ? "self-stretch" : ""} ${["variant-3", "variant-4"].includes(property1) ? "flex-col" : ""} ${["variant-3", "variant-4"].includes(property1) ? "gap-2.5" : "gap-2"} ${["default", "hover"].includes(property1) ? "flex-[0_0_auto]" : ""} ${["variant-3", "variant-4"].includes(property1) ? "h-8" : ""} ${["variant-3", "variant-4"].includes(property1) ? "rounded-full" : ""} ${["variant-3", "variant-4"].includes(property1) ? "justify-center" : ""} ${["variant-3", "variant-4"].includes(property1) ? "bg-brandprimary" : ""}`}
          >
            {["default", "hover"].includes(property1) && (
              <>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brandprimary relative">
                  <div className="font-text-base-medium tracking-[var(--text-base-medium-letter-spacing)] text-[length:var(--text-base-medium-font-size)] [font-style:var(--text-base-medium-font-style)] text-white font-[number:var(--text-base-medium-font-weight)] leading-none">
                    A
                  </div>
                </div>

                <div className="flex flex-col items-start grow flex-1 relative">
                  <div className="font-text-base-regular self-stretch mt-[-1.00px] tracking-[var(--text-base-regular-letter-spacing)] text-[length:var(--text-base-regular-font-size)] [font-style:var(--text-base-regular-font-style)] text-[#212121] font-[number:var(--text-base-regular-font-weight)] leading-[var(--text-base-regular-line-height)] relative">
                    Ajay
                  </div>

                  <div className="font-text-small-regular self-stretch -mt-0.5 tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
                    Manager
                  </div>
                </div>
              </>
            )}

            {["variant-3", "variant-4"].includes(property1) && (
              <div className="font-text-base-medium tracking-[var(--text-base-medium-letter-spacing)] text-[length:var(--text-base-medium-font-size)] [font-style:var(--text-base-medium-font-style)] text-white font-[number:var(--text-base-medium-font-weight)] leading-none">
                A
              </div>
            )}
          </div>
        </div>
      </div>

      {["hover", "variant-4"].includes(property1) && (
        <div
          className={`inline-flex items-center top-5 gap-2.5 shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a] p-1 rounded-[99999px] bg-white absolute ${property1 === "hover" ? "left-[190px]" : "left-[50px]"}`}
        >
          <img
            className="w-3 h-3 relative"
            alt="Chevron right"
            src={
              property1 === "hover"
                ? "https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-left.svg"
                : "https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-right.svg"
            }
          />
        </div>
      )}
    </div>
  );
};
