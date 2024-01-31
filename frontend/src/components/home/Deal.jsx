import React from "react";
import { imageUrl } from "../utils/Images";
import { useNavigate } from "react-router-dom";

function Deal() {
  const navigate = useNavigate();
  return (
    <div className="home_deal flex flex-wrap justify-center">
      <div>
        <img src={imageUrl.exclusive_img1} alt="treading" />
      </div>
      <div className="flex items-center justify-start">
        <button
          className="shop_button before:left-[-7px]"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </div>
      <div className="flex items-center justify-end">
        <button
          className="shop_button mr-3 before:right-[-7px]"
          onClick={() => navigate("/products")}
        >
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
