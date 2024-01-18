import React, { Fragment } from "react";
import { search } from "../icons/icons";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";

function Search({ searchTxt, setSearchTxt, searchHandler }) {
  const { searchOpen } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className=" hidden items-center justify-end border-b-[1px] border-b-[#80808032] p-2 py-3 md:flex xl:px-[1.7rem]">
        <div className="relative w-full border-b-[1px] border-b-[#010101]  outline-none md:w-[50%] xl:w-[30%] ">
          <input
            type="text"
            placeholder="Search"
            value={searchTxt}
            className="h-full w-full bg-[white]  p-2 pl-3 tracking-[1px] outline-none"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button
            className="Search_icon_product absolute right-0 h-full w-[40px] bg-[black] text-[white] "
            onClick={() => searchHandler()}
          >
            {search}
          </button>
        </div>
      </div>
      <div
        className={`${
          searchOpen ? "flex" : "hidden"
        } items-center justify-end border-b-[1px] border-b-[#80808032] pt-[10px] md:hidden  xl:px-[1.7rem]`}
      >
        <div className="relative w-full border-b-[1px] border-b-[#010101]  outline-none md:w-[50%] xl:w-[30%] ">
          <button
            className="Search_icon_product absolute left-0 h-full w-[40px] bg-transparent text-[black] "
            onClick={() => searchHandler()}
          >
            {search}
          </button>
          <button
            className="Search_icon_product absolute right-0 h-full w-[40px] bg-transparent text-[black] "
            onClick={() => dispatch({ type: "SearchClose" })}
          >
            <CloseIcon />
          </button>
          <input
            type="text"
            placeholder="Search"
            value={searchTxt}
            className="h-full w-full bg-[white]  p-2 pl-10 tracking-[1px] outline-none"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Search;
