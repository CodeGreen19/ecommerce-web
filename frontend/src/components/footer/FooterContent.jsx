import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import AppleIcon from "@mui/icons-material/Apple";

function FooterContent() {
  const [show, setShow] = useState("");
  return (
    <div
      className={`footer_content_box flex  w-full flex-col items-center justify-evenly bg-[#474747] text-[white] md:flex-row md:text-black`}
    >
      <div className={`relative bg-[#6f6f6f] ${show === "first" ? "add" : ""}`}>
        <h3>Support</h3>
        <ul>
          <li>Order status </li>
          <li>Shipping info </li>
          <li>Returns </li>
          <li>Order cancellation </li>
          <li>Gift card </li>
          <li>Contact us </li>
        </ul>
        <span className="absolute right-2 top-3 md:hidden">
          {show === "first" ? (
            <KeyboardArrowUpOutlinedIcon onClick={() => setShow("")} />
          ) : (
            <KeyboardArrowDownOutlinedIcon onClick={() => setShow("first")} />
          )}
        </span>
      </div>
      <div
        className={`relative bg-[#525252] ${show === "second" ? "add" : ""}`}
      >
        <h3>About</h3>
        <ul>
          <li>News </li>
          <li>Career </li>
          <li>Investments </li>
          <li>Blog </li>
          <li>Sustainability </li>
          <li>Purpose </li>
        </ul>
        <span className="absolute right-2 top-3 md:hidden">
          {show === "second" ? (
            <KeyboardArrowUpOutlinedIcon onClick={() => setShow("")} />
          ) : (
            <KeyboardArrowDownOutlinedIcon onClick={() => setShow("second")} />
          )}
        </span>
      </div>
      <div className={`relative bg-[#303030] ${show === "third" ? "add" : ""}`}>
        <h3>Dicounts & Promotions</h3>
        <ul>
          <li>Students</li>
          <li>Miltary </li>
          <li>Teachers </li>
          <li>Doctores </li>
          <li>First Responders </li>
          <li>Birthday</li>
        </ul>
        <span className="absolute right-2 top-3 md:hidden">
          {show === "third" ? (
            <KeyboardArrowUpOutlinedIcon onClick={() => setShow("")} />
          ) : (
            <KeyboardArrowDownOutlinedIcon onClick={() => setShow("third")} />
          )}
        </span>
      </div>
      <div
        className={`relative bg-[#1b1b1b] ${show === "fourth" ? "add" : ""}`}
      >
        <h3>Download our app</h3>
        <ul className="download_app mt-3 flex w-full flex-col">
          <li className="m-1 w-[145px] border-[1px] border-[#a4a3a3] bg-[black] px-3 py-3">
            Google Play <ShopTwoIcon />
          </li>
          <li className="m-1 w-[145px] border-[1px] border-[#aeadad] bg-[black] px-3 py-3">
            App Store <AppleIcon />
          </li>
        </ul>
        <span className="absolute right-2 top-3 md:hidden">
          {show === "fourth" ? (
            <KeyboardArrowUpOutlinedIcon onClick={() => setShow("")} />
          ) : (
            <KeyboardArrowDownOutlinedIcon onClick={() => setShow("fourth")} />
          )}
        </span>
      </div>
    </div>
  );
}

export default FooterContent;
