import React from "react";
import { imageUrl } from "../utils/Images";
import { useNavigate } from "react-router-dom";

function Trending() {
  const navigate = useNavigate();
  return (
    <div className="home_trending flex flex-wrap justify-center">
      <div onClick={() => navigate("/products")}>
        <img src={imageUrl.feature_img1} alt="treading" />
        <p>White Shoes - Adidas - Buy now to get 50% discount !</p>
      </div>
      <div onClick={() => navigate("/products")}>
        <img src={imageUrl.feature_img2} alt="treading" />
        <p>
          Black Loafer - Nike - Buy now to get discount almost 30% . This offer
          will avilable for 2 days.
        </p>
      </div>
      <div onClick={() => navigate("/products")}>
        <img src={imageUrl.feature_img3} alt="treading" />
        <p>
          White shoes - Nike - want to go to a tour on the top of the hill so
          don't hazitate to but this!
        </p>
      </div>
      <div onClick={() => navigate("/products")}>
        <img src={imageUrl.feature_img4} alt="treading" />
        <p> Red Shoe - Adidas - Just Do it !</p>
      </div>
    </div>
  );
}

export default Trending;
