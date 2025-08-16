import React from "react";
import { Component2 } from "./Component2";
import { DivWrapper } from "./DivWrapper";
import { PropertyFrameWrapper } from "./PropertyFrameWrapper";
import { Tags } from "./Tags";

export const TableCell = ({
  property1,
  className,
  frameClassName,
  frameClassNameOverride,
  divClassName,
  text = "Heading",
  hasRectangle = true,
  hasDiv = true,
  divClassNameOverride,
  tagsState = "ongoing",
  tagsStateOngoingClassName,
  visible = true,
  visible1 = true,
  hasRectangle1 = true,
  propertyFrameWrapperDotsHorizontal = "https://c.animaapp.com/medy1fp6HOX7TE/img/dots-horizontal.svg",
}) => {
  return (
    <div
      className={`inline-flex items-center relative ${["actions", "default"].includes(property1) ? "h-[47px]" : ""} ${["actions", "default", "header-hover"].includes(property1) ? "justify-center" : ""} ${property1 === "header-hover" ? "bg-neutralbg" : ""} ${className}`}
    >
      <div
        className={`flex-col relative ${property1 === "default" ? "w-[72px]" : ""} ${property1 === "default" ? "flex" : "inline-flex"} ${["actions", "default"].includes(property1) ? "self-stretch" : ""} ${property1 === "tag" ? "items-start" : "items-center"} ${["actions", "header-hover", "tag"].includes(property1) ? "flex-[0_0_auto]" : ""} ${property1 === "tag" ? "justify-center" : ""} ${frameClassName}`}
      >
        <div
          className={`items-center px-2 py-3 relative ${property1 === "default" ? "w-full" : ""} ${property1 === "default" ? "flex" : "inline-flex"} ${property1 === "default" ? "self-stretch" : ""} ${["actions", "default"].includes(property1) ? "grow" : ""} ${["header-hover", "tag"].includes(property1) ? "gap-2.5" : "gap-2"} ${["header-hover", "tag"].includes(property1) ? "flex-[0_0_auto]" : "flex-1"} ${["default", "header-hover"].includes(property1) ? "justify-center" : ""} ${frameClassNameOverride}`}
        >
          {["default", "header-hover"].includes(property1) && (
            <div
              className={`text-[#212121] relative ${property1 === "header-hover" ? "font-text-base-semibold" : "font-text-base-regular"} ${property1 === "header-hover" ? "w-fit" : ""} ${property1 === "header-hover" ? "tracking-[var(--text-base-semibold-letter-spacing)]" : "tracking-[var(--text-base-regular-letter-spacing)]"} ${property1 === "header-hover" ? "[font-style:var(--text-base-semibold-font-style)]" : "[font-style:var(--text-base-regular-font-style)]"} ${property1 === "header-hover" ? "text-[length:var(--text-base-semibold-font-size)]" : "text-[length:var(--text-base-regular-font-size)]"} ${property1 === "header-hover" ? "mt-[-1.00px]" : ""} ${property1 === "default" ? "flex-1" : ""} ${property1 === "header-hover" ? "font-[number:var(--text-base-semibold-font-weight)]" : "font-[number:var(--text-base-regular-font-weight)]"} ${property1 === "header-hover" ? "leading-[var(--text-base-semibold-line-height)]" : "leading-[var(--text-base-regular-line-height)]"} ${property1 === "default" ? divClassNameOverride : (property1 === "header-hover") ? divClassName : undefined}`}
            >
              {text}
            </div>
          )}

          {property1 === "tag" && (
            <Tags className={tagsStateOngoingClassName} state={tagsState} />
          )}

          {property1 === "actions" && (
            <>
              <>{visible && <DivWrapper property1="frame-1410090881" />}</>

              <>{visible1 && <Component2 property1="frame-1410090882" />}</>

              <>
                {hasRectangle1 && (
                  <div className="relative self-stretch w-px bg-[#ebebeb] rounded-full" />
                )}
              </>

              <PropertyFrameWrapper
                dotsHorizontal={propertyFrameWrapperDotsHorizontal}
                property1="frame-1410090883"
              />
            </>
          )}
        </div>

        {hasRectangle && (
          <div className="w-full self-stretch h-px bg-[#ebebeb] relative" />
        )}
      </div>

      {hasDiv && <div className="w-px self-stretch bg-[#ebebeb] relative" />}
    </div>
  );
};
