import React from "react";
import { imageUrl } from "../utils/Images";

function Deal() {
  return (
    <div className="home_deal flex flex-wrap justify-center">
      <div>
        <img src={imageUrl.exclusive_img1} alt="treading" />
      </div>
      <div className="flex items-center justify-start">
        <button className="shop_button before:left-[-7px]">Shop Now</button>
      </div>
      <div className="flex items-center justify-end">
        <button className="shop_button mr-3 before:right-[-7px]">
          Shop Now
        </button>
      </div>
      <div>
        <img src={imageUrl.exclusive_img2} alt="treading" />
      </div>
    </div>
  );
}

export default Deal;
