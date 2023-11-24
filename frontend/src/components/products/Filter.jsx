import React, { Fragment, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "../utils/RangeSlider";
import { Rating } from "@mui/material";

function Filter() {
  const [brandOpen, setBrandOpen] = useState(true);
  const [sizeOpen, setSizeOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);
  const [ratingCount, setRatingCount] = useState(0);

  // -------items -------
  // const brands = ["Brand", "Puma", "Nike", "Adidas"];
  const colors = ["Black", "White", "Red", "Green", "gray", "brown"];
  const sizes = ["4.5", "5", "5.5", "6", "6.5", "7", "7.5"];
  const ratings = ["1", "2", "3", "4", "5"];
  // -------items -------

  // checkbox style
  const checkStyle = {
    color: "rgb(204, 204, 204)",
    "&.Mui-checked": {
      color: "black",
    },
  };
  return (
    <Fragment>
      {/* for price filter  */}
      <div className="bg-[white] pt-2">
        <span className="p-2 pt-2 text-[1.1rem]">
          Price Filter <span>(0$ - 1000$)</span>
        </span>
        <div className="px-2">
          <RangeSlider />
        </div>
      </div>
      <div
        className={`filter_option_box ${
          brandOpen ? "add" : ""
        } overflow-hidden bg-[white] p-2`}
      >
        <div className="brand flex justify-between ">
          <span className="text-[1.2rem]">Brand</span>
          <span onClick={() => setBrandOpen(!brandOpen)}>
            {brandOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </span>
        </div>
        <ul className="brand_ul">
          <li>
            <Checkbox sx={checkStyle} /> Adidas
          </li>
          <li>
            <Checkbox sx={checkStyle} /> Nike
          </li>
          <li>
            <Checkbox sx={checkStyle} /> Puma
          </li>
        </ul>
      </div>
      <div
        className={`filter_option_box2 ${
          sizeOpen ? "add" : ""
        } overflow-hidden bg-[white] p-2`}
      >
        <div className="brand flex justify-between ">
          <span className="text-[1.2rem]">Sizes</span>
          <span onClick={() => setSizeOpen(!sizeOpen)}>
            {sizeOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </span>
        </div>
        <ul className="flex w-full flex-wrap ">
          {sizes.map((size) => (
            <li className="m-1 flex h-[60px] w-[65px] items-center justify-center border-[1px] border-[#1a1a1a48] bg-[whitesmoke] ">
              {size}
            </li>
          ))}
        </ul>
      </div>
      {/* for color filter  */}
      <div
        className={`filter_option_box3 ${
          priceOpen ? "add" : ""
        } overflow-hidden bg-[white] p-2`}
      >
        <div className=" flex justify-between ">
          <span className="text-[1.2rem]">Colors</span>
          <span onClick={() => setPriceOpen(!priceOpen)}>
            {priceOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </span>
        </div>
        <ul className=" flex flex-wrap gap-2 pt-2">
          {colors.map((color) => (
            <li
              className={` flex h-[35px] w-[40px] items-center justify-center `}
              style={{
                backgroundColor: color.toLowerCase(),
                border: "1px solid black",
              }}
            ></li>
          ))}
        </ul>
      </div>
      {/* for ratings filter  */}
      <div
        className={`filter_option_box4 ${
          ratingOpen ? "add" : ""
        } overflow-hidden bg-[white] p-2`}
      >
        <div className=" flex justify-between ">
          <span className="text-[1.2rem]">Ratings</span>
          <span onClick={() => setRatingOpen(!ratingOpen)}>
            {ratingOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </span>
        </div>
        {ratings.map((rating) => (
          <div className="m-1 flex items-center justify-between">
            <Rating
              name="simple-controlled"
              size="small"
              readOnly
              value={rating}
            />
            <span
              className={`mr-2 flex h-[25px] w-[25px] cursor-pointer items-center justify-center gap-1 border-[1px] border-[#0000003c] bg-[${
                ratingCount >= rating ? "black" : "white"
              }] text-[${ratingCount >= rating ? "white" : "black"}]`}
              onClick={() => setRatingCount(rating)}
            >
              {rating}
            </span>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Filter;
