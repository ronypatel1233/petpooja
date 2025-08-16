import React from "react";
import { HeaderWrapper } from "../../components/HeaderWrapper";

export const Header = () => {
  return (
    <HeaderWrapper
      className="!gap-9 !flex-[0_0_auto] ![justify-content:unset] ![border-right-style:none] ![border-top-style:none] ![border-left-style:none]"
      hasBase={false}
      hasChevronRight={false}
      hasDiv={false}
      hasImg={false}
      text="Home"
    />
  );
};
