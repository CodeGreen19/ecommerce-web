import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

function WishList() {
  const imgUrl =
    "	https://res.cloudinary.com/ddyrlplxn/image/upload/v1700322228/product_img/jrm4ukig61pczyps79cx.webp";
  return (
    <div className="wish_main_box mb-9 flex w-full flex-wrap gap-1 bg-[whitesmoke] md:m-[2%] md:w-[60%]">
      <div className="b_1 relative h-[120px] w-[105px] overflow-hidden md:h-[200px] md:w-[180px]">
        <img src={imgUrl} className="h-full " alt="nike shoes " />
        <span className="b_1 ls_1 absolute bottom-0 left-0 bg-[white] p-[2px] px-1 text-[0.8rem] md:p-1 md:px-3 ">
          124$
        </span>
        <span className="absolute right-2 top-2">
          <FavoriteIcon />
        </span>
      </div>
    </div>
  );
}

export default WishList;
