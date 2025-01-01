"use client";
import LeftHeader from "./left-header";
import MiddleHeader from "./middle-header";
import RightHeader from "./right-header";

const MainHeader = () => {
  return (
    <>
      <div className="flex z-50 items-center justify-between px-3 py-4 bg-slate-900 border-gray-200 fixed w-full top-0">
        <LeftHeader />
        <MiddleHeader />
        <RightHeader />
      </div>
    </>
  );
};

export default MainHeader;
