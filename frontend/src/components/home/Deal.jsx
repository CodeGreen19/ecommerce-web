import React from "react";
import deal1 from "../image/deal/deal1.jpg";
import deal2 from "../image/deal/deal2.jpg";

function Deal() {
  return (
    <div className="home_deal flex flex-wrap justify-center">
      <div>
        <img src={deal1} alt="treading" />
      </div>
      <div>here is some text</div>
      <div>here is some text</div>
      <div>
        <img src={deal2} alt="treading" />
      </div>
    </div>
  );
}

export default Deal;
