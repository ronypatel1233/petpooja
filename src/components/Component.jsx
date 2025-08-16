import React from "react";
import { TabCell } from "./TabCell";

export const Component = ({
  property1,
  className,
  lineClassName,
  lineClassNameOverride,
  imgClassName,
}) => {
  return (
    <div
      className={`border border-solid border-[#ebebeb] w-[584px] flex flex-col items-start h-[280px] overflow-hidden rounded-xl bg-white relative ${className}`}
    >
      <div className="[border-bottom-style:solid] border-[#ebebeb] w-full flex self-stretch items-start gap-2.5 flex-[0_0_auto] pt-3 pb-0 px-3 border-b relative">
        <div className="flex flex-col items-start grow gap-1 flex-1 relative">
          <div className="font-text-base-semibold w-[510px] mt-[-1.00px] tracking-[var(--text-base-semibold-letter-spacing)] text-[length:var(--text-base-semibold-font-size)] [font-style:var(--text-base-semibold-font-style)] text-[#212121] h-[22px] font-[number:var(--text-base-semibold-font-weight)] leading-[var(--text-base-semibold-line-height)] relative">
            Department wise allocation
          </div>

          <div className="inline-flex items-start gap-2 flex-[0_0_auto] relative">
            <TabCell
              className="!flex-[0_0_auto]"
              frameClassName="!px-2 !py-0"
              state="selected"
              text="Tasks"
            />
            <TabCell
              className="!flex-[0_0_auto]"
              frameClassName="!px-2 !py-0"
              state="default"
              text="Issues"
            />
            <TabCell
              className="!flex-[0_0_auto]"
              frameClassName="!px-2 !py-0"
              state="default"
              text="Forms"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 flex-[0_0_auto] relative">
          <div className="w-8 flex items-center gap-2.5 h-8 justify-center relative">
            <img
              className="w-5 h-5 relative"
              alt="Dots horizontal"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/dots-horizontal-3.svg"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex self-stretch items-start grow gap-1 flex-1 pt-5 pb-1 px-3 bg-white relative">
        <div className="inline-flex self-stretch flex-col items-start gap-7 flex-[0_0_auto] pt-0 pb-[47px] px-0 justify-around relative">
          <div className="inline-flex flex-col items-start grow flex-1 justify-between relative">
            <div className="font-text-small-regular w-fit mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              100%
            </div>

            <div className="font-text-small-regular self-stretch tracking-[var(--text-small-regular-letter-spacing)] [font-style:var(--text-small-regular-font-style)] text-[length:var(--text-small-regular-font-size)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              80%
            </div>

            <div className="font-text-small-regular self-stretch tracking-[var(--text-small-regular-letter-spacing)] [font-style:var(--text-small-regular-font-style)] text-[length:var(--text-small-regular-font-size)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              60%
            </div>

            <div className="font-text-small-regular self-stretch tracking-[var(--text-small-regular-letter-spacing)] [font-style:var(--text-small-regular-font-style)] text-[length:var(--text-small-regular-font-size)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              40%
            </div>

            <div className="font-text-small-regular self-stretch tracking-[var(--text-small-regular-letter-spacing)] [font-style:var(--text-small-regular-font-style)] text-[length:var(--text-small-regular-font-size)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              20%
            </div>
          </div>
        </div>

        <div className="flex self-stretch flex-col items-start grow flex-1 relative">
          {property1 === "frame-1410090927" && (
            <img
              className="relative flex-1 self-stretch w-full grow ml-[-1.00px]"
              alt="Frame"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/frame-1410090921.svg"
            />
          )}

          {property1 === "frame-1410090928" && (
            <div className="flex items-center relative flex-1 self-stretch w-full grow">
              <img
                className={`relative self-stretch w-px ml-[-1.00px] object-cover ${lineClassName}`}
                alt="Line"
                src="https://c.animaapp.com/medy1fp6HOX7TE/img/line-7.svg"
              />

              <div className="flex-col items-start justify-between pt-3 pb-0 px-0 flex-1 self-stretch grow flex relative">
                <img
                  className={`relative self-stretch w-full h-px mt-[-1.00px] object-cover ${lineClassNameOverride}`}
                  alt="Line"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/line-2.svg"
                />

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/line-2.svg"
                />

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/line-2.svg"
                />

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/line-2.svg"
                />

                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/line-2.svg"
                />

                <img
                  className={`relative self-stretch w-full h-px object-cover ${imgClassName}`}
                  alt="Line"
                  src="https://c.animaapp.com/medy1fp6HOX7TE/img/line-5.svg"
                />
              </div>

              <div className="flex w-[525px] h-40 items-end gap-[30px] px-[30px] py-0 absolute top-[13px] left-0 overflow-hidden overflow-x-scroll">
                <div className="inline-flex items-end gap-[30px] pl-0 pr-[30px] py-0 relative flex-[0_0_auto]">
                  <div className="flex w-10 h-[33px] items-start pt-2.5 pb-0 px-0 relative bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                    <div className="h-[120px] mb-[-97.00px] relative flex-1 grow bg-brandsecondary" />
                  </div>

                  <div className="flex w-10 h-[65px] items-start pt-3 pb-0 px-0 relative bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                    <div className="h-[120px] mb-[-67.00px] relative flex-1 grow bg-brandsecondary" />
                  </div>

                  <div className="flex w-10 h-[97px] items-start pt-[30px] pb-0 px-0 relative bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                    <div className="self-stretch relative flex-1 grow bg-brandsecondary" />
                  </div>

                  <div className="flex w-10 items-center pt-[30px] pb-0 px-0 relative bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                    <div className="h-[120px] relative flex-1 grow bg-brandsecondary" />
                  </div>

                  <div className="flex w-10 items-center pt-[30px] pb-0 px-0 relative bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                    <div className="h-[120px] relative flex-1 grow bg-brandsecondary" />
                  </div>

                  <div className="w-10 items-center pt-[30px] pb-0 px-0 bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden flex relative">
                    <div className="h-[120px] relative flex-1 grow bg-brandsecondary" />
                  </div>

                  <div className="flex w-10 items-center pt-[30px] pb-0 px-0 relative bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                    <div className="h-[120px] relative flex-1 grow bg-brandsecondary" />
                  </div>

                  <div className="flex w-10 items-center pt-[30px] pb-0 px-0 relative bg-[#ffdd9d] rounded-[8px_8px_0px_0px] overflow-hidden">
                    <div className="h-[120px] relative flex-1 grow bg-brandsecondary" />
                  </div>
                </div>
              </div>

              <div className="absolute w-4 h-[168px] top-0 left-[509px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.75)_100%)]" />
            </div>
          )}

          <div className="w-full flex self-stretch items-center gap-2.5 flex-[0_0_auto] justify-center relative">
            <div className="font-text-small-regular w-fit mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              Departments
            </div>
          </div>
        </div>

        <div className="inline-flex left-[410px] items-center top-[5px] gap-3 absolute">
          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="w-3 h-3 rounded bg-brandsecondary relative" />

            <div className="font-text-small-regular w-fit mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              Tasks
            </div>
          </div>

          <div className="inline-flex items-center gap-1 flex-[0_0_auto] relative">
            <div className="w-3 h-3 rounded bg-[#ffdd9d] relative" />

            <div className="font-text-small-regular w-fit mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-neutralsub-content font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)] relative">
              Overdue Tasks
            </div>
          </div>
        </div>
      </div>

      {property1 === "frame-1410090927" && (
        <div className="inline-flex flex-col items-start gap-1.5 p-2 absolute top-[70px] left-[142px] bg-neutralcontent rounded-lg border border-solid border-[#d2d6db] shadow-[0px_2px_4px_-1px_#0000000f,0px_4px_6px_-1px_#0000001a]">
          <p className="relative self-stretch mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralwhite text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
            Management
            <br />
            Assigned Tasks : 62% (120)
            <br />
            Overdue Tasks : 10% (12)
          </p>

          <div className="absolute w-3 h-3 top-[55px] left-[89px] bg-neutralcontent border-t [border-top-style:solid] border-l [border-left-style:solid] border-[#d2d6db] -rotate-45" />
        </div>
      )}
    </div>
  );
};
