import React, { Fragment, useEffect, useState } from "react";
import "../style/Payment.css";
import AutoText from "../home/AutoText";
import Navbar from "../navbar/Navbar";
import FooterContent from "../footer/FooterContent";
import Footer from "../footer/Footer";
import Address from "./Address";
import { useDispatch, useSelector } from "react-redux";
import ProductLoading from "../loading/ProductLoading";
import { getCartAction } from "../../redux/actions/cart";
import { orderAction } from "../../redux/actions/order";

function Payment() {
  const { loading, summery, cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // address states
  const [addressData, setAddressData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    village: "",
    road: "",
    mobileNo: "",
    pinCode: "",
  });
  const paymentHandler = () => {
    let info = addressData;
    info.price = summery.total;
    info.qty = summery.count;
    let cartItems = [];

    // cart items
    cart.forEach((item) => {
      cartItems.push(item);
    });
    info.cartItems = cartItems;

    dispatch(orderAction(info));
  };
  useEffect(() => {
    dispatch(getCartAction({ userId: "659d08a6c335bb1a86962f0d" }));
  }, [dispatch]);
  return (
    <Fragment>
      <AutoText />
      <Navbar />
      <div className="payment_item_box w-full ">
        {loading && <ProductLoading />}
        <div className="m-auto my-5 flex  w-full flex-col  lg:flex-row xl:w-[1280px] ">
          <div className="left_side_payment flex w-full flex-col gap-1 sm:min-h-[80vh] lg:w-[65%]">
            <Address setAddressData={setAddressData} />
          </div>
          <div className="right_side_payment m-[1px] mt-4 flex  w-[99%] items-start md:ml-3 lg:mt-0 lg:w-[35%]">
            <div className="w-full border-[1px] border-[#00000036] bg-gray-200 p-1">
              <h1 className="w-full p-2 text-[1.5rem] font-bold ">Summery</h1>

              <div className="price_info bg-[white] p-2">
                <div>
                  <span>
                    Subtotal
                    <span className="text-[0.9rem]">
                      ({summery && summery.count} items)
                    </span>
                  </span>
                  <span>{summery && summery.subtotal}$</span>
                </div>
                <div>
                  <span>Shipping & Handling</span>
                  <span>{summery && summery.shippingCost}$</span>
                </div>
                <div>
                  <span>Tax</span>
                  <span>{summery && summery.tax}$</span>
                </div>
                <div className="border-t-[1px] border-[#00000026]">
                  <span className="text-[1.2rem]">Total</span>
                  <span className="text-[1.2rem]">
                    {summery && summery.total}$
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="ls_1 my-2 ml-[1px] hidden bg-[#000000c5] px-4 py-2 text-white sm:block "
                  onClick={() => paymentHandler()}
                >
                  Payment
                </button>
              </div>
              {/* for mobile chect out button */}
              <div className="bt_1 ls_1 fixed bottom-0 left-0 z-20 flex w-full items-center justify-center bg-[white] p-2 sm:hidden ">
                <button
                  className="  my-2  bg-[#000000c5] px-6 py-2 text-white  "
                  onClick={() => paymentHandler()}
                >
                  Payment
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

export default Payment;
