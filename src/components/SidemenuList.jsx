import React from "react";
import { SidemenuItem } from "./SidemenuItem";

export const SidemenuList = ({
  property1,
  className,
  sidemenuItemState = "default",
  sidemenuItemHome = "https://c.animaapp.com/medy1fp6HOX7TE/img/task-1.svg",
  sidemenuItemImg = "https://c.animaapp.com/medy1fp6HOX7TE/img/task-1.svg",
  sidemenuItemHome1 = "https://c.animaapp.com/medy1fp6HOX7TE/img/alert-circle-1.svg",
  visible = true,
  sidemenuItemHome2 = "https://c.animaapp.com/medy1fp6HOX7TE/img/calendar-dotted-3.svg",
  sidemenuItemHome3 = "https://c.animaapp.com/medy1fp6HOX7TE/img/layout-alt-03-1.svg",
  sidemenuItemHome4 = "https://c.animaapp.com/medy1fp6HOX7TE/img/users-01-4.svg",
  sidemenuItemHome5 = "https://c.animaapp.com/medy1fp6HOX7TE/img/line-chart-up-04-1.svg",
  sidemenuItemHome6 = "https://c.animaapp.com/medy1fp6HOX7TE/img/log-out-01-1.svg",
}) => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-1 bg-white relative ${className}`}
    >
      <SidemenuItem
        className={property1 === "collapsed" ? "!h-9 !w-9" : "!h-9"}
        hasDiv={property1 === "collapsed" ? false : undefined}
        home="https://c.animaapp.com/medy1fp6HOX7TE/img/home-03.svg"
        state={sidemenuItemState}
        text={property1 === "expanded" ? "Home" : undefined}
      />
      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home={sidemenuItemHome}
        state="default"
        text={property1 === "expanded" ? "Tasks" : undefined}
      />
      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home={sidemenuItemImg}
        state="default"
        text={property1 === "expanded" ? "Tasks" : undefined}
      />
      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home={sidemenuItemHome1}
        state="default"
        text={property1 === "expanded" ? "Issues" : undefined}
      />
      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home="https://c.animaapp.com/medy1fp6HOX7TE/img/layout-alt-02-2.svg"
        state="default"
        text={property1 === "expanded" ? "Forms" : undefined}
      />

      {visible && (
        <SidemenuItem
          className={property1 === "collapsed" ? "!h-9 !w-9" : "!h-9"}
          hasDiv={property1 === "collapsed" ? false : undefined}
          home="https://c.animaapp.com/medy1fp6HOX7TE/img/message-text-circle-02.svg"
          state="default"
          text={property1 === "expanded" ? "Chat" : undefined}
        />
      )}

      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home={sidemenuItemHome2}
        state="default"
        text={property1 === "expanded" ? "Calendar" : undefined}
      />
      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home={sidemenuItemHome3}
        state="default"
        text={property1 === "expanded" ? "Browse Templates" : undefined}
      />
      <SidemenuItem
        className={property1 === "collapsed" ? "!h-9 !w-9" : "!h-9"}
        hasDiv={property1 === "collapsed" ? false : undefined}
        home="https://c.animaapp.com/medy1fp6HOX7TE/img/layout-alt-04.svg"
        state="default"
        text={property1 === "expanded" ? "Temlate Library" : undefined}
      />
      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home={sidemenuItemHome4}
        state="default"
        text={property1 === "expanded" ? "User Management" : undefined}
      />
      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home={sidemenuItemHome5}
        state="default"
        text={property1 === "expanded" ? "Reports" : undefined}
      />
      <SidemenuItem
        className={property1 === "collapsed" ? "!h-9 !w-9" : "!h-9"}
        hasDiv={property1 === "collapsed" ? false : undefined}
        home="https://c.animaapp.com/medy1fp6HOX7TE/img/settings-05.svg"
        state="default"
        text={property1 === "expanded" ? "Settings" : undefined}
      />
      <SidemenuItem
        className={
          property1 === "collapsed" ? "!h-9 !inline-flex !w-[unset]" : "!h-9"
        }
        hasDiv={property1 === "collapsed" ? false : undefined}
        home={sidemenuItemHome6}
        state="default"
        text={property1 === "expanded" ? "Log Out" : undefined}
      />
    </div>
  );
};
