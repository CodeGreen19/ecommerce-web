import React from "react";
import { search } from "../icons/icons";

function Search() {
  return (
    <div className="flex items-center justify-end border-b-[1px] border-b-[#00000032] p-2 py-3 xl:px-[1.7rem]">
      <div className="relative w-full border-[1px] border-[#0000003b]   outline-none md:w-[50%] xl:w-[30%] ">
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full bg-[whitesmoke]  p-2 pl-3 tracking-[1px] outline-none"
        />
        <button className="Search_icon_product absolute right-0 h-full w-[40px] bg-[black] text-white ">
          {search}
        </button>
      </div>
    </div>
  );
}

export default Search;
