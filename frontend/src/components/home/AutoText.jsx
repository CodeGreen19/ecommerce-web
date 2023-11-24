import React from "react";
import { useSelector } from "react-redux";

function AutoText() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="sticky top-0  z-50 flex h-[2rem] w-full items-center justify-center bg-black text-[0.7rem] text-white sm:h-10 sm:text-[0.8rem]">
      <span className=" tracking-[2px] sm:tracking-[3px]">
        {user && user.name
          ? `WELCOME ${user.name}`
          : "LOGIN TO GET 15% DISCOUNT !"}
      </span>
    </div>
  );
}

export default AutoText;
