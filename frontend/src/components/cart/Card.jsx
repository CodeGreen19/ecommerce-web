import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Card() {
  const imgUrl =
    "https://res.cloudinary.com/ddyrlplxn/image/upload/v1700322228/product_img/jrm4ukig61pczyps79cx.webp";
  return (
    <div className=" cart_card_box relative flex w-full items-start justify-start border-b-[1px] border-b-[#0000001c]">
      <div className="h-[80px] w-[80px] overflow-hidden border-gray-100 sm:h-[150px] sm:w-[150px] ">
        <img src={imgUrl} className="w-full" alt="" />
      </div>
      <div>
        <ul className="w-full">
          <li>
            <span>name</span>:Nike air Max
          </li>
          <li>
            <span>color </span>: red
          </li>
          <li>
            <span>size</span>: 5.5
          </li>
          <li>
            <span> quantity</span>: 1
          </li>
        </ul>
        <div className="h-[30px]">
          <button className="add_btn ">+</button>
          <button className="add_btn">5</button>
          <button className="add_btn ">-</button>
        </div>
      </div>
      <div className=" absolute bottom-3 right-3 flex gap-3">
        <button>
          <FavoriteBorderOutlinedIcon />
        </button>
        <button>
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>
      <div className="absolute right-3 top-3">120$</div>
    </div>
  );
}

export default Card;
