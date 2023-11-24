import React from "react";
// import hero from "../image/safari.png";
import hero from "../image/herobg.jpg";
import whiteSneakers from "../image/white_sneakers.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function Hero() {
  return (
    <div className="relative flex h-[80vh] w-full items-start justify-start overflow-hidden">
      <img
        src={hero}
        alt=""
        className="box-border min-w-[900px] max-w-full opacity-50 "
      />
      <div className="hero_buttons absolute flex h-full flex-col items-start justify-end p-3">
        <button className="hero_button left-2">
          men
          <ArrowRightAltIcon />
        </button>
        <button className="hero_button left-2">
          woman
          <ArrowRightAltIcon />
        </button>
        <button className="hero_button left-2">
          top products
          <ArrowRightAltIcon />
        </button>
      </div>
      <div className="hero_shoe_img_box absolute right-0 top-[35px] m-[1px] flex w-[300px] items-center justify-center rounded-[3px] border-b-[2px] border-b-[black] bg-[#272727] sm:w-[30%] md:right-1">
        <img src={whiteSneakers} className=" w-[80%]" alt="sneakers" />
        <button className=" absolute bottom-0 right-0 hidden border-[1px] border-[#252525] bg-[black] px-2 py-1 text-[0.7rem] text-[white] sm:px-3 sm:py-2 sm:text-[1.3rem]">
          Shop Now
        </button>
      </div>
      <p className="absolute left-1 top-[280px] w-[90%] p-1 text-[1.2rem] tracking-[1px] sm:bottom-0 sm:text-[1.5rem] md:bottom-4 md:right-3 md:top-[235px] md:text-[1.8rem] md:tracking-[2px]">
        Buy now to get <span className="text-[2.5rem] text-red-500">45%</span>{" "}
        off ! This offer only for today!
      </p>
    </div>
  );
}

export default Hero;
