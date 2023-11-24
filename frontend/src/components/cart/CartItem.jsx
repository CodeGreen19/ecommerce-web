import React, { Fragment, useState } from "react";
import "../style/Cart.css";
import Card from "./Card";
import AutoText from "../home/AutoText";
import Navbar from "../navbar/Navbar";
import FooterContent from "../footer/FooterContent";
import Footer from "../footer/Footer";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const navigate = useNavigate();
  const [openPromo, setOpenPromo] = useState(false);
  const checkoutHandler = () => {
    navigate("/cart/payment");
  };
  return (
    <Fragment>
      <AutoText />
      <Navbar />
      <div className="cart_items_box w-full ">
        <div className="m-auto my-5 flex  w-full flex-col  lg:flex-row xl:w-[1280px] ">
          <div className="left_side flex w-full flex-col gap-1 sm:min-h-[80vh] lg:w-[65%]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="right_side mt-4 flex  w-full items-start md:ml-3 lg:mt-0 lg:w-[35%]">
            <div className="w-full border-[1px] border-[#00000036] bg-gray-200 p-1">
              <h1 className="w-full p-2 text-[1.5rem] font-bold ">Summery</h1>
              <div
                className={`${
                  openPromo ? "h-[90px]" : "h-[40px]"
                } relative overflow-hidden bg-[white]`}
              >
                <span
                  className="absolute right-3 top-3"
                  onClick={() => setOpenPromo(!openPromo)}
                >
                  {openPromo ? (
                    <KeyboardArrowUpOutlinedIcon />
                  ) : (
                    <KeyboardArrowDownOutlinedIcon />
                  )}
                </span>
                <div className="p-3 py-3"> Do you have a promo code?</div>
                <div className="flex ">
                  <input
                    type="text"
                    className=" w-[230px] flex-wrap border-[1px] border-[#0000003a] bg-[whitesmoke] px-3 py-1  outline-none"
                  />{" "}
                  <button className="mx-3 border-[1px]   border-[#0000003a] px-3 py-1">
                    Apply
                  </button>
                </div>
              </div>
              <div className="price_info bg-[white] p-2">
                <div>
                  <span>
                    Subtotal <span className="text-[0.9rem]">(4 items)</span>
                  </span>
                  <span>123$</span>
                </div>
                <div>
                  <span>Shipping & Handling</span>
                  <span>123$</span>
                </div>
                <div>
                  <span>Tax</span>
                  <span>123$</span>
                </div>
                <div className="border-t-[1px] border-[#00000026]">
                  <span className="text-[1.2rem]">Total</span>
                  <span className="text-[1.2rem]">123$</span>
                </div>
              </div>
              <div>
                <button
                  className="ls_1 my-2 ml-[1px] hidden bg-[#000000c5] px-4 py-2 text-white sm:block "
                  onClick={checkoutHandler}
                >
                  Check Out
                </button>
              </div>
              {/* for mobile chect out button */}
              <div className="bt_1 fixed bottom-0 left-0 z-20 flex w-full items-center justify-center bg-[white] p-2 sm:hidden ">
                <button
                  className="ls_1  my-2  bg-[#000000c5] px-6 py-2 text-white  "
                  onClick={checkoutHandler}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />
      <Footer />
    </Fragment>
  );
}

export default CartItem;
