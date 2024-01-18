import React from "react";
import main_logo from "../image/logoSvg.svg";
function Loading() {
  return (
    <div className="loading  flex h-screen w-full items-center justify-center">
      <img src={main_logo} alt="gif" className="w-[60px] sm:w-[90px] " />
    </div>
  );
}

export default Loading;
