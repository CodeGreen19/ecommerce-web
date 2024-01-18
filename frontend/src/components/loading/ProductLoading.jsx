import React from "react";
import main_logo from "../image/logoSvg.svg";
function ProductLoading() {
  return (
    <div className=" loading absolute left-0 top-0 z-20 flex  h-screen w-full items-center justify-center bg-[#ffffff81]">
      <img src={main_logo} alt="gif" className="w-[60px] sm:w-[90px] " />
    </div>
  );
}

export default ProductLoading;
