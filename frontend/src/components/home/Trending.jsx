import React from "react";
import treading1 from "../image/trending/treading1.jpg";
import treading2 from "../image/trending/treading2.jpg";
import treading3 from "../image/trending/treading3.jpg";
import treading4 from "../image/trending/treading4.jpg";

function Trending() {
  return (
    <div className="home_trending flex flex-wrap justify-center">
      <div>
        <img src={treading1} alt="treading" />
        <p>White Shoes - Adidas - Buy now to get 50% discount !</p>
      </div>
      <div>
        <img src={treading2} alt="treading" />
        <p>
          Black Loafer - Nike - Buy now to get discount almost 30% . This offer
          will avilable for 2 days.
        </p>
      </div>
      <div>
        <img src={treading3} alt="treading" />
        <p>
          Blue Sneakers - Puma - want to go to a tour on the top of the hill so
          don't hazitate to but this!
        </p>
      </div>
      <div>
        <img src={treading4} alt="treading" />
        <p>Black Shoe - Adidas - Just Do it !</p>
      </div>
    </div>
  );
}

export default Trending;
