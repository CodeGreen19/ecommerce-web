import React, { Fragment, useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "../utils/RangeSlider";
import { Rating } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import {
  ratings,
  colors,
  height,
  sizes,
  checkStyle,
  filterData,
  filterDataEmpty,
  defaultPriceValue,
} from "../utils/ProductUtils";
import { useDispatch } from "react-redux";
import { filteredProduct } from "../../redux/actions/product";

function Filter() {
  const dispatch = useDispatch();
  // essential states
  const [heightOpen, setHeightOpen] = useState(true);
  const [sizeOpen, setSizeOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);
  const [ratingCount, setRatingCount] = useState(6);

  // for filter action
  const [heightArr, setHeightArr] = useState([]);
  const [selectColor, setSelectColor] = useState("");
  const [selectSizeArr, setSelectSizeArr] = useState([]);
  const [priceValue, setPriceValue] = useState([
    defaultPriceValue.minPrice,
    defaultPriceValue.maxPrice,
  ]);

  const handleRatingCount = (count) => {
    setRatingCount(count);
    filterData.rating = count;
  };

  // height handler
  const handleHeight = (item) => {
    if (heightArr.includes(item)) {
      let newHeight = heightArr.filter((exist) => exist !== item);
      setHeightArr(newHeight);
    } else {
      setHeightArr((exists) => [...exists, item]);
    }
  };
  // height handler
  const handleSizes = (size) => {
    if (selectSizeArr.includes(size)) {
      let newSize = selectSizeArr.filter((exist) => exist !== size);
      setSelectSizeArr(newSize);
    } else {
      setSelectSizeArr((exists) => [...exists, size]);
    }
  };

  const handleColor = (color) => {
    setSelectColor(color);
    filterData.color = color;
    dispatch(filteredProduct(filterData));
  };

  // price handler
  const priceHandler = (e, data) => {
    filterData.minPrice = data[0];
    filterData.maxPrice = data[1];
    setPriceValue([data[0], data[1]]);
    dispatch(filteredProduct(filterData));
    console.log(e);
  };
  // reset filter handler
  const resetFilterHandler = () => {
    setRatingCount(6);
    setHeightArr([]);
    setSelectColor("");
    setSelectSizeArr([]);
    setPriceValue([defaultPriceValue.minPrice, defaultPriceValue.maxPrice]);
    filterDataEmpty();
    dispatch(filteredProduct(filterData));
  };

  // for height filter
  useEffect(() => {
    if (heightArr) {
      filterData.height = heightArr.join(",");
      dispatch(filteredProduct(filterData));
    }
  }, [dispatch, heightArr]);

  // for sizes filter
  useEffect(() => {
    if (selectSizeArr) {
      filterData.sizes = selectSizeArr.join(",");
      dispatch(filteredProduct(filterData));
    }
  }, [dispatch, selectSizeArr]);

  // for ratings filter
  useEffect(() => {
    if (ratingCount < 6) {
      dispatch(filteredProduct(filterData));
    }
  }, [dispatch, ratingCount]);

  return (
    <Fragment>
      {/* for price filter  */}
      <div className="mt-5 flex items-center justify-between xl:mt-0">
        <span className="ls_1 p-1 font-bold">FILTERS</span>
        <button className="bb_1" onClick={resetFilterHandler}>
          reset
        </button>
      </div>
      <div className="bg-[white] pt-2">
        <span className="p-2 pt-2 text-[1.1rem]">
          Price Filter{" "}
          <span>{`${defaultPriceValue.minPrice}$ - ${defaultPriceValue.maxPrice}$`}</span>
        </span>
        <div className="mx-3 px-1">
          <RangeSlider
            priceHandler={priceHandler}
            defaultValue={defaultPriceValue}
            priceValue={priceValue}
          />
        </div>
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
                ratingCount <= rating ? "black" : "white"
              }] text-[${ratingCount <= rating ? "white" : "black"}]`}
              onClick={(e) => handleRatingCount(rating)}
            >
              {rating}
            </span>
          </div>
        ))}
      </div>
      <div
        className={`filter_option_box ${
          heightOpen ? "add" : ""
        } overflow-hidden bg-[white] p-2`}
      >
        <div className="brand flex justify-between ">
          <span className="text-[1.2rem]">Height</span>
          <span onClick={() => setHeightOpen(!heightOpen)}>
            {heightOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </span>
        </div>
        <ul className="brand_ul">
          {height.map((item, i) => (
            <li>
              <Checkbox
                checked={heightArr.includes(item) ? true : false}
                sx={checkStyle}
                onClick={() => handleHeight(item)}
              />{" "}
              {item}
            </li>
          ))}
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
            <li
              className={`m-1 flex h-[60px] w-[29%] cursor-pointer items-center justify-center border-[#1a1a1a48]  bg-[white] ${
                selectSizeArr.includes(size)
                  ? "border-[1px] border-[#1a1a1afc]"
                  : "border-[1px]"
              }`}
              onClick={() => handleSizes(size)}
            >
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
              className={` relative flex h-[35px] w-[40px] cursor-pointer items-center justify-center `}
              onClick={() => handleColor(color)}
              style={{
                backgroundColor: color.toLowerCase(),
                border: "1px solid black",
              }}
            >
              {color === selectColor && (
                <span>
                  <CheckIcon
                    sx={
                      color === "white"
                        ? { color: "black" }
                        : { color: "white" }
                    }
                  />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Filter;
