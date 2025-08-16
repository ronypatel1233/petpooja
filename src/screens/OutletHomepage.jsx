import React from "react";
import { Frame } from "./sections/Frame";
import { Header } from "./sections/Header";
import { SideMenu } from "./sections/SideMenu";

export const OutletHomepage = () => {
  return (
    <div className="flex flex-col w-[1440px] h-[720px] items-start relative bg-white">
      <Header />
      <div className="flex items-start justify-between relative flex-1 self-stretch w-full grow">
        <SideMenu />
        <Frame />
        <div className="absolute w-2 h-[100px] top-[30px] left-[1432px] bg-[#ebebeb] rounded-[999px]" />
      </div>
    </div>
  );
};
