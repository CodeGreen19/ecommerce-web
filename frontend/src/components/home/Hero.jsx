import React from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { filterData, filterDataEmpty } from "../utils/ProductUtils";
import { useDispatch } from "react-redux";
import { filteredProduct } from "../../redux/actions/product";
import { useNavigate } from "react-router-dom";

function Hero() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // for filter products
  const navItemHandler = (item) => {
    navigate("/products");
    filterDataEmpty();
    filterData.category = item;
    dispatch(filteredProduct(filterData));
  };
  return (
    <div className="relative flex h-[83vh] w-full items-end justify-start overflow-hidden before:absolute  before:z-10 before:h-full before:w-full before:bg-black before:opacity-60">
      <img
        src={
          "https://res.cloudinary.com/ddyrlplxn/image/upload/v1705493410/nike-many_ipl5di.jpg"
        }
        alt=""
        className="box-border w-full min-w-[900px] max-w-full "
      />
      <div className="hero_buttons absolute z-20 flex h-full flex-col items-start justify-end pb-12 pl-2 md:p-8 md:pb-6">
        <button
          className="hero_button left-2"
          onClick={() => navItemHandler("men")}
        >
          men
          <ArrowRightAltIcon />
        </button>
        <button
          className="hero_button left-2"
          onClick={() => navItemHandler("woman")}
        >
          woman
          <ArrowRightAltIcon />
        </button>
        <button
          className="hero_button left-2"
          onClick={() => navItemHandler("top-products")}
        >
          top products
          <ArrowRightAltIcon />
        </button>
      </div>
      <div className="ls_1 absolute left-[10%] top-1/2 z-30  text-[white] md:text-[1.3rem]">
        ShoeSafari. Just Do It...
      </div>
    </div>
  );
}

export default Hero;
