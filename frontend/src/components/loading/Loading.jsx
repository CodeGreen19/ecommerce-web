import React from "react";
import main_logo from "../image/main_logo.jpg";
function Loading() {
  return (
    <div className="loading flex h-screen w-full items-center justify-center">
      <img
        src={main_logo}
        alt="gif"
        className="w-[60px] opacity-[0.8] sm:w-[90px] "
      />
    </div>
  );
}

export default Loading;
